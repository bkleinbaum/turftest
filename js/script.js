
  // Typical Leaflet setup
  var map = L.map('map').setView([40.731649,-73.977814], 10);
  L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
    maxZoom: 18
  }).addTo(map);




var councilMap = new L.GeoJSON.AJAX('https://bk741.cartodb.com/api/v2/sql?q=SELECT * FROM new_york_city_council_districts&api_key=510fe4b5c410a666cea4073681404e8ac73b7338&format=GeoJson')
 .on('data:loaded', function() {
    var councilGeoJson = councilMap.toGeoJSON();
    console.log(councilGeoJson);
    councilArray = [councilGeoJson];
    var councilFinal = turf.featurecollection(councilArray);
     


    var searchPoint = turf.point([40.593813, -74.107578]);
    searchArray = [searchPoint]
    var search = turf.featurecollection(searchArray);

    console.log(councilFinal);
    console.log(search);
      
     tagged = turf.tag(search, councilFinal,
             'coundist', 'councilDistrict');

    console.log(tagged);


});
