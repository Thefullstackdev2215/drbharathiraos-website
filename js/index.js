
let screenAvailHeight = window.innerHeight;

console.log(screenAvailHeight);


$(document).ready(function() {

    let fixedTopBar = document.getElementById('fixed-top-bar');

    let fixedTopBarHeight = fixedTopBar.offsetHeight;

    let servicesDropdown = document.getElementById('services-dropdown');

    servicesDropdown.style.paddingTop = fixedTopBarHeight + 10 + 'px';

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

    document.getElementById("services-nav-click").addEventListener('click',function(event){
        event.stopPropagation();
    });


});


function toggleServicesDropdown() {

    let servicesDropdown = document.getElementById('services-dropdown');

    if (servicesDropdown.style.display === 'flex') {
        // servicesDropdown.style.display = 'none';
        // servicesDropdown.style.opacity = '0';
        $("#services-dropdown").fadeOut(300);

    } else {
        $("#services-dropdown").fadeIn(300);
        servicesDropdown.style.display = 'flex';

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