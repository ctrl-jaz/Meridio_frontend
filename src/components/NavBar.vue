<template>
   
        <v-app-bar
          color="#8557a8"
          prominent>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
         <img src="../assets/Meridio-logo-website.png" a ref="/home"  id="logo">
  
          <v-spacer></v-spacer>
  
          <v-autocomplete :items="filteredList()" placeholder="Search projects..." class="searchbar" v-model="input" :flat="true" menu-icon="mdi-magnify" padding-top="13px" width="60" >
            <template v-slot:no-data><div id="error" >No results found!</div></template>
          </v-autocomplete>
          
  

          <v-menu min-width="200px" rounded >
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props">
              <v-avatar color="white" size="large"> <span class="text-h5" color="#c4443b">{{ user.name.charAt(0) }}</span> </v-avatar>
                </v-btn>
            </template>
            <v-card>
                <v-card-text background-color=#F5DBCB>
                    <div class="mx-auto text-center">
                        <v-avatar color="#c4443b" > <span class="text-h5">H</span> </v-avatar>
                        <h3>{{ user.name }}</h3>
                        <p class="text-caption mt-1"> {{ user.email }} </p>
                        <v-divider class="my-3"></v-divider>
                        <p>lang    en</p>
                        <v-divider class="my-3"></v-divider>
                        <v-btn variant="text" rounded @click="logout"> Logout </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-menu>
          
        </v-app-bar>
  
        <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
          color="#7EB77F"
        >
          <v-list>
            <v-btn variant="text" rounded to = "/aboutUs"> About us </v-btn>
            <v-btn variant="text" rounded to = "/Donate"> Donate to projects </v-btn>
            <v-btn variant="text" rounded to = "/Contact"> Contact us </v-btn>
            <v-btn variant="text" rounded to = "/How"> How to help</v-btn>
          </v-list>
        </v-navigation-drawer>
  
        
</template>
<script setup>
import router from "@/router";
import { ref } from 'vue';
import { userAuthStore } from "@/stores/auth";
// import { RouterLink } from "vue-router";
let input = ref("");
const projects = ["project1", "project2", "project3"];
function filteredList() {
  return projects.filter((projects) =>
    projects.toLowerCase().includes(input.value.toLowerCase())
  );
}
    
const drawer=ref(false) 
// const group=ref(null) 

const userStore = userAuthStore();
// const user = userStore.user

function logout() {
    userStore.logout();
    router.push({ name: "login" });
}
    // function group () {
    //       drawer.value = false
    //     }
  

  </script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

body {
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, */
    /* rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.project {
  cursor: pointer;
}

#error {
  color: rgb(231, 48, 15);
}

#logo{
  height: 77px;
  width:350px;
}

.searchbar{
  background-color: 0;
}
.notranslate {
  transform: none!important;
}
</style>