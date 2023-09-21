const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    meta: {
      layoutKey: 'home'
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          layoutKey: 'home'
        },
      }
    ]
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      layoutKey: 'main'
    },
    children: [
      {
        path: '',
        name: 'main-page',
        component:  () => import('pages/MainPage.vue'),
        meta: {
          layoutKey: 'main'
        },
        children: [
          {
            path: '',
            name: 'catalog-start-page',
            component: () => import('pages/catalog/CatalogStart.vue'),
            meta: {
              layoutKey: 'main'
            },
          },
          {
            path: ':section',
            name: 'section',
            component: () => import('pages/catalog/CatalogOfWorks.vue'),
            meta: {
              layoutKey: 'main'
            },
          },
          {
            path: ':section/:content',
            name: 'section-content',
            component: () => import('pages/catalog/SectionContentPage.vue'),
            meta: {
              layoutKey: 'main'
            },
            children: {
              path:':detail',
              name: 'detail',
              component: () => import('pages/catalog/DetailPage.vue'),
              meta: {
                layoutKey: 'main'
              },
            }
          }
        ]
      }
    ]
  },
  {
    path: '/main/main',
    redirect: '/main'
  },
  {
    path: '/startpage/home',
    redirect: '/'
  },
  // Always leave this as last one, but you can also remove it
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('pages/PageNotFound.vue'),
    meta: {
      layout: () => import('layouts/StartpageLayout.vue')
    },
  }
]

export default routes

