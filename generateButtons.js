var buttonContainer = document.getElementById('buttonsContainer');



document.addEventListener('DOMContentLoaded', function () {
    // Initial state
    setLayout('landing');
    var selectedButton = null;

    // Add buttons for each date (customize this based on your date pattern)
    addRouteButton('2023-10-18');
    addRouteButton('2023-10-19');
    addRouteButton('2023-10-20');
    addRouteButton('2023-10-21');
    addRouteButton('2023-10-22');
    addRouteButton('2023-10-23');
    addRouteButton('2023-10-24');
    addRouteButton('2023-10-25');
    addRouteButton('2023-10-26');
    addRouteButton('2023-10-27');
    addRouteButton('2023-10-28');
    addRouteButton('2023-10-29');
    addRouteButton('2023-10-30');
    addRouteButton('2023-10-31');
    addRouteButton('2023-11-01');
    addRouteButton('2023-11-02');
    addRouteButton('2023-11-03');
    addRouteButton('2023-11-04');
    addRouteButton('2023-11-05');
    addRouteButton('2023-11-06');
    addRouteButton('2023-11-07');
    addRouteButton('2023-11-08');
    addRouteButton('2023-11-09');
    addRouteButton('2023-11-10');
    addRouteButton('2023-11-11');
    addRouteButton('2023-11-12');
    addRouteButton('2023-11-13');
    addRouteButton('2023-11-14');
    addRouteButton('2023-11-15');
    addRouteButton('2023-11-16');
    addRouteButton('2023-11-17');
    addRouteButton('2023-11-18');
    addRouteButton('2023-11-19');
    addRouteButton('2023-11-20');
    addRouteButton('2023-11-21');
    addRouteButton('2023-11-22');
    addRouteButton('2023-11-23');
    addRouteButton('2023-11-24');
    addRouteButton('2023-11-25');
    addRouteButton('2023-11-26');
    addRouteButton('2023-11-27');
    addRouteButton('2023-11-28');
    addRouteButton('2023-11-29');
    addRouteButton('2023-11-30');
    addRouteButton('2023-12-01');
    addRouteButton('2023-12-02');
    addRouteButton('2023-12-03');
    addRouteButton('2023-12-04');
    addRouteButton('2023-12-05');
    addRouteButton('2023-12-06');
    addRouteButton('2023-12-07');
    addRouteButton('2023-12-08');
    addRouteButton('2023-12-09');
    addRouteButton('2023-12-10');
    addRouteButton('2023-12-11');
    addRouteButton('2023-12-12');
    addRouteButton('2023-12-13');
    addRouteButton('2023-12-14');
    addRouteButton('2023-12-15');
    addRouteButton('2023-12-16');
    addRouteButton('2023-12-17');
    addRouteButton('2023-12-18');
    addRouteButton('2023-12-19');
    addRouteButton('2023-12-20');
    addRouteButton('2023-12-21');
    addRouteButton('2023-12-22');
    addRouteButton('2023-12-23');
    addRouteButton('2023-12-24');
    addRouteButton('2023-12-25');
    addRouteButton('2023-12-26');
    addRouteButton('2023-12-27');
    addRouteButton('2023-12-28');
    addRouteButton('2023-12-29');
    addRouteButton('2023-12-30');
    addRouteButton('2023-12-31');
    addRouteButton('2024-01-01');
    addRouteButton('2024-01-02');
    addRouteButton('2024-01-03');
    addRouteButton('2024-01-04');
    addRouteButton('2024-01-05');
    addRouteButton('2024-01-06');
    addRouteButton('2024-01-07');
    addRouteButton('2024-01-08');
    addRouteButton('2024-01-09');
    addRouteButton('2024-01-10');

   
    function addRouteButton(routeId) {
        var routeDiv = document.createElement('div');
        routeDiv.id = `routeDiv${routeId}`;

        var detailsContainer = document.createElement('div');
        detailsContainer.id = `detailsContainer${routeId}`;
        detailsContainer.style.display = 'none';

        var featureList = document.createElement('ul');
        featureList.id = `featureList${routeId}`;
        detailsContainer.appendChild(featureList);

        buttonsContainer.appendChild(routeDiv);

        var marqueeWrapper = document.createElement('div');
        marqueeWrapper.classList.add('marquee-wrapper');
        routeDiv.appendChild(marqueeWrapper);

        var button = document.createElement('button');
        button.id = `route${routeId}`;
        button.textContent = routeId;
        button.classList.add('tagesdatenbutton');

        // Append the button to the marquee wrapper
        marqueeWrapper.appendChild(button);

        // Append the marquee container to the route div
        routeDiv.appendChild(detailsContainer);
        
        function updateRouteOpacity(selectedRouteId) {
    var allRoutes = document.querySelectorAll('.tagesdatenbutton');
    
    // Iterate through each route button
    allRoutes.forEach(function (routeButton) {
        var routeId = routeButton.textContent;
        var mapLayerId = `route-${routeId}`;

        // Get the current route opacity
        var opacity = routeId === selectedRouteId ? 1 : 0.2; // Adjust the opacity values as needed

        // Update the opacity of the map layer
        map.setPaintProperty(mapLayerId, 'line-opacity', opacity);
    });
}

button.addEventListener('click', function () {

  // Remove the marker with ID "platten" if it exists
  var existingMarker = document.getElementById('platten');
  if (existingMarker) {
      existingMarker.remove();
  }

    var allButtons = document.querySelectorAll('.tagesdatenbutton');
    allButtons.forEach(function (btn) {
        if (btn !== button) {
            btn.classList.remove('active');
            btn.classList.remove('marquee-container');
            btn.parentNode.classList.remove('active'); // Remove 'active' from the parent wrapper
            var childButton = btn.querySelector('.button');
            if (childButton) {
                childButton.classList.remove('active'); // Remove 'active' from the button's child
            }
        }
    });

    if (button.classList.contains('active')) {
        // If the button is already active, remove the 'active' state
        button.classList.remove('active');
        button.classList.remove('marquee-container');
        marqueeWrapper.classList.remove('active'); // Remove 'active' from the wrapper
        var childButton = button.querySelector('.button');
        if (childButton) {
            childButton.classList.remove('active'); // Remove 'active' from the button's child
        }
    } else {
        // If the button is not active, add 'active' and marquee effect
        button.classList.add('active');
        button.classList.add('marquee-container');
        marqueeWrapper.classList.add('active'); // Add 'active' to the wrapper
        var childButton = button.querySelector('.button');
        if (childButton) {
            childButton.classList.add('active'); // Add 'active' to the button's child
        }
    }

    if (selectedButton === button) {
        setLayout('landing');
        selectedButton = null;
        document.getElementById('sortButtons').style.display = 'block';
        document.getElementById('about').style.display = 'block';
        document.getElementById('marqueeContainer').style.display = 'flex';
        document.getElementById('aboutgear').style.display = 'block';

        detailsContainer.style.display = 'none';

        // Move the routeDiv to the top
        routeDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
    } else {
        if (selectedButton) {
            document.getElementById(`detailsContainer${selectedButton.textContent}`).style.display = 'none';
        }

   
        setLayout('routeSelected');
        selectedButton = button;
        fetchData(`history/routedata/history-${routeId}`);
        centerMapOnBerlin();
        document.getElementById('sortButtons').style.display = 'none';
        document.getElementById('about').style.display = 'none';
        document.getElementById('marqueeContainer').style.display = 'none';
        document.getElementById('aboutgear').style.display = 'none';
        detailsContainer.style.display = 'flex';
        detailsContainer.appendChild(routeData);

        // Move the routeDiv to the top
        routeDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

    }
    // function scrollFeatureListIntoView() {
    //     var featureListContainer = document.getElementById('featureListContainer');

    //     if (featureListContainer) {
    //         featureListContainer.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         });
    //     }
    // }

    function setLayout(state) {
        var buttonsContainer = document.getElementById('buttonsContainer');
        var mapuebercontainer = document.getElementById('mapueber');
        var map = document.getElementById('map');
        var routeData = document.getElementById('routeData');

        if (state === 'landing') {
            // buttonsContainer.style.maxWidth = '30vw';
            buttonsContainer.classList.remove('active');
            mapuebercontainer.classList.remove('active');
            map.style.display = 'none';
            routeData.style.display = 'none';
        } else if (state === 'routeSelected') {
            // buttonsContainer.style.maxWidth = '50vw';
            buttonsContainer.classList.add('active');
            mapuebercontainer.classList.add('active');
            map.style.display = 'inline-block';
            routeData.style.display = 'block';
        }

        mapueber.resize();
    }
});