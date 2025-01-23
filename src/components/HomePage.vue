<template>
<div id="welcome">
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
        <v-container>
        <v-card id="toabt">
        
        <p align:left color="black">Meridio is a Donation website making <br>it easier for anyone in need to recieve from anyone! Find out more at <RouterLink to="/aboutUs">About Us</RouterLink></p>
      
      </v-card>
    </v-container>

 </div>
  </template>
  <style>
    #welcome{
      background-color: #F5DBCB;
    }
    #toabt{
      background-color: #cab5a8;
    }

  </style>