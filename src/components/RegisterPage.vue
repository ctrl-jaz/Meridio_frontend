<!-- <template>
 
    <v-img class="mx-auto my-6" max-width="228" src="" ></v-img>
    <v-row justify="center">
    <v-col cols="12" lg="6" md="8" sm="10" >
      
      <v-card ref="form" rounded="xl" background-color="purple">

        <v-card-text>
          <v-text-field label="Full Name" placeholder="Your Name" ></v-text-field>
          <v-text-field label="Email" placeholder="example@myemail.com" required ></v-text-field>
          <v-text-field label="Address" placeholder="Antartica" required ></v-text-field>
          <v-text-field label="Phone" placeholder="000000000" required ></v-text-field>
          <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          label="Password"
          @click:append-inner="visible = !visible"
          ></v-text-field>
        </v-card-text>

        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn variant="text" to="/"> Cancel </v-btn>
          <v-spacer></v-spacer>           
          <v-btn color="primary" variant="text" > Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
-->
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
              <v-overlay scroll-strategy="block" persistent  v-model="overlay"  style="z-index: 1;">
                <v-row no-gutters>
                  <v-col cols="12" xs="0" md="8">
                      <v-container>
                    <div class="pa-4">
                            <div class="text-h4 text-md-h2 text-white font-weight-black">
                              Meridio
                            </div>
                            <div class="text-h4 text-md-h4 text-white font-weight-small">
                              Register
                            </div>
                          </div>
                        </v-container>
                  </v-col> 
  
                  <v-col cols="12" xs="2" md="4">
                    <v-card ref="form" rounded="xl" width="600" height="630">
                      <v-form>
          <v-card-text align="center">
            <v-text-field v-model="register_info.Name" max-height="200" placeholder="Name/Organization Name" rounded="xl"></v-text-field>
            <v-text-field type="email" v-model="register_info.email" placeholder="youremail@example.com" rounded="xl" :rules="emailRules"></v-text-field>
            <v-text-field v-model="register_info.country" placeholder="Country" rounded="xl"></v-text-field>
            <v-text-field type="tel" v-model="register_info.phone_number" placeholder="000000000" rounded="xl" required ></v-text-field>
            <v-text-field
            v-model="register_info.password"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            @click:append-inner="visible = !visible"
            rounded="xl"
            label="password"
            ></v-text-field>
            <v-text-field
            v-model="register_info.confirmpassword"
            label="password"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            @click:append-inner="visible = !visible"
            rounded="xl"
            required
            ></v-text-field>
          </v-card-text>
                      <v-btn class="mb-5" color="" size="large" block  @click="register()" href="/home"> Sign up </v-btn>
  
                      <v-card-text class="text-center">
                        Already have an account?<a class="text-darkgreen text-decoration-none" href="/"  >
                          Login <v-icon icon="mdi-chevron-right"></v-icon>
                        </a>
                      </v-card-text>
                    </v-form>
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
  const register_info = ref({
    Name:null,
    email:null,
    country:null,
    phone_number:null,
    password: null,
    confirmpassword: null
  })
  
  function register(){
    axios
      .post('http://127.0.0.1:8000/api/register', register_info.value)
      .then((response) => {
        // store token to be used through out the application  
        userStore.register(response.data)
        //redirect to home
        router.push({ name:   "home" })
      }).catch(error => {
        message.value = error.response.data.message
      })
  }
  </script>
  
  <style>
  /* #container-login{ */
  
  /* } */
  </style>