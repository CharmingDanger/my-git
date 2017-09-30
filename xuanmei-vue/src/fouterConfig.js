import Home from './components/Home.vue'
import Paiming from './components/Paiming.vue'
import Paoming from './components/Paoming.vue'
import Peson from './components/Peson.vue'


export default[
	{
		path:'/home',
		component:Home
	},
	{
		path:'/paiming',
		component:Paiming
	},
	{
		path:'/paoming',
		component:Paoming
	},
	{
		path:'/peson/:id',
		component:Peson
	},
	{ 
	    path: '/', 
	    redirect: '/home' 
	},
	{ 
	    path: '*', 
	    redirect: '/home' 
	}
]