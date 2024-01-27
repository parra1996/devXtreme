<template>
  <!-- <v-form>
    <v-text-field
      v-model="dName"
      :rules="nameRules"
      :counter="10"
      label="file name please"
      required
      hide-details
    ></v-text-field>
  </v-form> -->
  <!-- <br />
  <div>
    <button @click="exportToExcel">Exportar a Excel</button>
  </div>
  
  <br /> -->

  <v-date-picker v-if="abrirModalDesde" v-model="desde"></v-date-picker>
  <v-date-picker v-if="abrirModalHasta" v-model="hasta"></v-date-picker>
  <!-- {{ desde.toISOString().split("T")[0] }} -->
  <!-- {{ hasta.toISOString().split("T")[0] }} -->
  <button @click="abrirDesde()">desde</button> <br />
  <button @click="abrirHasta()">Hasta</button>

  <v-data-table :items="datosFiltrados" :headers="headers"> </v-data-table>

  <button @click="calcularFecha">calcular</button> {{}}
  <button @click="resetFecha">reset</button>
</template>

<script>
import * as XLSX from "xlsx";
import TablaSencilla from "@/components/TablaSencilla.vue";
export default {
  components: {
    TablaSencilla,
  },
  data() {
    return {
      dName: "",
      nameRules: [
        (value) => {
          if (value) return true;

          return "A name is required.";
        },
      ],
      items: [
        {
          nombre: "juan",
          apellido: "parra",
          nacionalidad: "venezuela",
          edad: 27,
          genero: "hombre",
          fecha: "1996-02-14",
        },
        {
          nombre: "pedro",
          apellido: "parra",
          nacionalidad: "venezuela",
          edad: 55,
          genero: "nose",
          fecha: "1920-02-14",
        },
        {
          nombre: "cate",
          apellido: "de parra",
          nacionalidad: "venezuela",
          edad: 23,
          genero: "mujer",
          fecha: "2020-02-14",
        },
        {
          nombre: "noe",
          apellido: "carrasquero",
          nacionalidad: "venezuela",
          edad: 58,
          genero: "hombre",
          fecha: "2000-02-14",
        },
      ],
      headers: [
        {
          title: "apodo",
          // key: "nombre",
          value: "nombre",
        },
        {
          title: "apellido papu",
          // key: "apellido",
          value: "apellido",
        },
        {
          title: " pancho o que",
          // key: "apellido",
          value: "nacionalidad",
        },
        {
          title: "viejo o que",
          // key: "apellido",
          value: "edad",
        },
        {
          title: "non binary y verga",
          // key: "apellido",
          value: "genero",
        },
        {
          title: "fecha",
          value: "fecha",
        },
      ],
      abrirModalDesde: false,
      abrirModalHasta: false,
      desde: new Date(),
      hasta: new Date(),
      fechaFiltro: new Date(),
      datosFiltrados: [],
    };
  },
  watch: {
    items() {
      console.log("entramos al watch");
    },
  },
  methods: {
    exportToExcel() {
      // Crear un libro de Excel
      const ws = XLSX.utils.json_to_sheet(this.items);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Hoja1");

      // Crear un blob y descargar el archivo
      XLSX.writeFile(wb, this.dName + ".xlsx");
    },
    getUserData(event) {
      console.log(event, "ESTO ES EVENT");
    },
    abrirDesde(e) {
      console.log(e);
      this.abrirModalDesde = true;
    },
    abrirHasta() {
      this.abrirModalHasta = true;
    },
    calcularFecha() {
      // this.items.filter((item) => {
      //   item.fecha >= this.desde && item.fecha <= this.hasta;
      //   console.log(this.items);
      // });
      console.log(this.desde.toISOString().split("T")[0]);
      let datos = this.items.filter(
        (item) =>
          item.fecha > this.desde.toISOString().split("T")[0] &&
          item.fecha < this.hasta.toISOString().split("T")[0]
      );
      this.datosFiltrados = datos;
      console.log(this.items);
    },
    resetFecha() {
      this.desde = new Date();
      this.hasta = new Date();
      this.datosFiltrados = this.items;
    },
  },
  mounted() {
    this.datosFiltrados = this.items;
  },
};
</script>