<template>
  <v-dialog v-model="openDialog" @update:modelValue="closeModal">
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        <component :is="component" v-bind="componentProps"></component>
      </v-card-text>
      <v-card-actions>
        <button @click="closeModal">cerrar</button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    isOpen: {
      required: true,
      type: Boolean,
      default: false,
    },
    title: {
      required: true,
      type: String,
      default: "titulo de dialog",
    },
    component: {
      required: true,
      default: null,
    },
    componentProps: {
      type: Object,
    },
  },
  emits: ["closeModal"],
  data() {
    return {
      openDialog: this.isOpen,
    };
  },
  watch: {
    isOpen() {
      this.openDialog = this.isOpen;
    },
  },
  methods: {
    closeModal(event) {
      console.log(event);
      this.$emit("closeModal", event);
    },
  },
};
</script>