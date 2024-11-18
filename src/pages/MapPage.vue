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
            <v-btn @click="saveMarkerToLocalStorage" color="primary"
              >Добавить маркер</v-btn
            >
          </v-container>
        </v-col>
        <v-col cols="8" class="d-flex justify-center align-center">
          <AppMap :key="'map-' + $route.path" :markers="markers" />
        </v-col>
      </v-row>
    </v-container>
    <ErrorDialog v-model="errorDialogMessage" @close="closeErrorDialog" />
  </v-container>
</template>

<script>
import { watchEffect } from "vue";
import { mapState, mapActions, mapMutations } from "vuex";
import { Backend } from "@/server";
import AppMap from "@/components/AppMap";
import ErrorDialog from "@/components/ErrorDialog.vue";
import store from "@/store";

export default {
  components: {
    AppMap,
    ErrorDialog,
  },
  computed: {
    ...mapState(["markers", "errorDialogMessage"]),
  },
  methods: {
    ...mapActions(["addMarkerFromAddress", "centerOnMarker"]),
    ...mapMutations(["addMarker", "showErrorDialog", "closeErrorDialog"]),

    async saveMarkerToLocalStorage() {
      const address = prompt("Введите адрес");
      if (address) {
        try {
          await this.addMarkerFromAddress(address);
        } catch (error) {
          this.showErrorDialog(`Ошибка: ${error.message}`);
        }
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

watchEffect(() => {
 
    console.log(store.state.errorDialogMessage);
 
});
</script>
<style>
.v-list {
  overflow: hidden !important;
}
</style>
