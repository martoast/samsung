import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // [
    //   '@nuxtjs/firebase',
    //   {
    //     config: {
    //       development: {
    //         apiKey: "AIzaSyB8TmzFGay-sxch4Y9WHXmhAaKlUYYBvf8",
    //         authDomain: "samsung-fc1e8.firebaseapp.com",
    //         databaseURL: "https://samsung-fc1e8.firebaseio.com",
    //         projectId: "samsung-fc1e8",
    //         storageBucket: "samsung-fc1e8.appspot.com",
    //         messagingSenderId: "712277440735",
    //         appId: "1:712277440735:web:be1bd020d43632190fd16a",
    //         measurementId: "G-01MQTN9JJE"

    //       },
    //       services: {
    //         firestore: true
    //       },
    //       production: {
    //         apiKey: "AIzaSyB8TmzFGay-sxch4Y9WHXmhAaKlUYYBvf8",
    //         authDomain: "samsung-fc1e8.firebaseapp.com",
    //         databaseURL: "https://samsung-fc1e8.firebaseio.com",
    //         projectId: "samsung-fc1e8",
    //         storageBucket: "samsung-fc1e8.appspot.com",
    //         messagingSenderId: "712277440735",
    //         appId: "1:712277440735:web:be1bd020d43632190fd16a",
    //         measurementId: "G-01MQTN9JJE"
    //       }
    //     },
    //     customEnv: false,
    //     onFirebaseHosting: false,
    //     services: {
    //       auth: {
    //         persistence: 'local',
    //         initialize: {
    //           onAuthStateChangedMutation: "SET_AUTH_USER",
    //           onAuthStateChangedAction: null,
    //         },
    //         ssr: {
    //           // !! NEVER deploy a service account file to github or to a publicly accessible folder on your server !!
    //           credential: '~/assets/firebase/serviceAccount.json',

    //           // Experimental Feature, use with caution.
    //           serverLogin: {
    //             sessionLifetime: 60 * 60 * 1000, // one hour
    //             loginDelay: 50 // minimal recommended delay
    //           }
    //         }
    //       },
    //       firestore: true,
    //       functions: {
    //         location: 'us-central1', // Default
    //         emulatorPort: 12345
    //       },
    //       storage: true,
    //       realtimeDb: true,
    //       performance: true,
    //       analytics: true,
    //       remoteConfig: {
    //         settings: {
    //           fetchTimeoutMillis: 60000, // Default
    //           minimumFetchIntervalMillis: 43200000 // Default
    //         },
    //         defaultConfig: {
    //           welcome_message: "Welcome"
    //         }
    //       },
    //       messaging: {
    //         createServiceWorker: true
    //       }
    //     }
    //   }
    // ]
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
