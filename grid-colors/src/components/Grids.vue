<template>
  <div>
    <div class="heading">
      <h1>COLORS GRID</h1>
      <button id="add-btn" v-on:click="addClick">+</button>
    </div>
    <div class="grids">
      <div
        class="gd-layout"
        v-for="layout in colors"
        :key="layout.color"
        :style="backgroundColor(layout.color)"
        @mouseover="hadnleClick()"
      >
        <div id="txt-code">
          <p>
            {{ layout.color }}
          </p>
          <button id="copy" @click="copyText(layout.color)">copy</button>
        </div>
      </div>
    </div>

    <div id="overlay" v-if="isPopup">
      <PopupForm :close="close" :addCode="addLayouts" />
    </div>
  </div>
</template>
<script>
import PopupForm from "./PopupForm.vue";
import store from "./../store";
import { mapState } from "vuex";

export default {
  components: {
    PopupForm,
  },
  data() {
    return {
      isPopup: false,
      text: "",
      layouts: [],
      isoverlay: false,
    };
  },
  created() {
    this.getColors();
    store.dispatch("setStateValueFromLocalStorage");
  },
  computed: {
    ...mapState({ colors: "colors" }),
  },
  methods: {
    hadnleClick() {
      this.isoverlay = true;
    },

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
    copyText(text) {
      console.log(text);
      navigator.clipboard.writeText(text);
      this.isoverlay = false;
      console.log(this.isoverlay);
    },
    getColors() {
      console.log("get");
      let codes = JSON.parse(localStorage.getItem("colors"));
      codes.forEach((element) => {
        console.log(element);
      });
    },
  },
};
</script>
<style>
.grids {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 20px;
}
.gd-layout {
  background-color: var(--bg-color);
  padding: 40px;
  display: inline-block;
  cursor: pointer;
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
#add-btn {
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
#txt-field {
  font-size: 20px;
  width: 100px;
  font-weight: bold;
  border: none;
}
#txt-code {
  width: 100%;
  background-color: white;
  font-weight: bold;
  font-size: 16px;
}
#txt-code p,
button {
  display: inline-block;
}

#copy {
  color: blue;
  border: none;
  background-color: white;
  font-size: 17px;
  float: right;
  margin-top: 8%;
  cursor: pointer;
}
</style>