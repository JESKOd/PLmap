mapboxgl.accessToken = 'pk.eyJ1IjoianNreHh4IiwiYSI6ImNrbnNsZ3J1ejA1MXYydW54Zno1N3Jzc3IifQ.NFgMQBLApzSyyPl-1qRdZA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jskxxx/ckqqm2lji4ga118le06roj8fw',
    center: [19.48, 52.07 ],
    zoom: 5.5
        });
					
map.on('load', function() {});
	var layers = ['-3.6 - -2.49', '-2.5 - -1.49', '-1.5 - -0.49', '-0.5 - 0.49', '0.5 - 1.5'];
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
	var przyr = map.queryRenderedFeatures(e.point, {
	layers: ['przyrost']
		});

	if (przyr.length > 0) {
		document.getElementById('pd').innerHTML = '<h3><strong>' + przyr[0].properties.JPT_NAZWA_ + '</strong></h3><p><strong><em>' + przyr[0].properties.przyrost + '</strong> przyrost naturalny</em></p>';
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
