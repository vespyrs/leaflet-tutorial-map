var map = L.map('mapid').setView([38.75, -77.05], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoidmVzcHlycyIsImEiOiJja3Fwc3A1eGwwcG51MnhtaWZsY2RpNjN2In0.8OSuXRfKsYV3biIFkYWu9A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoidmVzcHlycyIsImEiOiJja3Fwc3A1eGwwcG51MnhtaWZsY2RpNjN2In0.8OSuXRfKsYV3biIFkYWu9A'
}).addTo(map);

var circle = L.circle([38.76, -77.03], {
    color: 'pink',
    fillColor: '#f02',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

circle.bindPopup("Hello World!");

var marker = L.marker([38.75, -77.05]).addTo(map);