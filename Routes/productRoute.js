 var JSX = require('node-jsx').install();
 var React = require('react');
 var express = require('express');
 var router = express.Router();
 var httpRequest = require('../Utils/HttpRequestModule');
 var metaTagBuilder = require('../Utils/metaTagBuilder');
 var log = require('../Utils/logger');
 var productModel = require('../Models/productModel');
 var productPageComponent = require('../Components/pp_pageApp.react.js');
 var basicCOmponent = require('../Components/basic.react.js');
 var async = require('async');
 var seoUrl = "http://api.art.com/ECommerceAPI.svc/jsonp/SEOMetaInfoGet?apiKey=519BAAC8E607413CA1FC043C92D08AAD&sessionId=A0F866D6907D411395E5CEDB6C359357&pageSourceType=ProductPage&itemId=9045049&categoryID=6126&pageNumber=1";
 var catelogITemUrl = "http://api.art.com/EcommerceAPI.svc/jsonp/CatalogItemGet?apiKey=519BAAC8E607413CA1FC043C92D08AAD&sessionId=A0F866D6907D411395E5CEDB6C359357&itemId=9045049&lookupType=ItemNumber";
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
     },
     function(data, callback) {
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
         price: "$" + data.prices.price,
         arrivesBy: monthNames[tomorrow.getMonth()] + tomorrow.getDate()
       };

       log.info('rendering component')
         /*
         renderthe react components
          */
       var markup = React.renderComponentToString(
         productPageComponent({
           Title: titleData,
           Hero: herodata,
           BottomBar: bottomBarData
         })
       );
       var seoTags = metaTagBuilder.getMetaTags(seoUrl, function(error, data) {
         if (!error) {
           log.info('meta tag call successful');
           callback(null,data, markup);
         } else {
           log.error('Meta tag call failed, error ==>' + error);
         }
       });
     },
     function(data,markup) {
      log.info('rendering page');
       var metaTags = [];
       for (i = 2; i < data.length; i++) {
         metaTags.push(data[i].Value);
       }

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