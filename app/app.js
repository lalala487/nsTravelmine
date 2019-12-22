import Vue from "nativescript-vue";
import App from "./components/home/App";
import Login from "./components/auth/Login";
import Home from "./components/home/Home";
import DrawerContent from "./components/home/DrawerContent";

import BackendService from "./services/BackendService";

import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
// import { CardView } from "@nstudio/nativescript-cardview";

Vue.use(RadSideDrawer);
// Vue.use(CardView);
Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);

const backendService = new BackendService();
Vue.prototype.$backendService = backendService;

Vue.config.silent = (TNS_ENV === 'production');

new Vue({
  render(h) {
    return h(
      App,
      [
        h(DrawerContent, { slot: 'drawerContent' }),
        h(backendService.isLoggedIn() ? Home : Login, { slot: 'mainContent' })
      ]
    );
  }
}).$start();
