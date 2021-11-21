import Vue from "vue"
import VueRouter from "vue-router"
import Main from "../components/Main"
import Services from "../components/Services"
import About from "../components/About";
import Contacts from "../components/Contacts";
import Book from "../components/Book";
import Service from "../components/Service";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Main },
    { path: '/services', component: Services },
    { path: '/service/:id', component: Service },
    { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
    { path: '/book', component: Book },
]

const router = new VueRouter({
    routes
})

export default router