mapboxgl.accessToken = 'pk.eyJ1IjoianNreHh4IiwiYSI6ImNrbnNsZ3J1ejA1MXYydW54Zno1N3Jzc3IifQ.NFgMQBLApzSyyPl-1qRdZA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jskxxx/ckoi8kxbb06zu18qjf4damfeu',
    center: [19.48, 52.07 ],
    zoom: 5.5
        });
					
map.on('load', function() {});
	var layers = ['900tys - 1.49m', '1.5m - 2.49m', '2.5m - 2.99m', '3.0m - 3.49m', '3.5m +'];
	var colors = ['#2d2d2d', '#072026', '#103b40', '#2c6c73', '#1ba698', '#6ACED9'];
			
	for (i = 0; i < layers.length; i++) {
		var layer = layers[i];
		var color = colors[i];
		var item = document.createElement('div');
		var key = document.createElement('span');
		key.className = 'legend-key';
		key.style.backgroundColor = color;

	var value = document.createElement('span');
		value.innerHTML = layer;
		item.appendChild(key);
		item.appendChild(value);
		legend.appendChild(item);
			}
			
map.on('mousemove', function(e) {
	var woje = map.queryRenderedFeatures(e.point, {
	layers: ['populacjacala']
		});

	if (woje.length > 0) {
		document.getElementById('pd').innerHTML = '<h3><strong>' + woje[0].properties.JPT_NAZWA_ + '</strong></h3><p><strong><em>' + woje[0].properties.populacja + '</strong> liczba ludności</em></p>';
		} else {
			document.getElementById('pd').innerHTML = '<p>Najedź na województwo!</p>';
			  }
		});
			
var full = new mapboxgl.FullscreenControl()
	map.addControl(full, 'top-left');
var nav = new mapboxgl.NavigationControl();
	map.addControl(nav, 'top-left');

function clickZG() {
	location.replace("zgony.html")
}
function clickPN() {
	location.replace("przyrost_nat.html")
}
function clickPOP() {
	location.replace("podstawa.html")
}
