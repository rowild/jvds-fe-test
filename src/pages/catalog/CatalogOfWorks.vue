<template>
  <div class="flex flex-center column border">
    <h2 class="text-h4">Compositions</h2>

    <p>Category: {{ $route.params.category }}</p>

    <router-link to="/">
      Back to home page
    </router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const consCol = 'color: firebrick; font-size: 14px; font-weight 700'

onMounted(() => {
  console.log('%cCATALOG_OF_WORKS: onMounted invoked', consCol);
})
</script>
