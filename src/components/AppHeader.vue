<template>
  <v-app-bar app>
    <v-toolbar-title>Моё приложение</v-toolbar-title>
    <v-spacer></v-spacer>
    <a href="/">
      <button class="header-button">О ЗАДАНИИ</button>
    </a>
    <div class="custom-spacer"></div>
    <a href="/map">
      <button class="header-button">КАРТА</button>
    </a>
  </v-app-bar>
</template>

<style>
.header-button {
  width: 130px;
  height: 35px;
  color: black;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
}
.header-button:hover {
  background-color: rgba(0, 0, 0, 0.12);
}
.custom-spacer {
  width: 20px;
}
</style>