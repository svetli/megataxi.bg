
module.exports = function(obj) {

    var map = new google.maps.Map(document.getElementById('mapholder'), {
        center: new google.maps.LatLng(42.2949246, 22.705488),
        zoom:   16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(42.2952442, 22.7060327),
        title: 'Mega Taxi'
    });

    marker.setMap(map);
};