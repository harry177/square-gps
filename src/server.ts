import { Marker } from "./store";
import store from "@/store";

export class Backend {
  static async geocodeAddress(address: string) {
    try {
      const response = await fetch(
        `https://geocode.maps.co/search?q=${encodeURIComponent(
          address
        )}&api_key=6737d82d8dafc919822050akt68e943`
      );
      const data = await response.json();
      if (data.length > 0) {
        return { lat: data[0].lat, lng: data[0].lon };
      } else {
        this.showErrorDialog(store, "Ошибка: Адрес не найден");
        throw new Error("Адрес не найден");
      }
    } catch (error: any) {
      this.showErrorDialog(store, error.message);
      throw error;
    }
  }

  static showErrorDialog(store: any, message: string) {
    store.commit("showErrorDialog", message);
  }

  static async saveMarkers(markers: Marker[]) {
    localStorage.setItem("markers", JSON.stringify(markers));
  }

  static async getMarkers() {
    const markersJson = localStorage.getItem("markers");
    return markersJson ? JSON.parse(markersJson) : [];
  }

  static async deleteMarker(index: number) {
    const markers: Marker[] = await this.getMarkers();
    markers.splice(index, 1);
    await this.saveMarkers(markers);
  }
}
