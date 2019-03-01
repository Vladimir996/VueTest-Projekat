import Home from './components/home/Home.vue'
import About from './components/about/About.vue'
import Work from './components/work/Work.vue'
import Contact from './components/contact/Contact.vue'


export const routes =[

    {path: '', component: Home},
    {path: '/about', component: About},
    {path: '/work', component: Work},
    {path: '/contact', component: Contact}
]