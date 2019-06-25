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

//For Sticky navbar
window.addEventListener('scroll', function () {
    if(this.scrollY >10){
        document.querySelector('#navbar').style.opacity = 0.9;
    }
    else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Code for Smooth scrolling

$('#navbar a, .btn').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800);
    }
});