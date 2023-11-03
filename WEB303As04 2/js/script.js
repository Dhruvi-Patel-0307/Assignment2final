/*
    Assignment #4
    Dhruvi Patel
    0831844
*/

$(function () {
    
    if (!navigator.geolocation) {
        $('#locationhere').text("Geolocation is not supported by your browser.");
        return;
    }
   
const fixedLatitude = 35.7128; 
const fixedLongitude = -72.0060;


const fixedPosition = {
  coords: {
    latitude: fixedLatitude,
    longitude: fixedLongitude
  }
      const originalGetLocation = navigator.geolocation.getCurrentPosition;
navigator.geolocation.getCurrentPosition = function (successCallback, errorCallback) {
  setTimeout(() => {
    successCallback(fixedPosition);
  }, 100);
};

    navigator.geolocation.getCurrentPosition((position) => {
  console.log('Fixed latitude:', position.coords.latitude);
  console.log('Fixed longitude:', position.coords.longitude);
});
};
    function displayLocation(position) {
        const currentLatitude = position.coords.latitude;
        const currentLongitude = position.coords.longitude;
    
        $('#locationhere').text(`Latitude: ${currentLatitude} °, Longitude: ${currentLongitude} °`);
    
        const storedLocationStr = localStorage.getItem('location');
    
        if (storedLocationStr) {
            const previousLocation = JSON.parse(storedLocationStr);
            const distanceTravelled = calcDistanceBetweenPoints(currentLatitude, currentLongitude, previousLocation.latitude, previousLocation.longitude);
    
            const prevLocationTag = $('<p></p>').text(`Previous Latitude: ${previousLocation.latitude} °, Previous Longitude: ${previousLocation.longitude} °`);
            const welcomeBackHeader = $('<h3>Welcome back!</h3>');
            const distanceTag = $('<p></p>').text(`You traveled ${distanceTravelled.toFixed(2)} meters since your last visit.`);
    
            $('#locationhere').after(prevLocationTag, welcomeBackHeader, distanceTag);
        } else {
            const firstVisitHeader = $('<h3>Welcome for the first time!</h3>');
            $('#locationhere').after(firstVisitHeader);
        }
    
       
        localStorage.setItem('location', JSON.stringify({ latitude: currentLatitude, longitude: currentLongitude }));
    }
    
    function displayError() {
        $('#locationhere').text("You must allow geolocation to use this application.");
    }
    
    navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});

