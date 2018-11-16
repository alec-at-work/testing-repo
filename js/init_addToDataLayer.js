
var addProduct = fetchQueryParams['addProduct'];
if (addProduct) {
    // update the product value of the Data Layer
    window.digitalData.products = window.digitalData.products  || [];
    window.digitalData.products.push({
    	'productAnalyticsName' : 'test-product',
    	'productLine' : 'TST'
    });


}

var addToCart = fetchQueryParams['addToCart'];
if (addToCart) {
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
        products: [
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
        ]
    });
}

var dotOrgSearch = fetchQueryParams['orgSearch'];
if (dotOrgSearch) {
    // update the product value of the Data Layer
    window.digitalData.search = window.digitalData.search  || [];
    window.digitalData.search.searchResults = 'test search results';
    window.digitalData.search.searchTerm = 'test+search';
}
