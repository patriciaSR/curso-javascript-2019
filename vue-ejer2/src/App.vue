<template>
  <div>
    <input v-model="input" @keyup.enter="addElem()" />
    <button @click="addElem()">Añadir</button>
    <button @click="deleteCheckedTasks()">Borrar tareas terminadas</button>
    <ul v-if="elems.length > 0">
      <li v-for="elem in elems" :key="elem.id">
        <input type="checkbox" v-model="elem.checked" />
        <p
          :class="{ crossed: elem.checked }"
          :style="{display: inline, color: color}"
        >{{elem.value}}</p>
        <button @click="deleteElem(elem.id)">Borrar</button>
      </li>
    </ul>
    <p v-else>No hay tareas</p>
  </div>
</template>


<script>
let index = 0;

export default {
  name: "app",
  data: () => {
    return {
      input: "",
      elems: [],
      color: "red",
      inline: "inline"
    };
  },
  methods: {
    addElem: function() {
      if (this.input !== "") {
        this.elems.push({ id: index, value: this.input, checked: false });
        this.input = "";
        index++;
      } else {
        alert("Añade una tarea");
      }
    },
    deleteElem: function(id) {
      const elemIndex = this.elems.findIndex(elem => elem.id === id);
      this.elems.splice(elemIndex, 1);
    },
    deleteCheckedTasks: function() {
      let newElems = [];
      for (let elem of this.elems) {
        if (!elem.checked) {
          newElems.push(elem);
        }
      }
      this.elems = newElems;

      // let arr = this.elems.length;

      // for (let i = arr - 1; (i = 0); i--) {
      //   if (this.elems[i].checked === true) {
      //     this.elems.splice(i, 1);
      //   }
      // }
    }
  }
};
</script>

<style scoped>
.crossed {
  text-decoration: line-through;
}
</style>