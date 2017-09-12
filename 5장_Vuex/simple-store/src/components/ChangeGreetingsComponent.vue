<template>
	<input :value='msg' @keyup='handleMessageInputChanges' >
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		computed :  mapGetters({
			msg : 'getMessage'
		}),
		methods : mapActions([ 'handleMessageInputChanges' ])
		
		// methods : mapActions([ 'changeMessage', 'incrementCounter' ])

		/* methods : {
			changeMsg(evt) {
				this.$store.dispatch('changeMessage', evt.target.value)
			}
		} */
	}
</script>
