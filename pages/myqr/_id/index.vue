<template>
<section class="glavni">
<div class="container">
  	<!--prikazuje se moj izgenerirani qr-->
	<div class="tridivqr">
		<p id="centar" class="tridiv-h2 m-t">{{value}}</p>
			<qrcode-vue id="centar" :value="value" :size="200" level="H" background="#fdec06"></qrcode-vue>
		 <!--<img :src="images/zutiqr.png" class="centarqr">-->
	</div>
</div>
</section>
</template>
<script>
import QrcodeVue from 'qrcode.vue';

export default {
	layout: 'home',
	asyncData(context){
		return {
			value: "{'id':" + context.params.id + "}"
		}
	},	
	components: {
    	QrcodeVue
  	}
}
</script>
<style scoped>
	.container {
  min-width: 100vh;
  min-height: 100vh;
  background-color: #FDEC06;
}
</style>

