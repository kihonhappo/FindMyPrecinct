const properties = [
    {
      address: "215 Emily St, MountainView, CA",
      description: "Single family house with modern design",
      price: "$ 3,889,000",
      type: "home",
      bed: 5,
      bath: 4.5,
      size: 300,
      position: {
        lat: -97.1442265,
        lng: 31.5185476,
      },
    }
  ];
//alert('App js');
let map;
//const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
let src = 'https://drive.google.com/file/d/1eIwbQMp9Ga85hOAFPrdfuW8Ug835kYe_/view?usp=drive_link';
function initMap() {
  
  /*
    roadmap: displays the default road map view. This is the default map type.
    satellite: displays Google Earth satellite images.
    hybrid: displays a mixture of normal and satellite views.
    terrain: displays a physical map based on terrain information.
  */

  let mapOptions = {
    center: { lat: 31.53, lng: -97.237 },
    zoom: 10,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap','hybrid','terrain'] 
    },
    //mapTypeId: 'hybrid'
  }
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  /* JP Markers */
  /*for (const property of properties) {
    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(property),
      position: property.position,
      title: property.description,
    });

    //AdvancedMarkerElement.addListener("click", () => {
      //toggleHighlight(AdvancedMarkerElement, property);
    //});
  } 

  const county_boundary = [
     { lat: -97.6059842, lng: 31.5864174 },
     { lat: -97.4302029, lng: 31.2981932 },
     { lat: -97.3670315, lng: 31.2336318 },
     { lat: -96.779263, lng: 539612},
     { lat: -97.038815, lng: 31.870254 },
     { lat: -97.6059842, lng: 31.5864174 }
   ]*/
  const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}
  
  let jp5_Options = {
    position: new google.maps.LatLng(-97.1442265, 31.5185476),
    label: 'Precinct 5',
    icon: 'https://icon-library.com/images/google-maps-pin-icon/google-maps-pin-icon-0.jpg',
    map: map
  };

  //let jp5 = new google.maps.Marker(jp5_Options);
  // Adjust the scale.
  
  /* const pinScaled = new PinElement({
     scale: 1.5,
   });
   const marker = new AdvancedMarkerElement({  
     map,
     position: { lat: 31.42, lng: -97 },
     title: "Title text for the marker at lat: 31.42, lng: -97",
     content: pinScaled.element,
   });
   // Define the LatLng coordinates for the polygon's path.
   
 
   const flightPath = new Polygon({
     map: map,
     path: county_boundary,
     geodesic: true,
     strokeColor: "#FF0000",
     strokeOpacity: 1.0,
     strokeWeight: 2,
   });
 
  */
  
  /*
  map.data.add({
    geometry: new Map.Data.Polygon([
      county_boundary,
    ]),
  });   */
  
  // Construct the polygon.
  /*const county_line = new Polygon({
    paths: county_boundary,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map: map,
  });*/
 

  /*marker.addListener('click', ({domEvent, latLng}) => {
    const {target} = domEvent;
    // Handle the click event.
    alert('Marker is Clicked');
  }); */
  
}
function buildContent(property) {
  const content = document.createElement("div");

  content.classList.add("property");
  content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}"></i>
        <span class="fa-sr-only">${property.type}</span>
    </div>
    <div class="details">
        <div class="price">${property.price}</div>
        <div class="address">${property.address}</div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
            <span class="fa-sr-only">bedroom</span>
            <span>${property.bed}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
            <span class="fa-sr-only">bathroom</span>
            <span>${property.bath}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
            <span class="fa-sr-only">size</span>
            <span>${property.size} ft<sup>2</sup></span>
        </div>
        </div>
    </div>
    `;
  return content;
}
//initMap();