<template>
  <v-container>
    <h1>Карта</h1>
    <v-container>
      <v-row no-gutters>
        <v-col cols="4">
          <v-container>
            <v-list>
              <v-list-item v-for="(marker, index) in markers" :key="index">
                <v-list-item-content v-auto-grow>
                  {{ marker.address }}
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="handleMarkerClick(index)">
                    <v-icon>mdi-crosshairs-gps</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-btn @click="saveMarkerToLocalStorageMarker" color="primary"
              >Добавить маркер</v-btn
            >
          </v-container>
        </v-col>
        <v-col cols="8" class="d-flex justify-center align-center">
          <AppMap :key="'map-' + $route.path" :markers="markers" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { Backend } from "@/server";
import AppMap from "@/components/AppMap";

export default {
  components: {
    AppMap,
  },
  computed: {
    ...mapState(["markers"]),
  },
  methods: {
    ...mapActions(["addMarkerFromAddress", "centerOnMarker"]),
    ...mapMutations(["addMarker"]),
    async saveMarkerToLocalStorageMarker() {
      const address = prompt("Введите адрес");
      if (address) {
        await this.addMarkerFromAddress(address);
      }
    },
    async handleMarkerClick(index) {
      await this.centerOnMarker(index);
    },
  },
  async created() {
    const markers = await Backend.getMarkers();
    markers.forEach((marker) => {
      if (!this.markers.find((m) => m.address === marker.address)) {
        this.addMarker(marker);
      }
    });
  },
};
</script>
<style>
.v-list {
  overflow: hidden !important;
}
</style>