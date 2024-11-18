(function(){"use strict";var e={2375:function(e,t,r){var a=r(5130),o=r(6768);function l(e,t,r,a,l,n){const s=(0,o.g2)("AppHeader"),i=(0,o.g2)("router-view"),u=(0,o.g2)("v-main"),d=(0,o.g2)("v-app");return(0,o.uX)(),(0,o.Wv)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(s),(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.bF)(i)])),_:1})])),_:1})}function n(e,t){const r=(0,o.g2)("v-toolbar-title"),a=(0,o.g2)("v-spacer"),l=(0,o.g2)("v-app-bar");return(0,o.uX)(),(0,o.Wv)(l,{app:""},{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Тестовое задание для SquareGPS")]))),_:1}),(0,o.bF)(a),t[1]||(t[1]=(0,o.Lk)("a",{href:"/"},[(0,o.Lk)("button",{class:"header-button"},"О ЗАДАНИИ")],-1)),t[2]||(t[2]=(0,o.Lk)("div",{class:"custom-spacer"},null,-1)),t[3]||(t[3]=(0,o.Lk)("a",{href:"/map"},[(0,o.Lk)("button",{class:"header-button"},"КАРТА")],-1))])),_:1})}var s=r(1241);const i={},u=(0,s.A)(i,[["render",n]]);var d=u,c={name:"NewApp",components:{AppHeader:d}};const g=(0,s.A)(c,[["render",l]]);var k=g,p=r(973);function m(e,t){const r=(0,o.g2)("v-img"),a=(0,o.g2)("v-container"),l=(0,o.g2)("v-col"),n=(0,o.g2)("v-row"),s=(0,o.g2)("v-main");return(0,o.uX)(),(0,o.Wv)(s,null,{default:(0,o.k6)((()=>[(0,o.bF)(a,null,{default:(0,o.k6)((()=>[(0,o.bF)(n,null,{default:(0,o.k6)((()=>[(0,o.bF)(l,null,{default:(0,o.k6)((()=>[t[0]||(t[0]=(0,o.Lk)("h1",null,"Тестовое задание SquareGPS",-1)),t[1]||(t[1]=(0,o.Lk)("p",null," Необходимо с помощью Vuejs, Vuex, VueRouter, Vuetify написать приложение. Хэдер приложения должен содержать меню из 2-х пунктов: О задании и Карта. В основной части приложения должно отображаться содержимое разделов. ",-1)),t[2]||(t[2]=(0,o.Lk)("h2",null,'Раздел "О задании"',-1)),t[3]||(t[3]=(0,o.Lk)("p",null," В разделе должен быть текст этого задания, сверстанный аналогично. ",-1)),t[4]||(t[4]=(0,o.Lk)("h2",null,'Раздел "Карта"',-1)),t[5]||(t[5]=(0,o.Lk)("p",null,"На экране должны быть карта и список (см. пример):",-1)),t[6]||(t[6]=(0,o.Lk)("ol",null,[(0,o.Lk)("li",null,[(0,o.eW)(" При клике на кнопку добавления, карта должна перейти в режим добавления маркера: в месте клика должен появится маркер, а в списке - запись с адресом точки. "),(0,o.Lk)("ol",{type:"a"},[(0,o.Lk)("li",null," Для поиска адреса можно использовать любое бесплатное API для геокодирования, например: https://geocode.maps.co/. "),(0,o.Lk)("li",null," В случае, если адрес не найден, необходимо вывести ошибку и не добавлять маркер в список. ")])]),(0,o.Lk)("li",null,"При клике на маркер должна подсвечиваться запись в списке."),(0,o.Lk)("li",null," При клике на запись в списке карта должна центрироваться на маркере. "),(0,o.Lk)("li",null," Маркеры должны храниться локально и не пропадать после перезагрузки страницы. "),(0,o.Lk)("li",null," В адресной строке должен отображаться id выбранного маркера. ")],-1)),t[7]||(t[7]=(0,o.Lk)("p",null," Локальное хранение данных должно быть организовано в виде сервиса, эмулирующего бекенд. (Необходим класс Backend, который псевдо-асинхронно сохраняет данные в localStorage) ",-1)),t[8]||(t[8]=(0,o.Lk)("p",null,[(0,o.Lk)("b",null,"Дополнительно:")],-1)),t[9]||(t[9]=(0,o.Lk)("ol",null,[(0,o.Lk)("li",null,"Продумать отображение на мобильных устройствах."),(0,o.Lk)("li",null,"Предусмотреть локализацию."),(0,o.Lk)("li",null,[(0,o.eW)(" Необходимо с помощью "),(0,o.Lk)("b",null,"jest"),(0,o.eW)(" написть 1 модульный тест на любой компонент. ")])],-1)),t[10]||(t[10]=(0,o.Lk)("p",null,[(0,o.Lk)("b",null,"Напоминание"),(0,o.eW)(": тестовое задание призвано показать умение писать хороший модульный код, а также умение пользоваться указанными технологиями и не только. Этим кодом нужно гордиться. ")],-1)),t[11]||(t[11]=(0,o.Lk)("p",null,"Пример:",-1)),(0,o.bF)(a,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,{width:400,"aspect-ratio":"4/3",cover:"",src:"map-example.png"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}const f={},v=(0,s.A)(f,[["render",m]]);var h=v,M=r(4232);function b(e,t,r,a,l,n){const s=(0,o.g2)("v-list-item-content"),i=(0,o.g2)("v-icon"),u=(0,o.g2)("v-btn"),d=(0,o.g2)("v-list-item-action"),c=(0,o.g2)("v-list-item"),g=(0,o.g2)("v-list"),k=(0,o.g2)("v-container"),p=(0,o.g2)("v-col"),m=(0,o.g2)("AppMap"),f=(0,o.g2)("v-row"),v=(0,o.g2)("ErrorDialog"),h=(0,o.gN)("auto-grow");return(0,o.uX)(),(0,o.Wv)(k,null,{default:(0,o.k6)((()=>[t[3]||(t[3]=(0,o.Lk)("h1",null,"Карта",-1)),(0,o.bF)(k,null,{default:(0,o.k6)((()=>[(0,o.bF)(f,{"no-gutters":""},{default:(0,o.k6)((()=>[(0,o.bF)(p,{cols:"4"},{default:(0,o.k6)((()=>[(0,o.bF)(k,null,{default:(0,o.k6)((()=>[(0,o.bF)(g,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.markers,((e,r)=>((0,o.uX)(),(0,o.Wv)(c,{key:r},{default:(0,o.k6)((()=>[(0,o.bo)(((0,o.uX)(),(0,o.Wv)(s,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,M.v_)(e.address)+" ",1),(0,o.Lk)("p",null,"Координаты: "+(0,M.v_)(e.latitude)+", "+(0,M.v_)(e.longitude),1)])),_:2},1024)),[[h]]),(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,{icon:"",onClick:e=>n.handleMarkerClick(r)},{default:(0,o.k6)((()=>[(0,o.bF)(i,null,{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("mdi-crosshairs-gps")]))),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,o.bF)(u,{onClick:n.saveMarkerToLocalStorage,color:"primary"},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("Добавить маркер")]))),_:1},8,["onClick"])])),_:1})])),_:1}),(0,o.bF)(p,{cols:"8",class:"d-flex justify-center align-center"},{default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.Wv)(m,{key:"map-"+e.$route.path,markers:e.markers},null,8,["markers"]))])),_:1})])),_:1})])),_:1}),(0,o.bF)(v,{modelValue:e.errorDialogMessage,"onUpdate:modelValue":t[0]||(t[0]=t=>e.errorDialogMessage=t),onClose:e.closeErrorDialog},null,8,["modelValue","onClose"])])),_:1})}r(8992),r(2577),r(3949);var _=r(782);r(4114);const y={state:{errorDialogMessage:null,markers:[],userMarker:{latitude:0,longitude:0,address:""},centeredMarker:{latitude:0,longitude:0,address:""}},mutations:{addMarker(e,t){e.markers.push(t)},SET_USER_MARKER(e,t){e.userMarker=t},SET_MARKER(e,t){e.centeredMarker=t},showErrorDialog(e,t){e.errorDialogMessage=t},closeErrorDialog(e){e.errorDialogMessage=null}},actions:{async addMarkerFromAddress({commit:e,state:t},r){try{const a=await F.geocodeAddress(r),o={address:r,latitude:a.lat,longitude:a.lng};e("addMarker",o),F.saveMarkers(t.markers)}catch(a){console.error(a)}},async addMarkerFromCoords({commit:e,state:t},{latitude:r,longitude:a}){try{const o=await F.getAddressByCoordinates(r,a),l={address:o||"",latitude:r,longitude:a};e("addMarker",l),F.saveMarkers(t.markers)}catch(o){console.error(o)}},centerOnUserMarker({state:e,commit:t},r){const{latitude:a,longitude:o}=e.markers[r];t("SET_USER_MARKER",{latitude:a,longitude:o,address:""})},centerOnMarker({state:e,commit:t},r){const{latitude:a,longitude:o}=e.markers[r];t("SET_MARKER",{latitude:a,longitude:o,address:""})}}};var w=(0,_.y$)(y);const L="6737d82d8dafc919822050akt68e943";class F{static async geocodeAddress(e){try{const t=await fetch(`https://geocode.maps.co/search?q=${encodeURIComponent(e)}&api_key=${L}`),r=await t.json();if(r.length>0)return{lat:r[0].lat,lng:r[0].lon};throw this.showErrorDialog(w,"Ошибка: Адрес не найден"),new Error("Адрес не найден")}catch(t){throw this.showErrorDialog(w,t.message),t}}static async getAddressByCoordinates(e,t){const r=await fetch(`https://geocode.maps.co/reverse?lat=${e}&lon=${t}&api_key=${L}`),a=await r.json();return a.display_name}static showErrorDialog(e,t){e.commit("showErrorDialog",t)}static async saveMarkers(e){localStorage.setItem("markers",JSON.stringify(e))}static async getMarkers(){const e=localStorage.getItem("markers");return e?JSON.parse(e):[]}static async deleteMarker(e){const t=await this.getMarkers();t.splice(e,1),await this.saveMarkers(t)}}r(4520),r(1454);var E=r(6886),S=r.n(E),A=r(8326);const O={id:"map",ref:"mapContainer"};var D=(0,o.pM)({__name:"AppMap",setup(e){S().Icon.Default.mergeOptions({iconRetinaUrl:r(8249),iconUrl:r(7024),shadowUrl:r(1071)});const{coords:t}=(0,A.mJX)();let a,l,n;const s=(0,_.Pj)(),i=e=>{S().marker([e.latitude,e.longitude]).addTo(a).bindPopup(`Saved Marker at (<strong>${e.latitude},${e.longitude}</strong>)`)};return(0,o.sV)((()=>{a=S().map("map").setView([s.state.userMarker.latitude,s.state.userMarker.longitude],8),S().tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(a),a.addEventListener("click",(e=>{const{lat:t,lng:r}=e.latlng;S().marker([t,r]).addTo(a).bindPopup(`Saved Marker at (<strong>${t.toFixed(2)},${r.toFixed(2)}</strong>)`),s.dispatch("addMarkerFromCoords",{latitude:t,longitude:r})}))})),(0,o.nT)((()=>{if(t.value.latitude!==Number.POSITIVE_INFINITY&&t.value.longitude!==Number.POSITIVE_INFINITY){s.commit("SET_USER_MARKER",{latitude:t.value.latitude,longitude:t.value.longitude}),l&&a.removeLayer(l),l=S().marker([s.state.userMarker.latitude,s.state.userMarker.longitude]).addTo(a).bindPopup("User Marker"),a.setView([s.state.userMarker.latitude,s.state.userMarker.longitude],13);const e=l.getElement();e&&(e.style.filter="hue-rotate(120deg)")}0!==s.state.centeredMarker.latitude&&0!==s.state.centeredMarker.longitude&&(n&&a.removeLayer(n),n=S().marker([s.state.centeredMarker.latitude,s.state.centeredMarker.longitude]).addTo(a).bindPopup(`Focused Marker at (<strong>${s.state.centeredMarker.latitude},${s.state.centeredMarker.longitude}</strong>)`),a.setView([s.state.centeredMarker.latitude,s.state.centeredMarker.longitude],13)),a&&s.state.markers.forEach((e=>{i(e)}))})),(e,t)=>((0,o.uX)(),(0,o.CE)("div",O,null,512))}});const T=D;var C=T;function V(e,t,r,a,l,n){const s=(0,o.g2)("v-card-title"),i=(0,o.g2)("v-card-text"),u=(0,o.g2)("v-spacer"),d=(0,o.g2)("v-btn"),c=(0,o.g2)("v-card-actions"),g=(0,o.g2)("v-card"),k=(0,o.g2)("v-dialog");return(0,o.uX)(),(0,o.Wv)(k,{modelValue:n.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=e=>n.dialogVisible=e),"max-width":"400"},{default:(0,o.k6)((()=>[(0,o.bF)(g,null,{default:(0,o.k6)((()=>[(0,o.bF)(s,{class:"headline"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("Ошибка")]))),_:1}),(0,o.bF)(i,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,M.v_)(e.errorDialogMessage),1)])),_:1}),(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(u),(0,o.bF)(d,{color:"primary",text:"",onClick:n.closeDialog},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("OK")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}var W={props:{value:{type:String,required:!0}},computed:{...(0,_.aH)(["errorDialogMessage"]),dialogVisible:{get(){return null!==this.value},set(e){this.$emit(e?"input":"close")}},message(){return this.value||""}},methods:{closeDialog(){this.dialogVisible=!1}}};const I=(0,s.A)(W,[["render",V]]);var R=I,$={components:{AppMap:C,ErrorDialog:R},computed:{...(0,_.aH)(["markers","errorDialogMessage"])},methods:{...(0,_.i0)(["addMarkerFromAddress","centerOnMarker"]),...(0,_.PY)(["addMarker","showErrorDialog","closeErrorDialog"]),async saveMarkerToLocalStorage(){const e=prompt("Введите адрес");if(e)try{await this.addMarkerFromAddress(e)}catch(t){this.showErrorDialog(`Ошибка: ${t.message}`)}},async handleMarkerClick(e){await this.centerOnMarker(e)}},async created(){const e=await F.getMarkers();e.forEach((e=>{this.markers.find((t=>t.address===e.address))||this.addMarker(e)}))}};const x=(0,s.A)($,[["render",b]]);var P=x;const j=(0,p.aE)({history:(0,p.LA)(),routes:[{path:"/",component:h},{path:"/map",component:P}]});var N=j,U=r(7768),X=r(1920),K=r(5741);r(7024),r(8249),r(1071);const q=(0,U.$N)({components:X,directives:K});(0,a.Ef)(k).use(N).use(w).use(q).mount("#app")}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,r),l.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,l){if(!a){var n=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],l=e[d][2];for(var s=!0,i=0;i<a.length;i++)(!1&l||n>=l)&&Object.keys(r.O).every((function(e){return r.O[e](a[i])}))?a.splice(i--,1):(s=!1,l<n&&(n=l));if(s){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,o,l]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,n=a[0],s=a[1],i=a[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(i)var d=i(r)}for(t&&t(a);u<n.length;u++)l=n[u],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(d)},a=self["webpackChunksquare_gps"]=self["webpackChunksquare_gps"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(2375)}));a=r.O(a)})();
//# sourceMappingURL=app.2c5ca5e3.js.map