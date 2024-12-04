<template>
    <v-footer_home
      class="text-center d-flex flex-column"
      position-fixed="bottom"
    id="footer"
      >
      <div>
        <v-btn
         v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          variant="text"

        ></v-btn>
      </div>
  
      <stro class="pt-0"/><div>
        <router-link to="/Contact"><strong>or contact us here</strong></router-link>
      </div>
  
      <v-divider></v-divider>
  
      <div>
        {{ new Date().getFullYear() }} — <strong>Meridio</strong>
      </div>
    </v-footer_home>
  </template>
  <script>
    export default {
      data: () => ({
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-snapchat',
          'mdi-instagram',
        ],
      }),
    }
  </script>
  <style>
    #footer{
        background-color: #8557a8;
    }
</style>