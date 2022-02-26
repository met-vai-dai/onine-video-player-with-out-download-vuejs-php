import Vue from "vue";
//*************************   AOS    **************************//
import AOS from 'aos'
import 'aos/dist/aos.css'
// import 'aos/dist/aos.js'
Vue.use(AOS);
//*************************   AOS END    **************************//


//*************************   Glightbox    **************************//
// import glightbox from "glightbox";
// import 'glightbox/dist/js/glightbox.min.js'
// import 'glightbox/dist/css/glightbox.min.css'

// Vue.use(glightbox);
//*************************   Glightbox END    **************************//


//*************************   Bootstrap    **************************//

import '../plugins/bootstrap-vue'

// import {
//     IconsPlugin,
//     BootstrapVueIcons
// } from 'bootstrap-vue'
// Vue.use(IconsPlugin)
// Vue.use(BootstrapVueIcons)

// Optionally install the BootstrapVue icon components plugin


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap/dist/js/bootstrap.esm.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'


import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

import '../assets/app.scss';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


// Make BootstrapVue available throughout your project







// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
import {LayoutPlugin} from 'bootstrap-vue'

Vue.use(LayoutPlugin)


// This imports <b-modal> as well as the v-b-modal directive as a plugin:
import {ModalPlugin} from 'bootstrap-vue'

Vue.use(ModalPlugin)


// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
import {CardPlugin} from 'bootstrap-vue'

Vue.use(CardPlugin)


// This imports directive v-b-scrollspy as a plugin:
import {VBScrollspyPlugin} from 'bootstrap-vue'

Vue.use(VBScrollspyPlugin)


// This imports the dropdown and table plugins
import {
    DropdownPlugin,
    TablePlugin
} from 'bootstrap-vue'

Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
// import { BModal, VBModal } from 'bootstrap-vue'


//****************   Box Icons  ***/
import 'boxicons/dist/boxicons.js'
import 'boxicons/css/boxicons.min.css'
import 'boxicons/css/animations.css'
import 'boxicons/css/transformations.css'


//****************  END Box Icons  ***/

import 'bootstrap-icons/font/bootstrap-icons.css'

import 'glightbox/dist/css/glightbox.min.css'
// import 'glightbox/dist/js/glightbox.min.js'


//*************************   Bootstrap END    **************************//


//*************************   Swiper    **************************//
// import 'vue-swiper/dist/vue-swiper.js'

//*************************   Swiper END    **************************//


import VueMeta from 'vue-meta'

Vue.use(VueMeta)


// import vuetify from './plugins/vuetify.js';
// Option.use(vuetify,{rtl:true});


import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);


import '../plugins/Bootstrap.full.cap.css'

//  Sweet Alert

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';


Vue.use(VueSweetalert2);

import VueRecaptcha from "vue-recaptcha";

Vue.use(VueRecaptcha);

//************* NProgress
import "nprogress/nprogress.css";
