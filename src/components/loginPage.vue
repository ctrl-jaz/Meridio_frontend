<template>
<v-row>
  <v-col cols ='12'>
    <div class="hidden-md-and-up" style="overflow: hidden;">
      <v-card elevation="0">
        <v-row justify="center">
          <div style="overflow: hidden">
            <video poster="/Poster_img.png" src="/water-loginPG.mp4" height=auto muted loop autoplay style="
              margin-top: -10.5%;
              margin-bottom: 1.5%;
              margin-left: -900px;
              z-index: -500;
            "></video>
          </div>
        </v-row>
      </v-card>
    </div>  
    <div class="hidden-sm-and-down" style="margin-top: -80px">
        <v-card elevation="0">
          <v-row justify="center">
            <video poster="/Poster_img.png" width="100%" src="/water-loginPG.mp4" muted loop autoplay
              style="z-index: 1">
            </video>
            <v-overlay scroll-strategy="none" persistent  v-model="overlay"  style="z-index: 1;">
              <v-row no-gutters>
                <v-col cols="12" xs="0" md="8">
                <v-container>
                  <div class="pa-5">
                          <div class="text-h4 text-md-h2 text-white font-weight-black">
                            Meridio
                          </div>
                          <!-- <div class="text-h5 text-md-h4 text-white font-weight-thin mt-5">
                            Please Login
                          </div>   -->
                        </div>
                      </v-container>
                </v-col> 

                <v-col cols="4" xs="0" md="12">
                  <v-card class="mx-auto pa-12 pb-8" elevation="7" max-width="448" rounded="xl">
                    <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline" v-model="login_info.email" :rules="rules"></v-text-field>
              
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                      Password
                    </div>
                  
            <v-text-field 
            v-model="login_info.password"
                  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="visible ? 'text' : 'password'"
                  label="Password"
                  @click:append-inner="visible = !visible"
            ></v-text-field>
                  <router-link class="text-caption text-decoration-none text-blue" to="/forgotpassword"> Forgot login password?</router-link>
              
                    <v-btn class="mb-8" color="" size="large" block  @click="login()" > Log In </v-btn>

                    <v-card-text class="text-center">
                      Dont have an account?<a class="text-darkgreen text-decoration-none" href="/Register"  >
                        Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                      </a>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-overlay> 
          </v-row>
        </v-card>
    </div>
  </v-col>
</v-row>
</template>

<script setup>
  import { ref } from "vue";
  import axios from 'axios'
  import router from "@/router";
  import { userAuthStore } from "@/stores/auth";

const userStore 		= userAuthStore(); //store user log in data
const overlay = ref(true)
const visible = ref(false)
 const message = ref(null)
const login_info = ref({
  email:null,
  password: null
})

function login(){
   console.log(login_info.value);

  axios
    .post("http://127.0.0.1:8000/api/login", login_info.value)
    .then((response) => {
      // store token to be used through out the application
     userStore.login(response.data)

      //redirect to home
      router.push({ name:   "home" })
    }).catch(error => {
      message.value = error.response.data.message
    })
}
// const login = async () => {
//   try{
//    console.log(login_info.value);
//     const response = await axios.post("http://127.0.0.1:8000/api", login_info.value);
//     userStore.login(response.data)
//     console.log(response);
//     router.push({ name:   "home" })
// } catch (error) {
//   console.error(error);
//   message.value = error.response.data.message

// }
// };
// function login(){
//     axios
//       .post('http://127.0.0.1:8000/api/login', login_info.value)
      // .then((response) => {
      //   // store token to be used through out the application  
      //   userStore.register(response.data)
      //   //redirect to home
      //   router.push({ name:   "home" })
      // }).catch(error => {
      //   message.value = error.response.data.message
      // })
  // }

</script>

<style>
/* #container-login{ */

/* } */
</style>