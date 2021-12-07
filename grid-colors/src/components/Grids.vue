<template>
  <div>
    <div class="heading">
      <h1>COLORS GRID</h1>
      <button v-on:click="addClick">+</button>
    </div>
    <div class="grids">
      <div
        class="gd-layout"
        v-for="layout in layouts"
        :key="layout.color"
        :style="backgroundColor(layout.color)"
      >
        {{ layout.display }}
      </div>
    </div>

    <div id="overlay" v-if="isPopup">
      <PopupForm :close="close" :addCode="addLayouts" />
    </div>
  </div>
</template>
<script>
import PopupForm from "./PopupForm.vue";
export default {
  components: {
    PopupForm,
  },
  data() {
    return {
      isPopup: false,

      layouts: [],
    };
  },
  created() {
    // this.getColors();
  },
  methods: {
    backgroundColor(color) {
      return { "--bg-color": color };
    },
    addLayouts(code) {
      const obj = {
        color: code,
      };
      this.layouts.push(obj);
    },
    addClick() {
      this.isPopup = true;
    },
    close() {
      console.log("close");
      this.isPopup = false;
    },
    /* getColors() {
      console.log("get");
      let codes = JSON.parse(localStorage.getItem("colors"));
      codes.forEach((element) => {
        console.log(element);
      });
    },*/
  },
};
</script>
<style>
.grids {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  column-gap: 10px;
  row-gap: 10px;
}
.gd-layout {
  background-color: var(--bg-color);
  padding: 60px;
}
@media only screen and (max-width: 700px) {
  .grids {
    display: grid;
    grid-template-columns: auto auto auto;
  }
}
#overlay {
  position: fixed;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
}
h1,
button {
  display: inline-block;
}
button {
  font-size: 40px;
  width: 50px;
  float: right;
  position: absolute;
  right: 10%;
  top: 3%;
  border: none;
  color: white;
  background-color: rgb(6, 111, 209);
}
</style>