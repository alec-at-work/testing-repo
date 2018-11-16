
var clearDemandbase = fetchQueryParams['clearDemandbase'];
if (clearDemandbase) {
	document.cookie = 'dmdbase_flag' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	localStorage.removeItem('s_dmdbase');
	localStorage.removeItem('dmdbase_full');

	(function waitForAnalyticsWaitPoll(){
	
		// set the timeout & interval values (in MS)
		var timeout = 5000;
		var interval = 10;

		var dataCheck = setInterval(function(){

			// check for availability of the DATA
			var contextIsReady = false;
			if (typeof window.analytics !== "undefined") {
				if (typeof window.analytics.context !== "undefined") {
					if (typeof window.analytics.context.waitForThis !== "undefined") {
						contextIsReady = true;
					}
				}
			}
			if (contextIsReady) {
				console.log('setting the WAIT for Demandbase data');
				try {
					analytics.context.waitForThis('demandbaseSetting');	
				} catch(err) {
					console.log('error setting the DB wait for Analytics');
				}
				setTimeout(function(){
					console.log('resolving the WAIT for Demandbase data');
					analytics.context.resolveWait('demandbaseSetting');	
				},2500);
				clearInterval(dataCheck);
			}
			// TIMEOUT REACHED
			else if (timeout <= 0) {
				clearInterval(dataCheck);
				// handle the TIMED OUT SCENARIO here
			}
			// otherwise, run the loop again
			else {
				timeout -= interval;
			}
		},interval);

	})();
}


var orgSearch = fetchQueryParams['orgSearch'];
if (orgSearch) {
	console.log('.ORG Search!');
}

var auSearch = fetchQueryParams['auSearch'];
if (auSearch) {
	console.log('AU Search!');	
}