<template>
    <v-main  id="background">
        <img src="../assets/Meridio-logo-website.png" id="img" align="center" >
    <v-row justify="center">
    <v-col cols="12" lg="6" md="8" sm="10" >
      <v-card ref="form" rounded="xl">

        <v-card-text>
            <H1>We sent a Code to your email</H1>
          <v-text-field v-model="code" :rules="[onlyNumbers]" label="Code" placeholder="0 0 0 0 0 0" ></v-text-field>
          <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          label="New password"
          @click:append-inner="visible = !visible"
          ></v-text-field>
          <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
           label="Confirm new password"
           @click:append-inner="visible = !visible"
          ></v-text-field>
        </v-card-text>

        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn variant="text" to="/"> Cancel </v-btn>
          <v-spacer></v-spacer>           
          <v-btn color="primary" variant="text" to="/" > Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
    </v-main>
</template>
<script>
export default {
  data() {
    return {
      code: '',
      // visible:false
    }
  },
  methods: {
    onlyNumbers(value) {
      return /^[0-9]+$/.test(value);
    }
  }
}
</script>
<style>
#background{
  background-color: #F5DBCB;
}
#img{
    width:500px;
    height:100px ;
    margin:auto;
    padding: auto;
}
</style>