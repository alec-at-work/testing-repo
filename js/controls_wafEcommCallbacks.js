/*** TRIALS CALLBACK CLICKS ***/

var localURL = '//' + document.location.hostname + document.location.pathname;

// Method to set eStore data layer
var estoreDataLayer = function() {
    console.log('ECOMM -> running estoreDataLayer() to set some properties....');
	window.digitalData = window.digitalData || {};
	digitalData.page = digitalData.page || {};
	digitalData.user = digitalData.user || {};
	digitalData.page.currencyCode = "USD";
	digitalData.page.site = "estore";
	digitalData.page.siteSection = "store";
	digitalData.page.countryCode = "us";
	digitalData.page.continentCode = "amer";
	digitalData.page.languageCode = "en";
	digitalData.page.pageInstanceID = "staging";
	digitalData.page.subSection1 = "";
	digitalData.page.subSection2 = "";
	digitalData.page.subSection3 = "";
	digitalData.page.contentDescription = "cart";
	digitalData.user.authSystem = "";
	digitalData.user.loginStatus = "";
	digitalData.user.userID = "";
	digitalData.page.pageType = "";
	digitalData.version = {
	    versionNumber: "2.0"
	};
	digitalData.page.isPageView = false;
}, productAdded = [
{
    priceID: "14490",
    productQuantity: 1,
    productDisplayName: "AutoCAD LT null",
    productTypeID: "",
    productType: "BIC_SUBSCRIPTION",
    productLine: "ACDLT",
    productPromotions: [],
    productExternalKey: "SO-2",
    productSupportLevel: "ADVANCED",
    productPlatform: "",
    productUsageType: "",
    productLanguages: [],
    productOfferingDetail: {
        offeringName: "",
        offeringExternalKey: "",
        offeringTaxCode: "DC020500"
    },
    productBillingPlan: {
        billingPeriod: "MONTH",
        billingPeriodCount: 1,
        billingCycleCount: ""
    },
    productCurrencies: {
        localCurrency: {
            currencyCode: "CAD",
            productUnitPriceBeforeDiscountNoTax: "60.00",
            productUnitPriceBeforeDiscountWithTax: null,
            productUnitDiscountAmount: "0.00",
            productUnitTaxAmount: "0.00",
            productTaxPercentage: null,
            productUnitPriceAfterDiscountNoTax: "60.00",
            productUnitPriceAfterDiscountWithTax: null,
            productTotalDiscountAmountAllQty: "0.00",
            productTotalTaxAmountAllQty: "0.00",
            productTotalAfterDiscountWithTaxAllQty: null,
            productIsVatExempt: false
        }
    }
}
], productsInCart = [
{
    priceID: "14490",
    productQuantity: 1,
    productDisplayName: "AutoCAD LT null",
    productTypeID: "",
    productType: "BIC_SUBSCRIPTION",
    productLine: "ACDLT",
    productPromotions: [],
    productExternalKey: "SO-2",
    productSupportLevel: "ADVANCED",
    productPlatform: "",
    productUsageType: "",
    productLanguages: [],
    productOfferingDetail: {
        offeringName: "",
        offeringExternalKey: "",
        offeringTaxCode: "DC020500"
    },
    productBillingPlan: {
        billingPeriod: "MONTH",
        billingPeriodCount: 1,
        billingCycleCount: ""
    },
    productCurrencies: {
        localCurrency: {
            currencyCode: "CAD",
            productUnitPriceBeforeDiscountNoTax: "60.00",
            productUnitPriceBeforeDiscountWithTax: null,
            productUnitDiscountAmount: "0.00",
            productUnitTaxAmount: "0.00",
            productTaxPercentage: null,
            productUnitPriceAfterDiscountNoTax: "60.00",
            productUnitPriceAfterDiscountWithTax: null,
            productTotalDiscountAmountAllQty: "0.00",
            productTotalTaxAmountAllQty: "0.00",
            productTotalAfterDiscountWithTaxAllQty: null,
            productIsVatExempt: false
        }
    }
},
{
    priceID: "14542",
    productQuantity: 1,
    productDisplayName: "AutoCAD null",
    productTypeID: "",
    productType: "BIC_SUBSCRIPTION",
    productLine: "ACD",
    productPromotions: [],
    productExternalKey: "SO-96",
    productSupportLevel: "ADVANCED",
    productPlatform: "",
    productUsageType: "",
    productLanguages: [],
    productOfferingDetail: {
        offeringName: "",
        offeringExternalKey: "",
        offeringTaxCode: "DC020500"
    },
    productBillingPlan: {
        billingPeriod: "MONTH",
        billingPeriodCount: 1,
        billingCycleCount: ""
    },
    productCurrencies: {
        localCurrency: {
            currencyCode: "CAD",
            productUnitPriceBeforeDiscountNoTax: "240.00",
            productUnitPriceBeforeDiscountWithTax: null,
            productUnitDiscountAmount: "0.00",
            productUnitTaxAmount: "0.00",
            productTaxPercentage: null,
            productUnitPriceAfterDiscountNoTax: "240.00",
            productUnitPriceAfterDiscountWithTax: null,
            productTotalDiscountAmountAllQty: "0.00",
            productTotalTaxAmountAllQty: "0.00",
            productTotalAfterDiscountWithTaxAllQty: null,
            productIsVatExempt: false
        }
    }
}
], cartAdd = function() {
    console.log('ECOMM -> running cartAdd()');
	window.__analyticsChangeContext = window.__analyticsChangeContext || [];
	window.__analyticsChangeContext.push({
	    event: {
	        eventType: 'estore_add_to_cart'
	    },
	    page: {
	        contentDescription: "cart details",
	        continentCode: "amer",
	        countryCode: "ca",
	        currencyCode: "CAD",
	        destinationURL: "https://cart.bicstg.autodesk.com/cart/",
	        languageCode: "en",
	        pageType: "estore_cart_page",
	        testExperience: "guac cart test a"
	    },
	    products: productAdded
	});
}, pageView = function(contentTitle, pageTitle) {
    console.log('ECOMM -> running pageView()');
	estoreDataLayer();
	window.__analyticsChangeContext = window.__analyticsChangeContext || [];
	window.__analyticsChangeContext.push({
        event: {
            eventType: 'estore_page_view'
        },
        page: {
            contentDescription: contentTitle,
            pageType: pageTitle
        },
        products: productsInCart
    });
}, cartPage = function(contentTitle, pageTitle) {
    console.log('ECOMM -> running cartPage()');
	estoreDataLayer();
	cartAdd();
	pageView(contentTitle, pageTitle);
}, purchasePage = function(contentTitle, pageTitle) {
    console.log('ECOMM -> running purchasePage()');
	estoreDataLayer();
	window.__analyticsChangeContext = window.__analyticsChangeContext || [];
	window.__analyticsChangeContext.push({
        event: {
            eventType: 'estore_page_view'
        },
        page: {
            contentDescription: contentTitle,
            pageType: pageTitle
        },
        order: {
            orderID: '20151119', //
            paymentType: '<payment type>',
            billingState: '<billing state>',
            billingZip: '<billing zip>',
            orderCurrencies: {
                usd: {
                    orderSubTotal: '<USD sub total amount without tax & shipment>',
                    orderShippingAmount: '<USD shipment amount>',
                    orderTaxAmount: '<USD tax amount>',
                    orderDiscountAmount: '0.00',
                    orderTotalAmount: '<USD order total amount>'
                }
            },
            orderPromotions: [
                {// for each product promotion entered
                    promotionCode: '<code id 1>',
                    promotionCurrencies: {
                        usd: {
                            currencyCode: 'USD',
                            promotionAmount: '<amount 1>'
                        },
                        localCurrency: {
                            currencyCode: '<LOCAL_CURRENCY>',
                            promotionAmount: '<LOCAL_CURRENCY amount>'
                        }
                    },
                    promotionType: '<type 1>',
                    promotionID: '<promotion id 1>',
                    promotionName: '<promotion name 1>'
                }
            ]
        },
        products: productsInCart
    });
}, cartRemove = function() {
    window.__analyticsChangeContext = window.__analyticsChangeContext || [];
    window.__analyticsChangeContext.push({
        event: {
            eventType: 'estore_remove_from_cart'
        },
        page: {
            contentDescription: "cart details",
            continentCode: "amer",
            countryCode: "ca",
            currencyCode: "CAD",
            destinationURL: "https://cart.bicstg.autodesk.com/cart/",
            languageCode: "en",
            pageType: "estore_cart_page",
            testExperience: "guac cart test a"
        },
        products: productAdded
    });
}, emptyCart = function() {
    window.__analyticsChangeContext = window.__analyticsChangeContext || [];
    window.__analyticsChangeContext.push({
        event: {
            eventType: 'estore_page_view,estore_empty_cart'
        },
        page: {
            contentDescription: "cart details",
            pageType: "estore_cart_page"
        },
        products: []
    });
};


// Attach Handlers

$(document).on('click', '[data-cart-view]', function(e){
    pageView('cart details', 'estore_cart_page');
});

$(document).on('click', '[data-cart-add-view]', function(e){
    cartPage('cart details', 'estore_cart_page');
});

$(document).on('click', '[data-account-information]', function(e){
    pageView('account information', 'estore_account_page');
});

$(document).on('click', '[data-billing-information]', function(e){
    pageView('billing information', 'estore_billing_page');
});

$(document).on('click', '[data-billing-payment]', function(e){
    pageView('billing payment', 'estore_billing_payment_page');
});

$(document).on('click', '[data-order-review]', function(e){
    pageView('order review', 'estore_checkout_page');
});

$(document).on('click', '[data-order-complete]', function(e){
    purchasePage('order complete', 'estore_purchase_page');
});

$(document).on('click', '[data-cart-remove]', function(e){
    cartRemove();
});

$(document).on('click', '[data-cart-empty]', function(e){
    emptyCart();
});