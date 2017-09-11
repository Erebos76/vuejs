<template>
	<div>
		<h1>{{ msg }}</h1>
		<div>the message was changed {{ cnt }} times</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed : mapGetters({
			msg : 'getMessage',
			cnt : 'getCounter'
		})
	}
</script>
