import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CaiChan from '@/components/CaiChan'
import ZiNv from '@/components/ZiNv'
import JiCheng from '@/components/JiCheng'
import Team from '@/components/Team'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{path: '/',name: 'Home',component: Home},
		{path: '/CaiChan',name: 'CaiChan',component: CaiChan},
		{path: '/ZiNv',name: 'ZiNv',component: ZiNv},
		{path: '/JiCheng',name: 'JiCheng',component: JiCheng},
		{path: '/Team',name: 'Team',component: Team},
		{path: '/About',name: 'About',component: About},
		{path: '*',redirect: '/'}
	]
})
