'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var app = angular.module('myApp.services', []);

// Restangular ReKognition service
// http://rekognition.com/func/api/?api_key={api_key}&api_secret={api_secret}&jobs={jobs}&urls={urls}
// API Docs: http://v2.rekognition.com/developer/docs
/*app.factory('rekognitionFactory', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl('http://rekognition.com/func/');
    var defaultParams = {
      api_key: 'ANkv85Gcu8jTcmRn',
      api_secret: 'Hq7elQKQ7zy7GaHu',
      name_space: 'poc',
	    user_id: 'uverse'
    };
    RestangularConfigurer.setDefaultRequestParams(defaultParams);
  });
});*/

app.service('addImage', function(){
	return function(){

	// Post image to server via xhr
	var dataURL = encodeURIComponent(canvas.toDataURL("image/png"));
	var url = "/camera/" + name + "/";
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = response;

	function response() {
		if (xhr.readyState == 4) {
			//check your response;
		}
	}

	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("image=" + dataURL);
	}
})

app.service('rekognitionService', function(Restangular) {
 return Restangular.withConfig(function(RestangularConfigurer) {
 RestangularConfigurer.setBaseUrl('http://rekognition.com/func/');
 var defaultParams = {
 api_key: 'ANkv85Gcu8jTcmRn',
 api_secret: 'Hq7elQKQ7zy7GaHu',
 name_space: 'poc',
 user_id: 'uverse'
 };
 RestangularConfigurer.setDefaultRequestParams(defaultParams);
 });
 });

app.factory('apiresponseFactory', function() {
	return {
		'response' : {}
	};
});

app.factory('apirequestFactory', function() {
	return {
		'request' : {}
	};
});

app.factory('formFactory', function() {
	return {
		'data' : {
			firstname : '',
			lastname : ''
		}
	};
});