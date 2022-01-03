<template>
  <div id="main-div">
    <h1>Skills</h1>
    <div class="row-1" v-for="(index, item) in items" :key="index">
      <div class="col-1">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >Skill</label
        >
        <input
          type="text"
          v-model="item.skill"
          placeholder="e.g. Microsoft Word"
        />
      </div>
      <div class="col-2">
        <label
          for=""
          style="display: block; text-align: left; margin-bottom: 10px"
          >level</label
        >
        <input type="text" v-model="item.level" placeholder="Select Level" />
      </div>
      <div class="col-3">
        <button class="btn" style="color: green">Save</button>
        <button class="btn" @click="deleteRow(index)" style="color: red">
          Delete
        </button>
      </div>
    </div>

    <div class="row-2">
      <button @click="addSkill">+Add More Skills</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 0,
      level_list: [
        "Beginner",
        "Intermediate",
        "Skillful",
        "Experienced",
        "Expert",
      ],
      items: [],
    };
  },
  methods: {
    addSkill() {
      let id = this.id + 1;
      let obj = {
        id,
        skill: "",
        level: "",
      };
      this.items.push(obj);
    },
    deleteRow(id) {
      this.items.splice(id, 1);
    },
  },
};
</script>
<style>
#main-div {
  width: 60%;
  margin: auto;
}
.row-1 {
  width: 100%;
}
.row-1 .col-1,
.col-2 {
  width: 35%;
  margin: 20px;
  display: inline-block;
}
.row-1 .col-3 {
  width: 15%;
}
.btn {
  padding: 6px;
  font-size: 14px;
  border: none;
  background-color: white;
  cursor: pointer;
}
.row-2 {
  margin-top: 10%;
}
.row-2 button {
  width: 50%;
  padding: 16px;
  font-size: 20px;
  background-color: rgb(33, 164, 240);
  color: white;
  border: none;
}
</style>