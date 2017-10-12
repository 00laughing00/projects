import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Main from '@/components/pages/main'
import Trailers from '@/components/pages/trailers'
import Circle from '@/components/pages/circle'
import Dynamic from '@/components/pages/dynamic'
import Mines from '@/components/pages/mine'
import Login from '@/components/ResginLogin/login'
import Set from '@/components/mine/set'
import ChangePwd from '@/components/mine/changePwd'
import Modifyphone from '@/components/mine/modifyphone'
import StarIdentify from '@/components/mine/starIdentify'
import Feedback from '@/components/mine/feedback'
import Aboutme from '@/components/mine/aboutme'
import Mine from '@/components/pages/mine'
import Search from '@/components/pages/search'
import Movie from '@/components/pages/search/movie'
import People from '@/components/pages/search/people'
import Actor from '@/components/pages/search/movie/actor'
import MovieTitle from '@/components/pages/search/movie/movie-title'
import Role from '@/components/pages/search/movie/role'
import Nickname from '@/components/pages/search/people/nickname'
import IdNum from '@/components/pages/search/people/idNum'
import Only from '@/components/pages/search/people/only'
import Detail from '@/components/pages/detail/detail'
import Comment from '@/components/pages/detail/comment'
import Introducte from '@/components/pages/detail/introducte'
import Selection from '@/components/pages/detail/selection'
import Resgin from '@/components/ResginLogin/resgin'
import Yzpass from '@/components/ResginLogin/yzpass'
import Forgotpass from '@/components/ResginLogin/forgotpass'

import Dynamiccomment from '@/components/dynamicComment/comment'
import Mycomment from '@/components/dynamicComment/mycomment/mycomment'
import Letter from '@/components/dynamicComment/letter'
import Dialog from '@/components/dynamicComment/dialog'
import Systeminfo from '@/components/dynamicComment/systeminfo'
import Minenick from '@/components/mine/nick'
import Minesign from '@/components/mine/sign'
import Aboutofan from '@/components/mine/aboutofan'
import Setarea from '@/components/mine/setarea'

import Circleindex from "@/components/circle/index"
import Circlecont from "@/components/circle/circlecont"
import Haircircle from "@/components/circle/haircircle"
import Reviewimages from "@/components/circle/reviewimages"

import ReplyAll from '@/components/pages/detail/reply-all'

Vue.use(Router)

export default new Router({

	routes: [{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/main',
			name: 'main',
			component: Main,
			redirect: '/main/trailers',
			children: [{
					path: 'trailers',
					name: 'trailers',
					component: Trailers
				},
				{
					path: 'circle',
					name: 'circle',
					component: Circle,
					redirect: '/main/circle/circleindex',
					children:[{
						path: 'circleindex',
						name: 'circleindex',
						component: Circleindex
					},
					{
						path: 'circlecont',
						name: 'circlecont',
						component: Circlecont
					},
					{
						path: 'haircircle',
						name: 'haircircle',
						component: Haircircle
					},
					{
						path: 'reviewimages',
						name: 'reviewimages',
						component: Reviewimages
					}
					]
				},
				{
					path: 'dynamic',
					name: 'dynamic',
					component: Dynamic
				},
				{
					path: '/mine',
					name: 'mine',
					component: Mine
				}
			]
		},
		{
			path: '/Login',
			name: 'Login',
			component: Login
		},
		{
			path: '/resgin',
			name: 'resgin',
			component: Resgin
		},
		{
			path: '/yzpass',
			name: 'yzpass',
			component: Yzpass

		},
		{
			path: '/forgotpass',
			name: 'forgotpass',
			component: Forgotpass

		},
		{
			path: '/Set',
			name: 'Set',
			component: Set
		},
		{
			path: '/ChangePwd',
			name: 'ChangePwd',
			component: ChangePwd
		},
		{
			path: '/Modifyphone',
			name: 'Modifyphone',
			component: Modifyphone
		},
		{
			path: '/starIdentify',
			name: 'StarIdentify',
			component: StarIdentify
		},
		{
			path: '/Feedback',
			name: 'Feedback',
			component: Feedback
		},
		{
			path: '/Aboutme',
			name: 'Aboutme',
			component: Aboutme
		},
		{
			path: '/search',
			name: 'search',
			component: Search,
			redirect: '/search/movie',
			children: [{
					path: '/search/movie',
					name: 'movie',
					component: Movie,
					redirect: '/search/movie/title',
					children: [{
							path: 'actor',
							name: 'actor',
							component: Actor,
						},
						{
							path: 'title',
							name: 'title',
							component: MovieTitle
						},
						{
							path: 'role',
							name: 'role',
							component: Role
						}
					]
				},
				{
					path: 'people',
					name: 'people',
					component: People,
					redirect: '/search/people/idnum',
					children: [{
							path: 'nickname',
							name: 'nickname',
							component: Nickname,
						},
						{
							path: 'idnum',
							name: 'idNum',
							component: IdNum
						},
						{
							path: 'only',
							name: 'only',
							component: Only
						}
					]
				}
			]
		},
		{
			path: '/detail',
			name: 'detail',
			component: Detail,
			redirect: '/detail/comment',
			children: [{
					path: 'comment',
					name: 'comment',
					component: Comment
				},
				{
					path: 'introducte',
					name: 'introducte',
					component: Introducte
				},
				{
					path: 'selection',
					name: 'selection',
					component: Selection
				}
			]
		},
		{
			path: '/dynamiccomment',
			name: 'dynamiccomment',
			component: Dynamiccomment,
			redirect:'/dynamiccomment/mycomment',
			children: [{
				path: 'mycomment',
				name: 'mycomment',
				component: Mycomment,
			}]

		},
		{
			path: '/letter',
			name: 'letter',
			component: Letter,
		},
		{
			path: '/dialog',
			name: 'dialog',
			component: Dialog,
		},
		{
			path: '/systeminfo',
			name: 'systeminfo',
			component: Systeminfo,
			
		},
		{
			path: '/minenick',
			name: 'minenick',
			component: Minenick,
			
		},
		{
			path: '/minesign',
			name: 'minesign',
			component: Minesign,
			
		},
		{
			path: '/aboutofan',
			name: 'aboutofan',
			component: Aboutofan,
			
		},
		{
			path: '/setarea',
			name: 'setarea',
			component: Setarea,
			
		},
	   {
	        path: '/replyall',
	        name: 'replyall',
	        component: ReplyAll
	    }
	]

})