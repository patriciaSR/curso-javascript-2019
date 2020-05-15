<template>
  <li>
    <input type="checkbox" v-model="elem.checked" />
    <p :class="{ crossed: elem.checked }" :style="{display: inline, color: color}">{{elem.value}}</p>
    <button @click="deleteElem()">Borrar</button>
  </li>
</template>

<script>
export default {
  name: "ListElement",
  data: function() {
    return {
      color: "red",
      inline: "inline"
    };
  },
  props: ["elem"],
  methods: {
    deleteElem: function() {
      this.$emit("delete");
    }
  }
};
</script>

<style scoped>
.crossed {
  text-decoration: line-through;
}
</style>