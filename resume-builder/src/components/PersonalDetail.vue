<template>
  <div id="main-div">
    <h1>Personal Detail</h1>
    <div class="row">
      <div class="col-1">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >First Name
        </label>
        <input type="text" v-model="firstName" />
      </div>
      <div class="col-2">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >Last Name
        </label>
        <input type="text" v-model="firstName" />
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >Address
        </label>
        <input type="text" v-model="firstName" />
      </div>
    </div>
    <div class="row">
      <div class="col-1">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >City
        </label>
        <input type="text" v-model="firstName" />
      </div>
      <div class="col-2">
        <div class="col-2-1">
          <label
            for=""
            style="display: block; text-align: left; margin-bottom: 10px"
            >Pin Code
          </label>
          <input type="text" v-model="firstName" />
        </div>
        <div class="col-2-2">
          <label
            for=""
            style="display: block; text-align: left; margin-bottom: 10px"
            >Country
          </label>
          <input type="text" v-model="firstName" placeholder="Country" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-1">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >Email Address
        </label>
        <input type="text" v-model="firstName" />
      </div>
      <div class="col-2">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >Phone
        </label>
        <input type="text" v-model="firstName" />
      </div>
    </div>
    <div class="row">
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
.row {
  width: 100%;
}
.row .col-1,
.col-2 {
  width: 40%;
  margin: 20px;
  display: inline-block;
}

.row .col-2-1,
.col-2-2 {
  display: inline-block;
  width: 44%;
}
.row .col-2-1 {
  margin-right: 40px;
}
.row .col-3 {
  width: 79%;
  display: inline-block;
}

.row input {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid rgb(203, 203, 207);
  border-radius: 5px;
}
.row button {
  width: 40%;
  background-color: white;
  border: 1px solid rgb(203, 203, 207);
  padding: 20px;
  font-size: 18px;
}
.row #btn1 {
  float: left;
}
.row #btn2 {
  float: right;
}
</style>