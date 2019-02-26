<template>  
  	<div class="glavni">
  	<!--DIV EDIT PROFILE-->
		<div class="tridiv">
			<h4 class="tridiv-h4 m-t">{{profile.name}}</h4>
			<p class="editProfile">edit profile</p>
			<a href="edit-profile.html" class="svijetloSivi"> 
        	<span class="hyperspan"></span>
    		</a>
 	 </div>

	<!--MY QR-->	 
   		<div class="tridiv" @mouseover="currentImage = imageBlack" @mouseleave="currentImage = image">
			 <img class="centar" :src="currentImage"/> 
			 <nuxt-link :to="'profile/myqr/' + profile.id">
    		 <span class="hyperspan"></span>
			 </nuxt-link> 
  		</div>
  
	<!--CHANGE PICTURE-->
		<div class="tridiv">
			<!--<p class="change">change picture</p>-->
			<img class="centarblank" v-bind:src="imageUserBlank">
			<p>change picture</p>
			<a href="" class="svijetloSivi"> 
        	<span class="hyperspan"></span>
       	 </a>
    	</div>
		
	</div>

</template>

<script>
export default  {
  props: ['profile', 'id'],
  data(){
      return {
        image: 'images/my-qr.png',		
		imageDva: "images/qr-scan.png",
		imageBlackScan: "images/black-qr-scan.png",
		imageUserBlank: "images/blank.png",
		imageBlack: 'images/black-my-qr.png',
		currentImage: 'images/my-qr.png',
		currentImageScan: "images/qr-scan.png",
      }
           
    } 
};
</script>

<style>

</style>
