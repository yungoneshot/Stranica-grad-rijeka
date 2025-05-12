/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map;

async function initMap() {
  const { Map, Marker } = await google.maps.importLibrary("maps");

  const rijeka = { lat: 45.345620372300786, lng: 14.355829010876251 }; // Rijeka coordinates

  map = new Map(document.getElementById("map"), {
    center: rijeka,
    zoom: 13,
  });

let markerOptions = {
    position: new google.maps.LatLng(45.345620372300786, 14.355829010876251),
    map: map
}}

initMap();
