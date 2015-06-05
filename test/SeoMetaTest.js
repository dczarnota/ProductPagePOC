var expect = require('chai').expect;
var request= require('request');


describe('Seo meta tags', function () {
	
	describe('Checks url', function () {
			it('returns status 200', function (done) {
				var url ="http://api.art.com/ECommerceAPI.svc/jsonp/SEOMetaInfoGet?apiKey=519BAAC8E607413CA1FC043C92D08AAD&sessionId=A0F866D6907D411395E5CEDB6C359357&pageSourceType=ProductPage&itemId=9045049&categoryID=6126&pageNumber=1";
				request.get(url)
				.on('response', function (response) {
					expect(response.statusCode).to.equal(200);
					done();
				});	  	
		});

		
	});

	describe('cheks url data', function () {
		it('Should return valid data', function (done) {
			var url ="http://api.art.com/ECommerceAPI.svc/jsonp/SEOMetaInfoGet?apiKey=519BAAC8E607413CA1FC043C92D08AAD&sessionId=A0F866D6907D411395E5CEDB6C359357&pageSourceType=ProductPage&itemId=9045049&categoryID=6126&pageNumber=1";
			
			request.get(url)
			.on('response',function (response) {
			 	expect(response.body).to.not.be.null;
			 	done();
			});
		});
		
	});
});