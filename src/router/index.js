import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/views/footBar'
import Header from '@/views/headBar'
import Navigation from '@/views/navBar'
import Index from '@/views/Index'
import Article from'@/article/Article'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      components: {
        navigation: Navigation,
        header: Header,
        mainPage: Index,
        footer: Footer
      }
    },
      {
      path: '/article',
      name: 'Article',
      components: {
        navigation: Navigation,
        header: Header,
        mainPage: Article,
        footer: Footer
      }
    },
    {
      path: '*',
      name: 'others',
      redirect: '/index'
    }
  ]
})
