<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Family Name</th>
          <th>Product Name</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td><input type="text" v-model="row.Parameter" /></td>
          <td><input type="text" v-model="row.Min" /></td>
          <td><input type="text" v-model="row.Max" /></td>
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
        { Parameter:'', ProductName:'', Name:''},
      ],
    };
  },
  methods: {
    addRow() {
      this.rows.push({Parameter:'', ProductName:'', Name:''});
    },
    deleteRow(index) {
      this.rows.splice(index, 1);
    },
    next(){
      localStorage.setItem("samples", JSON.stringify(this.rows));
      this.$router.push('/PageView')

    }
  },
};
</script>
  