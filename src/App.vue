<template>
  <div v-if="layoutIsPreloading" class="flex flex-center fit">
    <div class="rotationLoader">
      <!--Loading...-->
    </div>
  </div>

  <router-view v-slot="{ Component, route }" v-else>
    <Transition appear mode="out-in" @before-appear="onBeforeAppearApp" @appear="onAppearApp" :css="false"
      :key="route.meta.layoutKey">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useDarkMode, useTheme } from '@code-coaching/vuetiful';
import useQuasar from 'quasar/src/composables/use-quasar.js';
import axios from 'axios'

import '@code-coaching/vuetiful/styles/all.css';
import "@code-coaching/vuetiful/css/overrides/quasar.css"; // This provides overrides for Quasar components
/**
 * Uncomment the theme you want to use
 */
import '@code-coaching/vuetiful/themes/theme-vuetiful.css';
// import '@code-coaching/vuetiful/themes/theme-rocket.css';
// import '@code-coaching/vuetiful/themes/theme-sahara.css';
// import '@code-coaching/vuetiful/themes/theme-seafoam.css';
// import '@code-coaching/vuetiful/themes/theme-seasonal.css';
// import '@code-coaching/vuetiful/themes/theme-skeleton.css';

import './css/app.css';

const { autoModeWatcher, chosenMode, MODE } = useDarkMode();
const { changeDataTheme } = useTheme();
const $q = useQuasar();

const layoutIsPreloading = ref(true)
// const axiosUrl = 'http://localhost/jsonapi'
// let result = ''

// import { useAxios } from '@vueblocks/vue-use-axios'
// const { refetch, data } = useAxios(axiosUrl)

// console.log styles
const consCol = 'color: green; font-weight: 700; font-size: 14px;'


const handleQuasarDarkMode = (mode) => {
  $q.dark.set(mode === MODE.DARK);
  if (mode === MODE.LIGHT) {
    document.body.classList.remove('body--light');
  } else {
    document.body.classList.remove('body--dark');
  }
};

watch(() => chosenMode.value, (newMode) => {
  handleQuasarDarkMode(newMode);
});

/* Life cycles and transition hooks */

onMounted(async (ctx) => {
  console.log('%cAPP: mounted invoked', consCol);

  changeDataTheme("vuetiful"); // adds data-theme="vuetiful" to the <body> tag
  autoModeWatcher(); // automatically use the dark preference of the OS
  handleQuasarDarkMode(chosenMode.value);

  if (!document.body.classList.contains("app-active")) {
    document.body.classList.add("app-active");
  }

  // result = await axios.options(axiosUrl)
  //   .then(data => {
  //     console.log("data =", data)
  //   })
  //   .catch(function (error) {
  //     console.log('error =', error.toJSON());
  //   })

  // console.log('result =', result);

  layoutIsPreloading.value = false
});

const onBeforeAppearApp = () => {
  console.log('%cAPP: onBeforeAppearApp invoked', consCol);
}

const onAppearApp = (el, done) => {
  console.log('%cAPP: onAppearApp invoked', consCol);
  done()
}

/* Route guards - not "working" in App-vue! */
</script>
