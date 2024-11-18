<template>
  <v-dialog v-model="dialogVisible" max-width="400">
    <v-card>
      <v-card-title class="headline">Ошибка</v-card-title>
      <v-card-text>{{ errorDialogMessage }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["errorDialogMessage"]),
    dialogVisible: {
      get() {
        return this.value !== null;
      },
      set(value) {
        this.$emit(value ? "input" : "close");
      },
    },
    message() {
      return this.value || "";
    },
  },
  methods: {
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>
