<template>
  <div class="flex column justify-center align-center max-w-sm">

    <div v-if="store.pageTransitions.activateMenu">
      <ul class="text-subtitle1 text-weight-medium color-primary q-ma-none q-pa-none q-mb-lg min-w-md" v-if="navItems">
        <li class="" v-for="item in navItems" :key="item.id">
          {{ item.name }}

          <ul class="q-px-none q-mx-none" v-if="item.menu_items_o2m">
            <li v-for="child in item.menu_items_o2m" :key="child.id">

              <template v-if="child.menu_items_o2m">
                {{ child.name }}

                <ul class="q-px-none q-mx-none">
                  <li v-for="grandchild in child.menu_items_o2m" :key="grandchild.id">
                    <router-link :to="`/${item.slug}/${child.slug}/${grandchild.slug}`">{{ grandchild.title }}
                    </router-link>
                  </li>
                </ul>
              </template>

              <router-link v-else :to="`/${item.slug}/${child.slug}`">{{ child.name }}</router-link>

            </li>
          </ul>

        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated } from 'vue'
import { usePageTransitionsStore } from 'src/stores/pageTransitions.js'

const store = usePageTransitionsStore()

const navItems = [
  {
    "id": 10,
    "name": "START PAGE",
    "slug": "startpage",
    "menu_items_o2m": [
      {
        "id": 1,
        "title": "Home",
        "slug": "home"
      }
    ]
  },
  {
    "id": 10,
    "name": "MAIN PAGE",
    "slug": "main",
    "menu_items_o2m": [
      {
        "id": 20,
        "name": "MAIN CONTENT",
        "slug": "main"
      },
      {
        "id": 6,
        "name": "SECTION ONE",
        "slug": "section-one",
        "menu_items_o2m": [
          {
            "id": 2,
            "title": "Item 101",
            "slug": "item-101"
          },
          {
            "id": 5,
            "title": "Item 102",
            "slug": "item-102"
          },
          {
            "id": 6,
            "title": "Item 103",
            "slug": "item-103"
          },
          {
            "id": 7,
            "title": "Item 104",
            "slug": "item-104"
          }
        ]
      },
      {
        "id": 26,
        "name": "SECTION TWO",
        "slug": "section-two",
        "menu_items_o2m": [
          {
            "id": 22,
            "title": "Item 201",
            "slug": "item-201"
          },
          {
            "id": 25,
            "title": "Item 202",
            "slug": "item-202"
          },
          {
            "id": 26,
            "title": "Item 203",
            "slug": "item-203"
          }
        ]
      }
    ]
  }
]

// console.log styles
const consColRouter = 'color: lightcoral; font-size: 14px; font-weight: bold;'

onMounted(() => {
  console.log('%cMENU_COMPONENT: onMounted invoked', consColRouter);
})

onActivated(() => {
  console.log('%cMENU_COMPONENT: onActivated invoked', consColRouter);
})

onDeactivated(() => {
  console.log('%cMENU_COMPONENT: onDeactivated invoked', consColRouter);
})

onBeforeUnmount(() => {
  console.log('%cMENU_COMPONENT: onBeforeUnmount invoked', consColRouter);
})

onUnmounted(() => {
  console.log('%cMENU_COMPONENT: onUnmounted invoked', consColRouter);
})

onBeforeUpdate(() => {
  console.log('%cMENU_COMPONENT: onBeforeUpdate invoked', consColRouter);
})

onUpdated(() => {
  console.log('%cMENU_COMPONENT: onUpdated invoked', consColRouter);
})
</script>
