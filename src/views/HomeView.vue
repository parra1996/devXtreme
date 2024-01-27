<template>
  <!-- <button @click="mostrarModal">mostrar modal</button>
  <dialogVue
    :isOpen="openDialog"
    :component="componenteHijo"
    title="prueba de modal"
    :componentProps="props"
    @closeModal="closeModal"
  ></dialogVue> -->

  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    @drop="drop"
  >
    <label for="dropzone"></label>
    <input type="file" id="dropzone" />

    {{ dropZoneFile.name }}
  </div>
</template>

<script>
import dialogVue from "@/components/dialogs/dialog.vue";
import Prueba from "@/components/prueba.vue";
import TablaPropia from "./tablaPropia/TablaPropia.vue";
export default {
  components: {
    dialogVue,
    Prueba,
    TablaPropia,
  },
  data() {
    return {
      openDialog: false,
      componenteHijo: Prueba,
      tabla: TablaPropia,
      props: {
        nombre: "juan",
        apellido: "parra",
        nacionalidad: "venezolano",
        edad: 50,
        pareja: false,
      },
      active: false,
      dropZoneFile: "",
    };
  },
  methods: {
    mostrarModal() {
      this.openDialog = true;
    },
    closeModal(e) {
      console.log(e, "ESTO E EVENT");
      this.openDialog = false;
    },
    toggleActive() {
      this.active = !this.active;
    },
    drop(event) {
      this.dropZoneFile = event.dataTransfer.files[0];
    },
  },
};
</script>