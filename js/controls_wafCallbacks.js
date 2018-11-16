/*** TRIALS CALLBACK CLICKS ***/

var localURL = '//' + document.location.hostname + document.location.pathname;

$(document).on('click', '[data-callback-trial-initiate]', function(e){
    window.analytics.callback.trialDownloadInitiate('acd123','2017','acd','en-us','mac');
});

$(document).on('click', '[data-callback-trial-initiate-empty]', function(e){
    window.analytics.callback.trialDownloadInitiate();
});

$(document).on('click', '[data-callback-trial-start-intent]', function(e){
    window.analytics.callback.trialDownloadStartIntent('acd123','2017','acd','en-us','mac');
});

$(document).on('click', '[data-callback-trial-start]', function(e){
    window.analytics.callback.trialDownloadStart('acd123','2017','acd','en-us','mac');
});

$(document).on('click', '[data-callback-trial-accept]', function(e){
    window.analytics.callback.trialDownloadAcceptTerms('acd123','2017','acd','en-us','mac');
});


$(document).on('click', '[data-callback-trial-legacy]', function(e){
	var release = 'fake-prod-201X';
	var language = 'en-US';
	var os = 'os-test';
	var code = '9';
	adsk.product.trialDownload.ReleaseSelector.analyticsCallback(release, language, os, code);
});



$(document).on('click', '[data-callback-edu-error]', function(e){
    try {
    	analytics.context.changeContext({
            event: {
                eventType: "edu_error"
            },
            error: {
                errorType: "edu download failed",
                errorDetails: [{
                    errorCode: "err123",
                    errorReason: "some reason",
                    errorMessage: "some message"
                }]
            }
        });
    } catch(err) {
    	console.log('Named Event failed');
    }
});

$(document).on('click', '[data-callback-edu-options-selected]', function(e){
    try {
    	analytics.context.changeContext({
            event: {
                eventType: "edu_product_options_selected"
            },
            products: [{
                productLocation: "edu",
                productLicenseType: "edu-trial",
                productKey: "1234",
                productLanguages: "en",
                productPlatform: "win",
                productSerialNumber: 54321
            }]
        });
    } catch(err) {
    	console.log('Named Event failed');
    }
});

$(document).on('click', '[data-callback-edu-product-download]', function(e){
    try {
    	analytics.context.changeContext({
		    event: {
		        eventType: "edu_product_download"
		    },
		    products: [{
		        productInstallMethod: 1
		    }]
		});
    } catch(err) {
    	console.log('Named Event failed');
    }
});

$(document).on('click', '[data-callback-edu-trial-cloud]', function(e){
    try {
    	analytics.context.changeContext({
            event: {
                eventType: "edu_product_cloud_access"
            },
            products: [{
                productKey: 'cloud123'
            }]
        });
    } catch(err) {
    	console.log('Named Event failed');
    }
});



$(document).on('click', '[data-callback-form-success]', function(e){
    try {
    	var activityID = '123456';
    	window.analytics.callback.formSubmit(activityID);
		window.analytics.callback.formSubmitSuccess(activityID);
    } catch(err) {
    	console.log('Named Event failed');
    }
});

$(document).on('click', '[data-callback-form-error]', function(e){
    try {
    	var activityID = '123456';
    	var errors = ['first-error:this','second-error:that'];
    	window.analytics.callback.formSubmit(activityID);
    	window.analytics.callback.formSubmitError(activityID,errors);
    } catch(err) {
    	console.log('Named Event failed');
    }
});

	$(document).on('click', '[data-callback-form-success-legacy]', function(e){
	    try {
	    	window.digitalData.form = {
	    		'offerActivityID' : '1a2b3c'
	    	};
	    	Bootstrapper.ensEvent.trigger('form_submit,form_success');
	    } catch(err) {
	    	console.log('Named Event failed');
	    }
	});

	$(document).on('click', '[data-callback-form-error-legacy]', function(e){
	    try {
	    	window.digitalData.form = {
	    		'offerActivityID' : '1a2b3c'
	    	};
	    	Bootstrapper.ensEvent.trigger('form_submit,form_error');
	    } catch(err) {
	    	console.log('Named Event failed');
	    }
	});


$(document).on('click', '[data-demandbase-clear]', function(e){

	var space = '';
	if (fetchQueryParams['space']) {
		space = 'space=' + fetchQueryParams['space'];
	}
	var newURL = localURL + '?&clearDemandbase=yes';
	document.location.href = newURL;

});

// Campaign Triggers
$(document).on('click', '[data-campaign]', function(e){

	var space = '';
	if (fetchQueryParams['space']) {
		space = 'space=' + fetchQueryParams['space'];
	}
	var params = '';
	var which = $(e.target).attr('data-campaign');
	switch (which) {
		case "mkt2-only" :
			params += "mktvar002=123456";
			break;
		case "mkt4-only" :
			params += "mktvar004=123456";
			break;
	    case "goog-only" :
	    	params += "utm_medium=test-medium&utm_source=sanity-page&utm_campaign=sanity-page-test&utm_id=123456";
			break;
	    case "full-gclid" :
	    	params += "mktvar002=123456&utm_medium=test-medium&utm_source=sanity-page&utm_campaign=sanity-page-test&utm_id=123456&gclid=789000";
			break;
	    case "full-gclid-mkwid" :
	    	params += "mktvar002=123456&utm_medium=test-medium&utm_source=sanity-page&utm_campaign=sanity-page-test&utm_id=123456&gclid=789000&mkwid=mkwid-val";
			break;
	    case "mkt2-conflict" :
	    	params += "mktvar002=123456&mktvar002=654321";
			break;
	    case "mkt4-conflict" :
	    	params += "mktvar004=123456&mktvar004=654321";
			break;
	    case "goog-conflict" :
	    	params += "utm_medium=test-medium-1&utm_source=sanity-page&utm_campaign=sanity-page-test-1&utm_id=123456" 
	    		+ "utm_medium=test-medium-2&utm_source=sanity-page&utm_campaign=sanity-page-test-2&utm_id=654321";
			break;
	    case "dynamic-external" :
	    	try { analytics.callback.setExternalCampaign("128128"); } catch(err) { console.log(err); }
			break;
	    case "dynamic-internal" :
	    	try { analytics.callback.setInternalCampaign("821821"); } catch(err) { console.log(err); }
			break;
		default:
			break;

	};
	if (params !== '') {
		var newURL = localURL + '?&' + params;
		document.location.href = newURL;	
	}

});

$(document).on('click', '[data-add-product]', function(e){

	var space = '';
	if (fetchQueryParams['space']) {
		space = 'space=' + fetchQueryParams['space'];
	}
	var newURL = localURL + '?&addProduct=yes';
	document.location.href = newURL;

});

$(document).on('click', '[data-add-to-cart]', function(e){

	var space = '';
	if (fetchQueryParams['space']) {
		space = 'space=' + fetchQueryParams['space'];
	}
	var newURL = localURL + '?&addToCart=yes';
	document.location.href = newURL;

});



$(document).on('click', '[data-org-search]', function(e){

	var space = '';
	if (fetchQueryParams['space']) {
		space = 'space=' + fetchQueryParams['space'];
	}
	var newURL = localURL + '?&orgSearch=yes' +
		'&q=test+search';
	document.location.href = newURL;

});

$(document).on('click', '[data-au-search]', function(e){

	var space = '';
	if (fetchQueryParams['space']) {
		space = 'space=' + fetchQueryParams['space'];
	}
	var newURL = localURL + '?&auSearch=yes' + 
		'&full-text=test+search&productName=AutoCAD+Design+Suite&language=English&year=2014&forceAuSearch=true';
	document.location.href = newURL;

});



// BELOW ONES STILL NEED WORK...
/*
// BUY

	// data tags
	'data-wat-buy-online'
	'data-wat-buy-reseller'
	'data-wat-buy-retailer'
	'data-wat-buy-other'


// Dynamic Filter Change (to be executed after a filter is clicked and processed)
	
	// callbacks
	window.analytics.callback.dynamicFilterChange()
*/


// Manage DR to BIC Migration TEMP test

$(document).on('click', '[data-manage-migrate-initiate]', function(e){

	console.log('NOTE - Still need to fill in the ProdObj values for DR -> BIC Analytics');
	var fakeProdObj = {

	};

	window.analytics.callback.manageDrToBicMigratePaymentInitiate(fakeProdObj);
});

$(document).on('click', '[data-manage-migrate-success]', function(e){
	window.analytics.callback.manageDrToBicMigratePaymentSuccess();
});

$(document).on('click', '[data-manage-migrate-failure]', function(e){
	window.analytics.callback.manageDrToBicMigratePaymentFailure();
});

$(document).on('click', '[data-manage-migrate-autorenew-on]', function(e){
	window.analytics.callback.manageDrToBicMigrateAutoRenewSave('toggle-on');
});

$(document).on('click', '[data-manage-migrate-autorenew-off]', function(e){
	window.analytics.callback.manageDrToBicMigrateAutoRenewSave('toggle-off');
});


// EDU STUFF

