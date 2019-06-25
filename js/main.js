var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 19.073700, lng: 72.879246 },
        zoom: 14,
    });
    const marker = new google.maps.Marker({
        position: { lat: 19.073700, lng: 72.879246 },
        map: map
    });
}