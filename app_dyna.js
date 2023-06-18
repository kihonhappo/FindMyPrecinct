
//alert('App js');
import { jps } from './poly_lines.js';
//alert(jps);
let input;
let map;
let src = 'https://drive.google.com/file/d/1eIwbQMp9Ga85hOAFPrdfuW8Ug835kYe_/view?usp=drive_link';
async function initMap() {
  const { Map, Polygon, Polyline } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
  const { Places } = await google.maps.importLibrary("places");
  input = document.getElementById('search-box');
  map = new Map(document.getElementById("map"), {
    center: { lat: 31.53, lng: -97.237 },
    zoom: 10,
    mapId: 'jpmaps',
    scrollwheel: true,
  });

  const pinScaled = new PinElement({
    scale: 1.5,
  });
    
  // Autocomplete Options
  
  let auto_options = {
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
  }
  
  let autocomplete = new google.maps.places.Autocomplete(input, auto_options);
  autocomplete.bindTo('bounds', map);
  // Adjust the scale.
  autocomplete.addListener("place_changed", () => {
    //infowindow.close();
    //marker.setVisible(false);

    const place = autocomplete.getPlace();
    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
      map.setZoom(11);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(11);
    }

    const marker = new AdvancedMarkerElement({  
      map,
      position: place.geometry.location,
      title: "Title text for the marker at lat: 31.42, lng: -97",
    });

    //marker.setPosition(place.geometry.location);
    //marker.setVisible(true);
    
  });
  
  // Define the LatLng coordinates for the polygon's path.
  const county_boundary = [
    { lat: 31.5864174 , lng: -97.6059842 },
     { lat: 31.2981932, lng: -97.4302029 },
     { lat: 31.2336318, lng: -97.3670315 },
     {  lat: 31.539612, lng: -96.779263 },
     { lat: 31.870254, lng: -97.038815 },
     { lat: 31.5864174, lng: -97.6059842}
  ]

  const county = new Polyline({
    path: county_boundary,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });   

  county.setMap(map);
  
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
 
/*
  marker.addListener('click', ({domEvent, latLng}) => {
    const {target} = domEvent;
    // Handle the click event.
    alert('Marker is Clicked');
  }); */

  /* JP Markers */
  for (const pct of jps) {
    let jpImg = document.createElement("img");

    jpImg.src = pct.image;
    jpImg.classList.add('marker');

    const pinBackground = new PinElement({
      background: pct.bound_color,
      borderColor: pct.bound_color,
      glyphColor: 'white',
      
    }); 

    const Am = new AdvancedMarkerElement({
      map,
      content: jpImg,//pinBackground.element,
      position: pct.marker,
      title: pct.name,
    });

    let boundary = pct.boundary.split(', ');
    let line = [];
    boundary.forEach(function (pnt) { 
      let cords = pnt.split(' ');
      let cord = { lat: parseFloat(cords[1]), lng: parseFloat(cords[0]) };
      line.push(cord);
    });
    let jp_lt = new Polyline({
      path: line,
      geodesic: true,
      strokeColor: pct.bound_color,
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    console.log(line);
    jp_lt.setMap(map);
  } 
}

function buildBoundary(pnt) {
  let point = pnt.split(' ');

}

function buildContent(pct) {
  const content = document.createElement("div");

  content.classList.add("property");
  content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-gavel" title="${pct.name}"></i>
    </div>
    `;
  return content;
}



initMap();

