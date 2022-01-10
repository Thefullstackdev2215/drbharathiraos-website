
let screenAvailHeight = window.innerHeight;

console.log(screenAvailHeight);


$(document).ready(function() {

    let fixedTopBar             = document.getElementById('fixed-top-bar'),

        fixedTopBarHeight       = fixedTopBar.offsetHeight,

        servicesDropdown        = document.getElementById('services-dropdown'),

        servicesDropdownMobile  = document.getElementById('services-dropdown-2'),

        servicesBody            = document.getElementById('services-body'),

        sideNavMobileBody       = document.getElementById('side-nav-mobile');

    if (servicesBody) {
        console.log("came here");
        servicesBody.style.paddingTop = fixedTopBarHeight + 80 + 'px';

    }

    servicesDropdown.style.paddingTop = fixedTopBarHeight + 10 + 'px';

    if (sideNavMobileBody) {
        sideNavMobileBody.style.paddingTop = fixedTopBarHeight + 50 + 'px';
    }

    let servicesArray = [
        "Post Hospitalization Rehab",
        "Palliative care",
        "Transitional care",
        "Geriatric Care",
        "Psychiatric Rehabilitation",
        "Autism",
        "Early Intervention",
        "Comprehensive Intervention Centre",
        "Comprehensive Diagnostic Centre",
        "Special Schools",
        "Specialized medical services with OPD",
        "Pharmacy",
        "Comprehensive Alternative Integrated Medical Services"
    ];

    // For desktop

    for (let i = 0; i < servicesArray.length; i++ ) {

        let servicesItem = document.createElement('div');
        servicesItem.classList.add('services-item');

        let servicesImg = document.createElement('img');
        servicesImg.src = 'images/ser' + (i + 1) + '.svg';
        servicesImg.width = 27;
        servicesImg.height = 22;
        servicesImg.alt = 'Services Icon' + (i + 1);

        let servicesText = document.createElement('p');
        servicesText.innerText = servicesArray[i];

        servicesItem.appendChild(servicesImg);
        servicesItem.appendChild(servicesText);

        servicesDropdown.appendChild(servicesItem);

    }

    // For Mobile

    for (let i = 0; i < servicesArray.length; i++ ) {

        let servicesItem = document.createElement('div');
        servicesItem.classList.add('services-item-mobile');

        let servicesImg = document.createElement('img');
        servicesImg.src = 'images/ser' + (i + 1) + '.svg';
        servicesImg.width = 27;
        servicesImg.height = 22;
        servicesImg.alt = 'Services Icon' + (i + 1);

        let servicesText = document.createElement('p');
        servicesText.innerText = servicesArray[i];

        servicesItem.appendChild(servicesImg);
        servicesItem.appendChild(servicesText);

        servicesDropdownMobile.appendChild(servicesItem);


    }

    document.getElementById("services-nav-click").addEventListener('click',function(event){
        event.stopPropagation();
    });


    $('#nav-hamburger').click(function(){
        $(this).toggleClass('open');

        if ($(this).hasClass('open')) {
            // disableScroll();
            $('#home-page').fadeOut(300);
            $('#side-menu-page-mobile').fadeIn(300);

        } else {
            // enableScroll();
            $('#side-menu-page-mobile').fadeOut(300);
            $('#home-page').fadeIn(300);

        }
    });

    $('#nav-hamburger-about').click(function(){
        $(this).toggleClass('open');

        if ($(this).hasClass('open')) {
            // disableScroll();
            $('#about-page').fadeOut(300);
            $('#side-menu-page-mobile').fadeIn(300);

        } else {
            // enableScroll();
            $('#side-menu-page-mobile').fadeOut(300);
            $('#about-page').fadeIn(300);

        }
    });

    $('#nav-hamburger-contact').click(function(){
        $(this).toggleClass('open');

        if ($(this).hasClass('open')) {
            // disableScroll();
            $('#contact-page').fadeOut(300);
            $('#side-menu-page-mobile').fadeIn(300);

        } else {
            // enableScroll();
            $('#side-menu-page-mobile').fadeOut(300);
            $('#contact-page').fadeIn(300);

        }
    });

    $('#nav-hamburger-services').click(function(){
        $(this).toggleClass('open');

        if ($(this).hasClass('open')) {
            // disableScroll();
            $('#services-page').fadeOut(300);
            $('#side-menu-page-mobile').fadeIn(300);

        } else {
            // enableScroll();
            $('#side-menu-page-mobile').fadeOut(300);
            $('#services-page').fadeIn(300);

        }
    });


});

function disableScroll() {
    // Get the current page scroll position
    let scrollTop =
        window.pageYOffset - 20 || document.documentElement.scrollTop - 20;
    let scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}



function toggleServicesDropdown() {

    let servicesDropdown = document.getElementById('services-dropdown'),
        servicesArrow    = document.getElementById('services-arrow');

    if (servicesDropdown.style.display === 'flex') {
        // servicesDropdown.style.display = 'none';
        // servicesDropdown.style.opacity = '0';
        $("#services-dropdown").fadeOut(300);
        servicesArrow.style.transform = 'rotate(180deg)';

    } else {
        $("#services-dropdown").fadeIn(300);
        servicesDropdown.style.display = 'flex';
        servicesArrow.style.transform = 'rotate(0deg)';

    }

}


function toggleServicesDropdownSideMenuMobile() {

    let servicesDropdown = document.getElementById('services-dropdown-2'),
        sideMenuIcons    = document.getElementById('side-menu-icons-mobile'),
        servicesArrow    = document.getElementById('services-arrow-2');

    if (servicesDropdown.style.display === 'block') {
        // servicesDropdown.style.display = 'none';
        // servicesDropdown.style.opacity = '0';
        $("#services-dropdown-2").fadeOut(300);
        sideMenuIcons.style.position = 'absolute';
        servicesArrow.style.transform = 'rotate(180deg)';

    } else {
        $("#services-dropdown-2").fadeIn(300);
        servicesDropdown.style.display = 'block';
        sideMenuIcons.style.position = 'static';
        servicesArrow.style.transform = 'rotate(0deg)'

    }

}


window.onclick = function(event) {
    if (!event.target.matches('.services-nav')) {

        let servicesDropdown = document.getElementById('services-dropdown');

        if (servicesDropdown.style.display === 'flex') {
            $("#services-dropdown").fadeOut(300);

        }

    }
}


function initMap() {

    const location = { lat: 18.523537, lng: 77.799380 };

    const
        location1 = { lat: 18.522505, lng: 77.795504 },
        location2 = { lat: 18.529319, lng: 77.795069 },
        location3 = { lat: 18.529608, lng: 77.804825 },
        location4 = { lat: 18.518944, lng: 77.805521 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });


}

// slider code

$('#slick-home1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots:false,
    arrows:false
});

$('#slick-home2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots:false,
    arrows:false
});

$('#slick-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    dots:true,
    arrows:false,
    draggable: false
});

$('#slick-service').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots:false,
    arrows:false
});

