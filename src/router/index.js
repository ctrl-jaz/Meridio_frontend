import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/loginPage.vue'
import Register from '../components/RegisterPage.vue'
import Home from '../components/HomePage.vue'
import AboutUs from '@/components/aboutUs.vue'
import HowToJoin from '@/components/HowToJoin.vue'
import Contact from '@/components/ContactUs.vue'
import Donation from '@/components/DonationsPage.vue'
import forgotpassword from '@/components/forgotpassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutUs',
      name: 'About Us',
      component: AboutUs
    },
    {
      path: '/How',
      name: 'How to Join',
      component: HowToJoin
    },
    {
      path: '/Contact',
      name: 'Contact us',
      component: Contact
    },
    {
      path: '/Donate',
      name: 'Donations',
      component: Donation
    },
    {
      path: '/forgotpassword',
      name: 'Forgot Password',
      component: forgotpassword
    }
  ]
})

export default router
