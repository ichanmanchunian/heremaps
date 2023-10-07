if (navigator.geolocation) {
	navigator.geolocation.getCurrentLocation(position => {
		localCoord = position.coords;
		objLocalCoord = {
			lat = localCoord.latitude,
			lng = localCoord.longitude
		}

		var platform = new H.service.Platform({
		  apikey: window.hereApiKey
		});

		var defaultLayers = platform.createDefaultLayers();

		let map = new H.Map(
			document.getElementById('mapContainer'),
			defaultLayers.vector.normal.map,
			{
				zoom: 13,
				center: objLocalCoord,
				pixelRatio: window.devicePixelRatio || 1

			});

				window.addEventListener('resize', () => map.getViewPort().resize());

			let ui = H.ui.UI.createDefault(map, defaultLayers);
			let mapEvents = new H.mapevents.MapEvents(map);
			let behavior = new H.mapevents.Behavior(mapEvents);

		})

}else{
	console.error("Cannot find location");
}