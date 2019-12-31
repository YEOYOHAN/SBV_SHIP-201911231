import Vue from 'vue'
import Vuex from 'vuex'
import common from '@/store/modules/common'
import students from '@/store/modules/students'
import admin from '@/store/modules/admin'
import article from '@/store/modules/article'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		common,
		students,
		article,
		admin
	},
	strict: true
})