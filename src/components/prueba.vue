<template>
  hola mi nombre es {{ nombre + " " + apellido }}, y soy de
  {{ nacionalidad }} con edad de {{ edad }}
</template>

<script>
export default {
  props: {
    nombre: {
      type: String,
    },
    apellido: {
      type: String,
    },
    nacionalidad: {
      type: String,
    },
    edad: {
      type: Number,
    },
  },
  mounted() {
    console.log(this.$props);
  },
};
</script>