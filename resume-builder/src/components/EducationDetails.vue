<template>
  <div id="main-div">
    <h1>Educational Detail</h1>
    <div class="row-1">
      <div class="col-1">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >School Name</label
        >
        <input type="text" v-model="firstName" />
      </div>
      <div class="col-2">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >City</label
        >
        <input type="text" v-model="firstName" />
      </div>
    </div>
    <div class="row-1">
      <div class="col-1">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >State</label
        >
        <input type="text" v-model="firstName" />
      </div>
      <div class="col-2">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >Select a degree</label
        >
        <input type="text" v-model="firstName" />
      </div>
    </div>
    <div class="row-1">
      <div class="col-1">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >Field of study</label
        >
        <input type="text" v-model="firstName" />
      </div>
      <div class="col-2">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >Graduation Date</label
        >
        <div class="col-2-1">
          <input type="text" v-model="firstName" placeholder="Month" />
        </div>
        <div class="col-2-2">
          <input type="text" v-model="firstName" placeholder="Year" />
        </div>
      </div>
    </div>

    <div class="row-1">
      <div class="col-1">
        <button id="btn1">Back</button>
      </div>
      <div class="col-2">
        <button id="btn2">Next</button>
      </div>
    </div>
  </div>
</template>
<style>
#main-div {
  width: 50%;
  margin: auto;
}
.row-1 {
  width: 100%;
}
.row-1 .col-1,
.col-2 {
  width: 40%;
  margin: 20px;
  display: inline-block;
}

.row-1 .col-2-1,
.col-2-2 {
  display: inline-block;
  width: 44%;
}
.row-1 .col-2-1 {
  margin-right: 40px;
}
.row-1 .col-3 {
  width: 84%;
  display: inline-block;
}

.row-1 input {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid rgb(203, 203, 207);
  border-radius: 5px;
}
.row-1 #btn1,
#btn2 {
  width: 40%;
  background-color: white;
  border: 1px solid rgb(203, 203, 207);
  padding: 20px;
  font-size: 18px;
}
.row-1 #btn1 {
  float: left;
}
.row-1 #btn2 {
  float: right;
}
</style>