<template>
  <div id="map" ref="mapContainer"></div>
</template>

<script setup lang="ts">
import L from "leaflet";
import { onMounted, watchEffect } from "vue";
import { useGeolocation } from "@vueuse/core";
import { useStore } from 'vuex'
import { Marker } from '@/store'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const { coords } = useGeolocation();

let map: L.Map;
let userGeoMarker: L.Marker;
let centeredMarker: L.Marker;

const store = useStore()

const addMarkerToMap = (marker: Marker) => {
  L
    .marker([marker.latitude, marker.longitude])
    .addTo(map)
    .bindPopup(
      `Saved Marker at (<strong>${marker.latitude},${marker.longitude}</strong>)`
    )
}

onMounted(() => {
  map = L
    .map("map")
    .setView([store.state.userMarker.latitude, store.state.userMarker.longitude], 8);

  L
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);
});

watchEffect(() => {
  if (
    coords.value.latitude !== Number.POSITIVE_INFINITY &&
    coords.value.longitude !== Number.POSITIVE_INFINITY
  ) {
    store.commit('SET_USER_MARKER', {
      latitude: coords.value.latitude,
      longitude: coords.value.longitude
    })

    if (userGeoMarker) {
      map.removeLayer(userGeoMarker);
    }

    userGeoMarker = L
      .marker([store.state.userMarker.latitude, store.state.userMarker.longitude])
      .addTo(map)
      .bindPopup("User Marker");

    map.setView([store.state.userMarker.latitude, store.state.userMarker.longitude], 13);

    const el = userGeoMarker.getElement();
    
    if (el) {
      el.style.filter = "hue-rotate(120deg)";
    }
  }

  if (
    store.state.centeredMarker.latitude !== 0 &&
    store.state.centeredMarker.longitude !== 0
  ) {
    if (centeredMarker) {
      map.removeLayer(centeredMarker);
    }

    centeredMarker = L
      .marker([store.state.centeredMarker.latitude, store.state.centeredMarker.longitude])
      .addTo(map)
      .bindPopup(`Focused Marker at (<strong>${store.state.centeredMarker.latitude},${store.state.centeredMarker.longitude}</strong>)`);

    map.setView([store.state.centeredMarker.latitude, store.state.centeredMarker.longitude], 13);
  }

  if (map) {
    store.state.markers.forEach((marker: Marker) => {
      addMarkerToMap(marker)
    })
  }
});
</script>

<style>
#map {
  width: 500px;
  height: 500px;
}
</style>