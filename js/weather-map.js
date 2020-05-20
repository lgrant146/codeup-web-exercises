'use strict';
// map config
mapboxgl.accessToken = mapboxKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-97.7431, 30.2672],
    zoom: 9,
});
// adding marker
var marker = new mapboxgl.Marker()
    .setLngLat([-97.7431, 30.2672])
    .addTo(map)
    .setDraggable(true);
// getting lng and lat of marker
function onDragEnd () {
    reverseGeocode(marker.getLngLat(), mapboxKey).then(function(results) {
        $('#current-city').text(results);
        console.log(results);
    });
}
//event function for marker to update location
marker.on('dragend', function () {
    onDragEnd();

    var lngLat = marker.getLngLat();
    var weatherOptions = {
        lat: lngLat.lat,
        lon: lngLat.lon,
        appid: OPEN_WEATHER_APPID,
        exclude: 'minutely, current, hourly',
        units: 'imperial'

    };
    $('#weather').html('');
    locationWeather();
});
// geocode and reverse geocode functions
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}

// getting the value of search input
var searchInput = $('#input-place').keyup(function() {
    var value = $(this).val();
});
// geocoding search
$('#submit').click(function () {
    geocode(searchInput.val(), mapboxKey).then(function(results) {
        // do something with results
        console.log(results);
        console.log(results[0]);
        map.setCenter(results);
        marker.setLngLat(results);
        map.setZoom(9);
        // puts search results into current city span
        reverseGeocode(marker.getLngLat(), mapboxKey).then(function(results) {
            $('#current-city').text(results);
            console.log(results);
        });
        $('#weather').html('');
        var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
        var weatherOptions = {
            lat: results[1],
            lon: results[0],
            appid: OPEN_WEATHER_APPID,
            exclude: 'minutely, current, hourly',
            units: 'imperial'

        };

        $.get(weatherUrl, weatherOptions).done(function (data) {
            console.log(data);
            var cData = '';
            $.each(data.daily, function (index, value) {
                var date = new Date(value.dt * 1000);
                var description = value.weather[0].description;
                var humidity = value.humidity;
                var wind = value.wind_speed;
                var pressure = value.pressure;
                // stops loop at index 5
                if (index === 5) {
                    return false
                }
                cData += "<div class='col-sm-2'>";
                cData += "<div class='card'>";
                cData += "<div class='card-body'>";
                cData += "<h6 class='card-title'>" + date + "</h6>";
                cData += "<hr>";
                cData += "<h6 class='card-text'>" + description + "</h6>";
                cData += "<h6 class='card-text'>" + 'Humidity: ' + humidity + "</h6>";
                cData += "<h6 class='card-text'>" + 'Wind: ' + wind + "</h6>";
                cData += "<h6 class='card-text'>" + 'Pressue: ' + pressure + "</h6>";
                cData += "</div>";
                cData += "</div>";
                cData += "</div>";
            });

            $('#weather').append(cData);

        });
    });
});
starterWeather();
// function for updating weather based on marker location when dragged.
function locationWeather () {
    var lngLat = marker.getLngLat();
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    var weatherOptions = {
        lat: lngLat.lat,
        lon: lngLat.lng,
        appid: OPEN_WEATHER_APPID,
        exclude: 'minutely, current, hourly',
        units: 'imperial'

    };
    $.get(weatherUrl, weatherOptions).done(function (data) {
        console.log(data);
        var cData = '';
        $.each(data.daily, function (index, value) {
            var date = new Date(value.dt * 1000);
            var description = value.weather[0].description;
            var humidity = value.humidity;
            var wind = value.wind_speed;
            var pressure = value.pressure;
            if (index === 5) {
                return false
            }
            cData += "<div class='col-sm-2'>";
            cData += "<div class='card'>";
            cData += "<div class='card-body'>";
            cData += "<h6 class='card-title'>" + date + "</h6>";
            cData += "<hr>";
            cData += "<h6 class='card-text'>" + description + "</h6>";
            cData += "<h6 class='card-text'>" + 'Humidity: ' + humidity + "</h6>";
            cData += "<h6 class='card-text'>" + 'Wind: ' + wind + "</h6>";
            cData += "<h6 class='card-text'>" + 'Pressue: ' + pressure + "</h6>";
            cData += "</div>";
            cData += "</div>";
            cData += "</div>";
        });

        $('#weather').append(cData);
    });

}

//function for first loading into the map over austin
function starterWeather () {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    var weatherOptions = {
        lat: 30.2672,
        lon: -97.7431,
        appid: OPEN_WEATHER_APPID,
        exclude: 'minutely, current, hourly',
        units: 'imperial'

    };
    $.get(weatherUrl, weatherOptions).done(function (data) {
        console.log(data);
        var cData = '';
        $.each(data.daily, function (index, value) {
            var date = new Date(value.dt * 1000);
            var description = value.weather[0].description;
            var humidity = value.humidity;
            var wind = value.wind_speed;
            var pressure = value.pressure;
            if (index === 5) {
                return false
            }
            cData += "<div class='col-sm-2'>";
            cData += "<div class='card'>";
            cData += "<div class='card-body'>";
            cData += "<h6 class='card-title'>" + date + "</h6>";
            cData += "<hr>";
            cData += "<h6 class='card-text'>" + description + "</h6>";
            cData += "<h6 class='card-text'>" + 'Humidity: ' + humidity + "</h6>";
            cData += "<h6 class='card-text'>" + 'Wind: ' + wind + "</h6>";
            cData += "<h6 class='card-text'>" + 'Pressue: ' + pressure + "</h6>";
            cData += "</div>";
            cData += "</div>";
            cData += "</div>";
        });

        $('#weather').append(cData);



    });
    // submit function. having trouble working that into submit function. results aren't being defined.
    // }
    // function submitWeather () {
    //     var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    //     var weatherOptions = {
    //         lat: results[1],
    //         lon: results[0],
    //         appid: OPEN_WEATHER_APPID,
    //         exclude: 'minutely, current, hourly',
    //         units: 'imperial'
    //
    //     };
    //
    //     $.get(weatherUrl, weatherOptions).done(function (data) {
    //         console.log(data);
    //         var cData = '';
    //         // console.log(data);
    //         $.each(data.daily, function (index, value) {
    //             // console.log(index, value, 'test');
    //             var date = new Date(value.dt * 1000);
    //             var description = value.weather[0].description;
    //             var humidity = value.humidity;
    //             var wind = value.wind_speed;
    //             var pressure = value.pressure;
    //             if (index === 5) {
    //                 return false
    //             }
    //             cData += "<div class='col-sm-2'>";
    //             cData += "<div class='card'>";
    //             cData += "<div class='card-body'>";
    //             cData += "<h6 class='card-title'>" + date + "</h6>";
    //             cData += "<hr>";
    //             cData += "<h6 class='card-text'>" + description + "</h6>";
    //             cData += "<h6 class='card-text'>" + 'Humidity: ' + humidity + "</h6>";
    //             cData += "<h6 class='card-text'>" + 'Wind: ' + wind + "</h6>";
    //             cData += "<h6 class='card-text'>" + 'Pressue: ' + pressure + "</h6>";
    //             cData += "</div>";
    //             cData += "</div>";
    //             cData += "</div>";
    //             // console.log(cData)
    //         });
    //         $('#weather').append(cData);
    //     });
}