"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/covid19_dashboard/expo-service-worker.js",{scope:"/covid19_dashboard/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}));