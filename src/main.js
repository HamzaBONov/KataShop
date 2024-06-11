import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import store from './store/'
=======
>>>>>>> ffdcb98 (feat(ecommerce): :building_construction: project initial setup)
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
<<<<<<< HEAD
  .use(store)
=======
>>>>>>> ffdcb98 (feat(ecommerce): :building_construction: project initial setup)
  .use(vuetify)
  .mount('#app')
