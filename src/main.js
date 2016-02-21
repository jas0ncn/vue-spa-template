import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

// import views
import index from './views/index'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()

router.map({
    '/': {
        component: index,
        name: 'index'
    }
})

router.start(App, 'app')
