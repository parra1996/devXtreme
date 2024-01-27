import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'devextreme/dist/css/dx.light.css';

const app = createApp(App);
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
});

app.use(router).use(vuetify);
app.mount('#app');
