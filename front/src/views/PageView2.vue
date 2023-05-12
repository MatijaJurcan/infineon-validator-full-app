<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Input condition</th>
          <th>Sample</th>
          <th>Test points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td>
          <select v-model="selectedValue">
            <option v-for="(option, index) in storedDatainputConditions" :key="index">{{ option }}</option>
          </select>
          </td>

          <details role="list">
  <summary aria-haspopup="listbox">Select</summary>
  <ul role="listbox">
    <li v-for="(option, index) in storedDataSamples" :key="index">
      <label>
        <input type="checkbox"
               :value="option"
               v-model="selectedValues"
               @change="updateSelectedValues">
        {{ option }}
      </label>
    </li>
  </ul>
</details>
          <td><input type="text" v-model="row.col2" /></td>
          <td><button @click="deleteRow(index)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <button @click="addRow">Add Row</button>
    <button @click="Save">Next</button>
  </div>
<h3>{{ this.selectedValues }}</h3>
</template>

<script>


export default {
  data() {
    return {
      rows: [
        { col1:'', col2:'', col3:''},
      ],
      storedDatainputConditions: [],
      storedDataSamples: [],
      selectedValue:[],
      selectedValues:[],
      output:[]
    };
  },
  methods: {
    addRow() {
      this.rows.push({ col1:'', col2:'', col3:''});
    },
    deleteRow(index) {
      this.rows.splice(index, 1);
    },
    next(){
        this.output.push(this.selectedValue)
        this.output.push(this.selectedValue)
        localStorage.setItem("testPointCollections", JSON.stringify(this.output));
        console.log()
    },
    
    mounted() {
    const storedDatainputConditions = JSON.parse(localStorage.getItem('inputConditions'));
      this.storedDatainputConditions = storedDatainputConditions;
    const storedDataSamples = JSON.parse(localStorage.getItem('samples'));
      this.storedDataSamples = storedDataSamples;
      console.log(this.storedDataSamples)
  }
  },
  created: function () {
        this.mounted();

}
  
};
</script>
  