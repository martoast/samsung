<template>
  <div>
    <v-row justify="center">
      <h1>Login Form</h1>
    </v-row>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>
              <!-- <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    :href="source"
                    icon
                    large
                    target="_blank"
                    v-on="on"
                  >
                    <v-icon>mdi-code-tags</v-icon>
                  </v-btn>
                </template>
                <span>Source</span>
              </v-tooltip> -->
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Login"
                  name="login"
                  type="text"
                  v-model="Username"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  v-model="Password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="LoginUser(Username, Password)"
                to="/"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Username: "",
      Password: ""
    };
  },
  methods: {
    LoginUser(Username, Password) {
      if ((Username == "david.d") & (Password == "b2bSRT2020")) {
        console.log(Username, Password);
      } else {
        alert("Wrong info");
      }
    }
  }
};
</script>
