import { INCREMENT_COUNTER, CHANGE_MSG } from './mutation_types'

export default {
	changeMessage({ commit }, message) {
		commit(CHANGE_MSG, message)
	},
	incrementCounter({ commit }) {
		commit(INCREMENT_COUNTER)
	},
	handleMessageInputChanges({ commit }, event) {
		commit(CHANGE_MSG, event.target.value)
		if (event.keyCode === 13) {
			commit(INCREMENT_COUNTER)
		}
	}
} 