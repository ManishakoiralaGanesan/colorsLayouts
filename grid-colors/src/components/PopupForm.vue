<template>
  <div style="width: 100%" id="main">
    <div id="form">
      <button id="close" v-on:click="close()">X</button>
      <h2>HEX CODE</h2>

      <form action="">
        <input type="text" v-model="codeName" placeholder="Enter HEX Code" />
        <br />
        <input type="submit" value="Add" @click="addColorcode" />
      </form>
    </div>
  </div>
</template>
<script>
//import store from "./../store";
export default {
  props: {
    close: {
      type: Function,
    },
    addCode: {
      type: Function,
    },
  },
  data() {
    return {
      codeName: "",
    };
  },
  methods: {
    addColorcode() {
      var RegExp = /^#[0-9A-F]{6}$/i;
      if (RegExp.test(this.codeName)) {
        this.addCode(this.codeName);
      } else {
        alert("Code is not valid");
      }
      //   this.storeColors();
      this.close();
    },
    /*storeColors() {
      store.dispatch("storecolor", {
        color: this.codeName,
      });
    },*/
  },
};
</script>

<style>
#form {
  width: 500px;
  background-color: white;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
input[type="text"] {
  padding: 16px;
  font-size: 16px;
  width: 400px;
  border-radius: 20px;
}
input[type="submit"] {
  margin-top: 20px;
  width: 200px;
  padding: 16px;
  font-size: 20px;
  background-color: rgb(2, 87, 2);
  color: white;
  border: none;
  border-radius: 30px;
}
#close {
  color: red;
  border: none;
  background-color: white;
  font-size: 25px;
  float: right;
  cursor: pointer;
}
</style>
