<template id="welcome">
  <!-- <v-main id="welcome"> -->
      <v-carousel>
        <v-carousel-item src="/photo_1_Meridio.jpg" cover></v-carousel-item>
  
        <v-carousel-item
          src="/photo_2_Meridio.jpg"
          cover
        ></v-carousel-item>
  
        <v-carousel-item
          src="/photo_3_Meridio.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>

      <!-- <template> -->
        <v-container fluid>
        <v-card>
        
        <p align:left color="black">Meridio is a Donation app and website making <br>it easier for anyone in need to recieve from anyone! Find out more at <RouterLink to="/aboutUs">About Us</RouterLink></p>
      
      </v-card>
    </v-container>
      <!-- </template> -->
    <!-- </v-main> -->
  </template>
  <style>
    #welcome{
      background-color: #F5DBCB;
    }

  </style>