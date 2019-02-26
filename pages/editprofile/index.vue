<template>
<section class="glavni">
<div class="container">
  
    <form v-on:reset="resetFields" v-on:submit.prevent="submitForm" class="form-inline">

   
          <input type="text" id="first-name" v-model.trim="firstName" placeholder="first name" v-model="firstName"/>
  
          <input type="text" id="last-name" v-model.trim="lastName" placeholder="last name"  v-model="lastName"/>
        
                      
          <input type="text" id="company" v-model.trim="company" placeholder="company"/>
     
                
          <input type="text" id="companyAdress" v-model.trim="companyAdress"  placeholder="company adress"/>
                  
          <input type="text" id="email" v-model.trim="email" placeholder="e-mail"/>
   
                     
          <input type="text" id="phone" v-model.trim="phone" placeholder="phone"/>
     
           
          <input type="text" id="website" v-model.trim="website" placeholder="website"/>
      
        
        <button type="reset" class="submit">reset</button>
        <br>
        <button type="submit" class="submit" v-bind:disabled="!formIsValid">submit change</button>
    
    </form>
</div>
</section>
</template>
<script>
export default {
	layout: 'home',
	asyncData(){
		return {
			firstName: "Sara",
			lastName: "Franjul"
		}
	},
	  computed: {
    fullName: {
      get: function() {
        if (this.firstName && this.lastName) {
          return this.firstName + ' ' + this.lastName;
        } else {
          return this.firstName || this.lastName;
        }
      },
      set: function(newFullName) {
        const names = newFullName.split(' ');

        if (names.length === 2) {
          this.firstName = names[0];
          this.lastName = names[1];
        }
        
        if (names.length <= 1) {
          this.firstName = names[0] || '';
          this.lastName = '';
        }
      }
    },
   
    formIsValid: function() {
      return this.firstName && this.lastName && this.email && this.purchaseAgreementSigned;
    }
  },
  watch: {
    specialRequests: function(newRequests, oldRequests) {
      if (newRequests.toLowerCase().includes('meet and greet') || 
          newRequests.toLowerCase().includes('meet-and-greet')) {
        this.ticketType = 'vip';
      }
    }
  },
  methods: {
    resetFields: function() {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.ticketQuantity = 1;
      this.ticketType = 'general';
      this.referrals = [];
      this.specialRequests = '';
      this.purchaseAgreementSigned = false;
    }
  }
}

</script>
<style scoped>
	.container {
  min-width: 100vh;
  min-height: 100vh;
  background-color: black;
}
@font-face {
  font-family: 'Hind Guntur';
  font-style: normal;
  font-weight: 400;
  src: local('Hind Guntur Regular'), local('HindGuntur-Regular'), url(https://fonts.gstatic.com/s/hindguntur/v4/wXKvE3UZrok56nvamSuJd_QtvXI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
  font-family: 'Hind Guntur';
  font-style: normal;
  font-weight: 600;
  src: local('Hind Guntur SemiBold'), local('HindGuntur-SemiBold'), url(https://fonts.gstatic.com/s/hindguntur/v4/wXKyE3UZrok56nvamSuJd_zymWc0ld0.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/** {
  margin: 0;
  padding: 0;
}*/

* {box-sizing: border-box;}
.form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  border: 1px #4B4A43; 
  border-radius: 4px;
  background-color: #4B4A43;
  color: #FDEC06;
  font-size: 20px; 
}


.submit {
  width: 20%;
  background-color: #FDEC06;
  font-family: "Hind Guntur";	
  color: #171717;
  font-size: 20px;
  padding: 8px 20px;
  margin: 10px 10px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px #4B4A43; 

}

.submit:hover {
  background-color: #4B4A43;
}

div {
  border-radius: 5px;
  padding: 10px;
}


.form-inline {  
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}


@media (max-width: 800px) {
  .form-inline input {
    margin: 10px 0;
  }
  
  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }


}
</style>

