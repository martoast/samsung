<template>
  <v-layout column justify-center align-center>
    <v-flex sm8 md6>
      <v-btn color="red" to="/login">Logout</v-btn>
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
              label="title"
              name="title"
              type="text"
              v-model="Title"
            ></v-text-field>

            <v-text-field
              id="body"
              label="body"
              name="body"
              type="text"
              v-model="Body"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="Submit(Title, Body)">Push</v-btn>
        </v-card-actions>
      </v-card>

      <div>
        <v-card class="mx-auto" max-width="500">
          <v-list>
            <v-list-item-group v-model="model">
              <v-list-item v-for="(item, i) in Posts" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.title"></v-icon>
                </v-list-item-icon>
                <v-list-item-content id="result">
                  <v-list-item-title v-text="item.body"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      Title: "",
      Body: "",

      Posts: [],
      items: [
        {
          icon: "mdi-inbox",
          text: "Inbox"
        },
        {
          icon: "mdi-star",
          text: "Star"
        },
        {
          icon: "mdi-send",
          text: "Send"
        },
        {
          icon: "mdi-email-open",
          text: "Drafts"
        }
      ],
      model: 1
    };
  },

  mounted() {
    // this.storedPosts();
  },
  methods: {
    Submit(Title, Body) {
      // console.log(Title, Body);
      let shit = { title: Title, body: Body };
      let stringShit = JSON.stringify(shit);
      console.log(stringShit);
      // this.Posts.push(shit);
      if (process.browser) {
        localStorage.setItem("posts", stringShit);
        this.storedPosts(stringShit);
        // console.log(localStorage.getItem(Title));
      }

      // console.log(this.Posts);
    },
    storedPosts(posts) {
      if (process.browser) {
        console.log(posts);
      }
    }
  }
};
</script>
