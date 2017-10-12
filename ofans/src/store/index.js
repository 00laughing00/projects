import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		ShowPicture: [],
		topTitle:''

	},
	getters: {
		previewpicture(state){
			return state.ShowPicture;
		},
		gettitle(state){
			return state.topTitle;
		}


	},
	mutations: {
		replaceimgfile(state,imgfiles){
			state.ShowPicture=imgfiles
		},
		getTitle(state,title){
			state.topTitle = title;
		}


	},
	actions: {
		replaceimgfiles(context,imgfiles){
			context.commit('replaceimgfile', imgfiles);
		},
		getTitle(context,title){
			context.commit('getTitle',title);
		}
	}
})