let map; google.maps.Map;

/* Make markers respond to click and keyboard events */
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -73.984291, lng: 40.726997 },
        zoom: 14,
        mapID:
    });

    new google.maps.Marker({
        position: { lat: -73.984291, lng: 40.726997 },
        map: map,
    });
}

<script
src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly&libraries=marker"
defer
></script>