import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 900,
  once: true,
  easing: 'ease-out-cubic',
})

createApp(App).mount('#app')