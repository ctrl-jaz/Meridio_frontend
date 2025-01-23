<!-- <template>
    <v-main id="Background">
        <h1 align="center">Projects</h1>
        <v-spacer></v-spacer>
        <v-card align="center" elevated width="1000" height="200">
            <img src="/project-1-photo-v2.jpg" width="220" align="left">
            <h2>Clean Water for all</h2>
            <p>Help us raise money for a new pump in india</p>
            <br><br><br><br>
            <p color="black" >{{ donation }}/30,000usd</p>
        </v-card>
        <br>
        <v-card elevated width="900" height="200">
            <img src="" align="left">
            <title>dcnejnjec</title>
            <p>HTHTHTHT</p>
        </v-card>
    </v-main>
</template>
<script setup>
// import { onMounted } from 'vue';
// import { login } from './loginPage.vue';
// import { ref } from 'vue';
// import { userAuthStore } from "@/stores/auth";

// const userVal = ref(null);

//     onMounted(async () => {
//       userVal.value = await login(); // call the login function and assign result to user
//     });

//     //return { user };


</script>
<style>
#Background{
    background-color: #F5DBCB;
}
</style> -->

<template>
    <div id="Background">
        <h1 align="center">Projects</h1><br><br>
        <!-- Card 1 -->
<v-card align="left" padding-left="20" max-width="1200" elevated color="#dbbeab">
  <img src="/project-1-photo-v2.jpg" width="240" height="220" align="left">
  <v-card-text align="center">
    <div class="text-h6 font-weight-black">Water is life</div>
    <p>Help us raise money for a new pump in India</p>
    <div class="text-medium-emphasis">We look to buy a new water pump, providing water to more than 90 families in rural India</div>
  </v-card-text>
  <br><br>
  <v-row>
    <div >    {{ donation_total1 }}     of $3,000 raised</div>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-btn
        color="#7835ab"
        text="Donate"
        variant="text"
        @click="revealStates.card1 = true"
      >
        Donate
      </v-btn>
    </v-card-actions>
  </v-row>

  
  <v-expand-transition>
    <v-card
      v-if="revealStates.card1"
      class="position-absolute w-100"
      height="100%"
      style="bottom: 0;"
      color="#dbbeab"
    >
    <v-row>
      <v-card-text class="pb-0">
        <p class="text-h5">Donate to help over 100 children get access to clean drinking water</p>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-action class="pt-0">
        <v-btn
          color="#7835ab"
          variant="text"
          @click="revealStates.card1 = false"
        >
          X
        </v-btn>
    </v-card-action></v-row>
    <br><br><br><br><br><br>
    <v-form>
    <v-row>
        <v-text-field
  placeholder="Card Number"
  variant="outlined"
  density="compact"
  class="custom-text-field"
></v-text-field>
<v-text-field
  placeholder="code"
  variant="outlined"
  density="compact"
  class="custom-text-field"
></v-text-field>

<v-number-input 
icon="mdi-currency-usd"
placeholder="amount"
  class="custom-number-input"
  control-variant="stacked"
  v-model="newvalue"
></v-number-input>
<v-checkbox label="Send Confirmation Email"></v-checkbox>
       <v-spacer></v-spacer>    
       <v-card-actions>
        <v-btn
        background-color="#7835ab"
        color="#7835ab"
        text="Confirm Donation"
        @click="donation_total1 = donation_total1+newvalue;revealStates.card1 = false"
        >
        <!-- type="submit" -->
        Confirm Donation
        </v-btn>
      </v-card-actions>
    </v-row>
    </v-form>
    </v-card>
  </v-expand-transition>
</v-card>
<br><br>
<!-- Card 2 -->
<v-card  align="left" padding-left="20" max-width="1000" elevated color="#dbbeab">
  <img src="/project-2-photo.jpg" width="240" height="220" align="left">
  <v-card-text align="center">
    <div class="text-h6 font-weight-black">One book at a time</div>
    <p>Help us raise money for school books in Malawi</p>
    <div class="text-medium-emphasis">description</div><br><br><br><br>
  </v-card-text>
  <v-row>
    <div align="center">{{  donation_total2 }} of $50,000 raised</div>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-btn
        color="#8557a8"
        text="Donate"
        variant="text"
        @click="revealStates.card2 = true"
      >
        Donate
      </v-btn>
    </v-card-actions>
  </v-row>
  <v-expand-transition>
    <v-card
      v-if="revealStates.card2"
      class="position-absolute w-100"
      height="100%"
      style="bottom: 0;"
      color="#dbbeab"
    >    
    <v-row>
    <v-card-text class="pb-0">
      <p class="text-h5">Donate to buy school children textbooks and help them have a chance at a better future</p>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-action class="pt-0">
        <v-btn
          color="#7835ab"
          variant="text"
          @click="revealStates.card2 = false"
        >
          X
        </v-btn>
      
    </v-card-action></v-row>
    <br><br><br>
    <v-form>
    <v-row>
        <v-text-field
  placeholder="Card Number"
  variant="outlined"
  density="compact"
  class="custom-text-field"
></v-text-field>
<v-text-field
  placeholder="code"
  variant="outlined"
  density="compact"
  class="custom-text-field"
></v-text-field>

<v-number-input 
icon="mdi-currency-usd"
placeholder="amount"
  class="custom-number-input"
  control-variant="stacked"
  v-model="newvalue1"
></v-number-input>
<v-checkbox label="Send Confirmation Email"></v-checkbox>
       <v-spacer></v-spacer>    
       <v-card-actions><v-btn
        background-color="#7835ab"
        color="#7835ab"
        @click="donation_total2 = donation_total2+newvalue1;revealStates.card2 = false"
        text="Confirm Donation"
        >
        Confirm Donation
      </v-btn>
      <!-- type="submit" -->
      </v-card-actions>
    </v-row>
    </v-form>
    </v-card>
  </v-expand-transition>
</v-card>
<br>
</div>
  </template>
  <script>
  import { VNumberInput } from 'vuetify/labs/VNumberInput'
export default {
    components: {
        VNumberInput,
    },
  data: () => ({
    revealStates: {
      card1: false,
      card2: false,
    },
    donation_total1:0,
    donation_total2:55,
    newvalue: 0,
  }),
}
</script>
<style>
#Background{
    background-color: #F5DBCB;

}
.custom-text-field {
  height: 10px !important;
  width: 100px !important;
}
.custom-number-input {
  height: 10px; 
  width: 100px;
}

</style>