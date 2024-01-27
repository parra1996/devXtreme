<template>
  <v-data-table :headers="pHeaders" :items="pItems" @click:row="enviarInfo" />
</template>

<script>
export default {
  emits: ["userRow"],
  props: ["pItems", "pHeaders"],
  methods: {
    enviarInfo(event, { item }) {
      this.$emit("userRow", item);
    },
  },
};
</script>