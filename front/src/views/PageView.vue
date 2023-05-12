<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Minimum</th>
          <th>Maximum</th>
          <th>Time Between Points</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td><input type="text" v-model="row.Parameter" /></td>
          <td><input type="text" v-model="row.Min" /></td>
          <td><input type="text" v-model="row.Max" /></td>
          <td><input type="text" v-model="row.TimeBetweenPoints" /></td>
          <td><button @click="deleteRow(index)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <button @click="addRow">Add Row</button>
    <button @click="next">Next</button>
  </div>  
  <h1>{{ this.rows}}</h1>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        { Parameter:'', Min:'', Max:'', TimeBetweenPoints:''},
      ],
    };
  },
  methods: {
    addRow() {
      this.rows.push({Parameter:'', Min:'', Max:'', TimeBetweenPoints:''});
    },
    deleteRow(index) {
      this.rows.splice(index, 1);
    },
    next(){
      localStorage.setItem("inputConditions", JSON.stringify(this.rows));
      this.$router.push('/PageView2')

    }
  },
};
</script>
  