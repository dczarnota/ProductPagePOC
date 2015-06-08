 var JSX = require('node-jsx').install();
 var React = require('react');
 var express = require('express');
 var router = express.Router();
 var httpRequest = require('../Utils/HttpRequestModule');
 var metaTagBuilder = require('../Utils/metaTagBuilder');
 var log = require('../Utils/logger');
 var productModel = require('../Models/productModel');
 var productPageComponent = require('../Components/pp_pageApp.react.js');
 var async = require('async');

 var seoUrl = "http://api.art.com/ECommerceAPI.svc/jsonp/SEOMetaInfoGet?apiKey=519BAAC8E607413CA1FC043C92D08AAD&sessionId=A0F866D6907D411395E5CEDB6C359357&pageSourceType=ProductPage&itemId=8936349&categoryID=6126&pageNumber=1";
 var catelogITemUrl = "http://api.art.com/EcommerceAPI.svc/jsonp/CatalogItemGet?apiKey=519BAAC8E607413CA1FC043C92D08AAD&sessionId=130740845CEE4EF48D1CCCBA792C7365&itemId=8936349&lookupType=ItemNumber";
 /*
  router configuration after /Product/*
  */

 router.get("/", function(req, res) {

   async.waterfall([
     /*
     categet item call
     */
     function(callback) {
       log.info('Initiating product Catelog item get call');
       httpRequest.makeGetRequest(catelogITemUrl, null, function(err, data) {
         if (!err) {
           log.info('Catelog item get call successful');
           //get only the First Item of the aarray
           data = data.d.Items[0];
           log.info('Passing the rtaw data through filter to flatten the response');

           callback(null, data);
         } else {
           log.error('Catelog call failed => error ' + err)
         }
       });
     }
     ,
     function(data,callback){
       var api ="http://api.art.com/EcommerceAPI.svc/jsonp/PromosGetActive?apiKey=328CE70CEB414F77972BB1FA4449E915&sessionId=D6B5E1FC7661477CAFDB5F8D67D4E7BB";
       log.info('Initiating skinny banner get call');
       httpRequest.makeGetRequest(api, null, function(err, promoData) {
         if (!err) {
           log.info('skinny banner get call successful');
           callback(null,promoData.d.Discount[0],data);
         } else {
           log.error('skinny banner get call failed => error ' + err)
         }
       });
     },
     function(promoData,data, callback) {
       log.info('Passing the rtaw data through filter to flatten the response');
       //pass the raw data througn a filter to flatten the data
       data = productModel.getFlatResponse(data);
       var titleData = {
         title: data.title,
         artist: data.artist,
         productType: data.productType,
         ProductPageUrl: data.ProductPageUrl,
         sku: data.sku
       }
       var herodata = data.images;
       var today = new Date();
       var tomorrow = new Date(today);
       tomorrow.setDate(today.getDate() + 1);
       var monthNames = [
         "January", "February", "March",
         "April", "May", "June", "July",
         "August", "September", "October",
         "November", "December"
       ];

       var bottomBarData = {
        displayPrice:data.prices.displayPrice,
         price: "$" + data.prices.price,
         arrivesBy: monthNames[tomorrow.getMonth()] + tomorrow.getDate()
       };

       log.info('rendering component')
         /*
         renderthe react components
          */
        promoData.DiscountExpirationDt=  new Date (parseInt(promoData.DiscountExpirationDt.split("/Date(").pop().split(")/")[0]));
        promoData.DiscountExpirationDt = ( promoData.DiscountExpirationDt.getMonth() + 1) + "/" +  promoData.DiscountExpirationDt.getDate() + "/" +  promoData.DiscountExpirationDt.getFullYear().toString().substr(2,2);
       var markup = React.renderComponentToString(
         productPageComponent({
           Title: titleData,
           Hero: herodata,
           Price: bottomBarData,
           PromoData:promoData
         })
       );
       var seoTags = metaTagBuilder.getMetaTags(seoUrl, function(error, data) {
         if (!error) {
           log.info('meta tag call successful');
           callback(null,promoData,data, markup);
         } else {
           log.error('Meta tag call failed, error ==>' + error);
         }
       });
     },
     function(promoData,data,markup) {
      log.info('rendering page');
       var metaTags = [];
       console.log(data);
       for (i = 2; i < data.length; i++) {
         metaTags.push(data[i].Value);
       }



      console.log(promoData);
       res.render('product', {
         htmlTag: data[0].Value,
         title: data[1].Value,
         metaTags: metaTags,
         markup: markup
        
       });
     }
   ]);



 });

 // router.get("/",function(req,res){
 //   res.send("asdasD");
 // })
 module.exports = router;