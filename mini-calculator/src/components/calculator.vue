<template>
  <div id="main-container">
    <div style="width: 100%">
      <p v-if="isShow">{{ this.number }}</p>
      <input type="text" v-model="numValue" id="num_value" />
    </div>
    <div id="container">
      <div
        v-for="item in btnValue"
        :key="item.value"
        @click="buttonClick(item.value)"
        class="item"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      numValue: "",
      total: 0,
      number: "",
      isShow: false,
      btnValue: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: "+",
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: "-",
        },
        {
          value: 7,
        },
        {
          value: 8,
        },
        {
          value: 9,
        },
        {
          value: "*",
        },
        {
          value: "=",
        },
        {
          value: 0,
        },
        {
          value: "/",
        },
        {
          value: "CLR",
        },
      ],
    };
  },
  methods: {
    buttonClick(val) {
      if (val != "CLR" && val != "=") {
        this.numValue += val;
      }
      if (val == "CLR") {
        this.clear();
      }
      if (val == "=") {
        this.isShow = true;
        this.evaluateValue();
      }
    },
    clear() {
      this.numValue = " ";
    },
    evaluateValue() {
      this.number = this.numValue;
      let tot = eval(this.numValue);
      this.total = tot;
      this.numValue = this.total;
    },
  },
};
</script>
<style>
#main-container {
  width: 30%;
  border: 1px solid black;
  padding: 20px;
}
#container {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
}
.item {
  border: 1px solid black;
  padding: 20px;
  border-radius: 40px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}
#num_value {
  font-size: 24px;
  font-weight: 700;
  text-align: right;
  width: 100%;
  padding: 30px 0px;
  background-color: #f8f8f8;
  margin-bottom: 20px;
}
</style>
