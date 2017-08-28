import Home from './components/Home.vue'
import AboutUs from './components/AboutUs.vue'
import Shwhz from './components/Shwhz.vue'

export default{
	routes:[
		{path:'/home', component:Home},
		{path:'/aboutus', component:AboutUs},
		{path:'/shwhz', component:Shwhz},
		{path:'*', redirect:'/home'}
	]
}