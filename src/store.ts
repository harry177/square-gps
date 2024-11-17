import { Backend } from "./server";

import { createStore, StoreOptions } from "vuex";

interface RootState {
  markers: Marker[];
  userMarker: Marker;
  centeredMarker: Marker;
}

export interface Marker {
  address: string;
  latitude: number;
  longitude: number;
}

interface Mutations {
  addMarker(state: RootState, marker: Marker): void;
  SET_USER_MARKER(state: RootState, marker: Marker): void;
}

interface Actions {
  addMarkerFromAddress(
    {
      commit,
      state,
    }: { commit: (type: string, payload: Marker) => void; state: RootState },
    address: string
  ): Promise<void>;
  centerOnMarker(
    {
      state,
      commit,
    }: { state: RootState; commit: (type: string, payload: Marker) => void },
    index: number
  ): void;
}

const store: StoreOptions<RootState> = {
  state: {
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
    }
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
        console.error("Ошибка геокодирования:", error);
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
