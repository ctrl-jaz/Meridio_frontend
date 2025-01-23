<template>
    <div  id="about">
        <v-container padding-left="55px" padding-right="55px" padding-top="55px" margin-bottom="55px">
        <h1 align="center">Contact Us</h1>
        <v-row>
            
            <v-col>
                <p>You can call at - 0788384924664<br>Email at MeridioDonations@email.com<br> And follow us on Social media</p>
                <v-spacer></v-spacer>
            </v-col>
            <v-col>
                <img src="/photo_1_Meridio.jpg" class="contact-img">
                <v-spacer></v-spacer>
            </v-col>
            <v-col>
                <p>Or find a connection at a shelter near you!</p>
                <v-spacer></v-spacer>
            </v-col>
        </v-row>
    </v-container>
</div>
    </template>
    
<style>
#about{
    background-color: #F5DBCB}
.contact-img {
    height: 400px;
    width: 470px;
    object-fit: cover; /* Ensures the image scales without distortion */
    display: block; /* Ensures no inline rendering artifacts */
    margin: auto; /* Centers the image if needed */
}

</style>