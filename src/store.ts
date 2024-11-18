import { Backend } from "./server";

import { createStore, StoreOptions } from "vuex";

interface RootState {
  errorDialogMessage: null | string,
  markers: Marker[];
  userMarker: Marker;
  centeredMarker: Marker;
}

export interface Marker {
  address: string;
  latitude: number;
  longitude: number;
}

const store: StoreOptions<RootState> = {
  state: {
    errorDialogMessage: null,
    markers: [],
    userMarker: { latitude: 0, longitude: 0, address: "" },
    centeredMarker: { latitude: 0, longitude: 0, address: "" },
  },
  mutations: {
    addMarker(state, marker) {
      state.markers.push(marker);
    },
    SET_USER_MARKER(state, marker) {
      state.userMarker = marker;
    },
    SET_MARKER(state, marker) {
      state.centeredMarker = marker;
    },
    showErrorDialog(state, message) {
      state.errorDialogMessage = message
    },
    closeErrorDialog(state) {
      state.errorDialogMessage = null;
    },
  },
  actions: {
    async addMarkerFromAddress({ commit, state }, address: string) {
      try {
        const coordinates = await Backend.geocodeAddress(address);
        const marker: Marker = {
          address,
          latitude: coordinates.lat,
          longitude: coordinates.lng,
        };
        commit("addMarker", marker);
        Backend.saveMarkers(state.markers);
      } catch (error) {
        console.error(error);
      }
    },
    centerOnUserMarker({ state, commit }, index) {
      const { latitude, longitude } = state.markers[index];
      commit("SET_USER_MARKER", { latitude, longitude, address: "" });
    },
    centerOnMarker({ state, commit }, index) {
      const { latitude, longitude } = state.markers[index];
      commit("SET_MARKER", { latitude, longitude, address: "" });
    },
  },
};

export default createStore<RootState>(store);
