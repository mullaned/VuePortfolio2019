<template>
  <v-card id="projects">
    <v-card-text>
      <h1 class="text-xs-center">Projects</h1>
      <h3 class="text-xs-center">I'm working on</h3>
    </v-card-text>

    <v-container>
      <v-layout justify-center row wrap fill-height>
        <v-flex d-flex xs12 sm6 md3 v-for="(data,index) in projectData" :key="index">
          <div class="card">
            <div class="card__side card__side--front">
              <v-img :src="data.imageLink" aspect-ratio height="250" contain></v-img>
            </div>

            <v-card color="blue-grey lighten-3 card__side card__side--back card__side--back-1" dark>
              <v-card-text primary class="title text-md-center text-xs-center">{{data.title}}</v-card-text>
              <v-layout row justify-center>
                <v-dialog v-model="dialog" width="80%">
                  <v-btn slot="activator" round color="blue lighten-1" dark>Project Info</v-btn>
                  <v-card id="project">
                    <v-card-text>
                      <h1 class="text-xs-center">{{data.title}}</h1>
                      <h3 class="text-xs-center">{{data.subtitle}}</h3>
                    </v-card-text>

                    <v-container fluid grid-list-md>
                      <v-layout align-space-around justify-center row fill-height>
                        <v-flex d-flex xs12 sm6 md6>
                          <v-img :src="data.imageLink" aspect-ratio height="300" contain></v-img>
                        </v-flex>
                      </v-layout>
                    </v-container>

                    <v-container fluid grid-list-md>
                      <v-layout align-space-around justify-center row fill-height>
                        <v-flex d-flex xs12 sm6 md6>
                          <v-card color="blue-grey lighten-3" dark>
                            <v-card-title primary class="title">Project Info:</v-card-title>
                            <v-card-text>{{ data.info }}</v-card-text>

                            <v-layout align-center>
                              <v-flex xs12 sm4 text-xs-center>
                                <div>
                                  <a v-if="data.githubLink" :href="data.githubLink" target="_blank">
                                    <v-btn round color="blue lighten-1">Github Link</v-btn>
                                  </a>
                                  <a
                                    v-if="data.projectLink"
                                    :href="data.projectLink"
                                    target="_blank"
                                  >
                                    <v-btn round color="blue lighten-1">View Project</v-btn>
                                  </a>
                                  <!-- <router-link to="/#projects"><v-btn round color="blue lighten-1">Projects List</v-btn></router-link> -->
                                </div>
                              </v-flex>
                            </v-layout>
                          </v-card>
                        </v-flex>
                      </v-layout>

                      <v-layout align-space-around justify-center row fill-height>
                        <v-flex d-flex xs12 sm6 md6>
                          <v-tabs color="blue lighten-1" dark slider-color="cyan accent-1">
                            <v-tab ripple>Features</v-tab>
                            <v-tab ripple>Technologies</v-tab>
                            <v-tab-item>
                              <v-card flat>
                                <v-card-text
                                  v-for="(feature, index) in data.features"
                                  :key="index"
                                >{{ feature }}</v-card-text>
                              </v-card>
                            </v-tab-item>
                            <v-tab-item>
                              <v-card flat>
                                <v-card-text
                                  v-for="(skill, index) in data.skills"
                                  :key="index"
                                >{{ skill }}</v-card-text>
                              </v-card>
                            </v-tab-item>
                          </v-tabs>
                        </v-flex>
                      </v-layout>
                    </v-container>

                    <v-container fluid grid-list-md>
                      <v-layout align-space-around justify-center row fill-height>
                        <v-flex xs10>
                          <v-card>
                            <v-img
                              :src="data.screenshotLink"
                              position="center center"
                              class="grey darken-4"
                            ></v-img>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-dialog>
              </v-layout>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  // mounted() {
  //   fetch('https://api.myjson.com/bins/annlu')
  //   .then((res) => {
  //     // console.log(res.json());
  //     return res.json();
  //   })
  //   .then((data) => {
  //     this.projectData = data;
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  // },
  data () {
    return {
      projectDataJSON: null,
      projectData: [
        {
          id: 1,
          imageLink: require('../assets/img/header/screens/personalproject-min.jpg'),
          title: 'Personal Portfolio',
          skills: ['HTML / CSS', 'JavaScript', 'Vue', 'Vuetify', 'Vue Router'],
          subtitle: 'Personal Portfolio Site',
          info:
            'The aim of this project is to have a central location featuring my projects, my skills and contact details',
          features: [
            'Single page design with additional Project Details pages',
            'Responsive Design',
            'Vue App',
            'Components'
          ],
          projectLink: 'http://www.davem.info',
          screenshotLink: require('../assets/img/projects/personal.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: ''
        },
        {
          id: 2,
          imageLink: require('../assets/img/header/screens/lightxproject-min.jpg'),
          title: 'Light Explorers',
          skills: ['HTML / CSS', 'JavaScript', 'Angular JS', 'PHP'],
          subtitle: 'COMMERCIAL PHOTOGRAPHY WEBSITE',
          info:
            'The aim of this project is to deliver a responsive photography site highlighting the available services and displaying recent work. There are multiple contact options and integration with social accounts',
          features: [
            'Javascript Pre-loader',
            'Angular Template Routing',
            'Lightbox gallery',
            'PHP form validation'
          ],
          projectLink: 'https://www.lightexplorers.net',
          screenshotLink: require('../assets/img/projects/lightexplorers.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: ''
        },
        {
          id: 3,
          imageLink: require('../assets/img/header/screens/designxproject-min.jpg'),
          title: 'Design Explorers',
          skills: ['HTML / CSS', 'JavaScript', 'PHP'],
          subtitle: 'WEB DESIGN BUSINESS SITE',
          info:
            'The aim of this project was to create a site to develop web design business opportunities. In addition to my own personal projects I am developing branding, product and personal sites for clients',
          features: [
            'Single page design',
            'Video Banner',
            'PHP form validation',
            'animations'
          ],
          projectLink: 'https://designexplorers.net/',
          screenshotLink: require('../assets/img/projects/designx.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: ''
        },
        {
          id: 4,
          imageLink: require('../assets/img/header/screens/dashboardproject-min.jpg'),
          title: 'Data Visualisation',
          skills: ['HTML / CSS', 'JavaScript', 'Python', 'Flask', 'Mongo DB'],
          subtitle: 'VISUALISING DATA FROM A MONGO DATEBASE',
          info:
            'The aim of this project is to visualise data from a large data-set into responsive interactive graphs and charts.  Note: This project is hosted for free on Heroku and the data-set is large so it may take some time to load',
          features: ['Graphs', 'Pie Charts', 'Bar Charts', 'Mongo Database'],
          projectLink: 'https://schooldonationsvisual.herokuapp.com/',
          screenshotLink: require('../assets/img/projects/datavis.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: ''
        },
        {
          id: 5,
          imageLink: require('../assets/img/header/screens/eventguidewebproject-min.jpg'),
          title: 'Event Guide Web App',
          skills: [
            'HTML / CSS',
            'JavaScript',
            'Python',
            'Flask',
            'Mongo DB',
            'API'
          ],
          subtitle: 'EVENT GUIDE DISPLAYING DATA FROM MULTIPLE SOURCES',
          info:
            "This Python/Flask project uses a Mongo Database of 1000's of events across 18 cities and additional events from the Eventbrite API. The events are filtered based on date, location and venue and displayed to the user depending on their choices. The site has been optimized for use on a mobile web browser and responsive for desktop use. Routing is handled by flask, 6 html templates are used to deliver over 200 pages depending on the users choices",
          features: [
            'Responsive Design',
            'Flask template routing',
            'Data Filtering'
          ],
          projectLink: 'https://eventsguide.herokuapp.com/',
          screenshotLink: require('../assets/img/projects/eventguideweb.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: ''
        },
        {
          id: 6,
          imageLink: require('../assets/img/header/screens/nexus5-eventguide-min.jpg'),
          title: 'Event Guide Mobile App',
          skills: [
            'HTML / CSS',
            'JavaScript',
            'Python',
            'Flask',
            'Mongo DB',
            'API'
          ],
          subtitle: 'NATIVE ANDROID APP FOR THE EVENT GUIDE',
          info:
            "This Python/Flask project uses a Mongo Database of 1000's of events across 18 cities and additional events from the Eventbrite API. The events are filtered based on date, location and venue and displayed to the user depending on their choices. Routing is handled by flask, 6 html templates are used to deliver over 200 pages depending on the users choices. The native app is available to download from the Google Play Store",
          features: [
            'Single page design with additional Project Details pages',
            'video banner'
          ],
          projectLink:
            'https://play.google.com/store/apps/details?id=com.eventguide.helloworld&hl=en',
          screenshotLink: require('../assets/img/projects/eventguideweb.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: ''
        },
        {
          id: 7,
          imageLink: require('../assets/img/header/screens/djangofullstackproject-min.jpg'),
          title: 'Djanjo Full Stack',
          skills: ['HTML / CSS', 'JavaScript', 'Python', 'Django', 'SQL'],
          subtitle: 'DJANGO PROJECT',
          info:
            'The focus of this Django project is on the backend with account management, content management and payment integration. On the front-end it is a premium news site with a pay-wall to access the content. Only users that have signed up with their payment information are able to access the content. There is a product catalogue with payment options, a contact and commenting system, a forum for user discussion and user account management.  Note: If you would like to create a account you can use the test Credit card details. The Credit Card number is 4242 4242 4242 4242 with any security code and future date',
          features: [
            'Account Managment',
            'Blog',
            'Polls',
            'Flatpages',
            'Contact System',
            'Disqus Comments integration',
            'Paypal and Stripe payment integration',
            'Product Catalogue',
            'Forum'
          ],
          projectLink: 'https://wearesocialtest.herokuapp.com/',
          screenshotLink: require('../assets/img/projects/djangofullstack.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: ''
        },
        {
          id: 8,
          imageLink: require('../assets/img/header/screens/drumkitproject-min.jpg'),
          title: 'Drum Kit',
          skills: ['HTML / CSS', 'JavaScript'],
          subtitle: 'INTERACTIVE DRUM KIT',
          info:
            'This interactive Drum Kit allows you to play the drums using your keyboard.',
          features: ['Single page design', 'Animations'],
          projectLink: 'https://designexplorers.net/DrumKit/index.html',
          screenshotLink: require('../assets/img/projects/drumkit.jpg'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: ''
        },
        {
          id: 9,
          imageLink: require('../assets/img/header/screens/dicegameproject-min.jpg'),
          title: 'Dice Game',
          skills: ['HTML / CSS', 'JavaScript'],
          subtitle: 'TWO PLAYER DICE GAME',
          info:
            'In this game players take turns rolling dice trying to be the first player to get to a score of 100. If a player rolls a 1 their current score is is reset to 0. If they use hold their current score is banked and the other player gets a turn.',
          features: ['Single page design', 'Animations'],
          projectLink: 'https://designexplorers.net/DiceGame/index.html',
          screenshotLink: require('../assets/img/projects/dicegame.jpg'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/DiceGame'
        },
        {
          id: 18,
          imageLink: require('../assets/img/header/screens/bitcoin-ticker-screen-min.jpg'),
          title: 'Bitcoin Ticker',
          skills: ['HTML/CSS', 'JavaScript'],
          subtitle: 'XHR, Fetch, jQuery and Axios request to a API',
          info:
            'This app uses XHR, Fetch, jQuery and Axios methods to get the current price of Bitcoin from the Coinbase API.',
          features: ['XHR', 'Fetch', 'jQuery', 'Axios'],
          projectLink:
            'http://bitcoin-ticker.s3-website-eu-west-1.amazonaws.com/',
          screenshotLink: require('../assets/img/projects/bitcoin-ticker.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/bitcoin-ticker'
        },
        {
          id: 19,
          imageLink: require('../assets/img/header/screens/random-user-screen-min.jpg'),
          title: 'Random User Generator',
          skills: ['HTML/CSS', 'JavaScript'],
          subtitle: 'Get a random users info using the Fetch method',
          info:
            'Clicking the button will request a random user from the API using fetch, their details will be displayed.',
          features: ['Fetch'],
          projectLink:
            'http://random-user-gen.s3-website-eu-west-1.amazonaws.com/',
          screenshotLink: require('../assets/img/projects/random-user-gen.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/random-user-gen'
        },
        {
          id: 10,
          imageLink: require('../assets/img/header/screens/budgetappproject-min.jpg'),
          title: 'Budget App',
          skills: ['HTML / CSS', 'JavaScript'],
          subtitle: 'MODULAR JAVASCRIPT BUDGET APP',
          info:
            'This Budget app uses the modular design. I have three controllers, the budget controller which handles the app data and calculations, the UI controller which is handles updates to the UI and the app controller which handles the interactions between controllers. Each controller has a private mermory space thanks to the IIFE implementation. Only necessary functions are exposed to the public.',
          features: ['Private Controllers', 'Single Page Design'],
          projectLink: 'https://designexplorers.net/BudgetApp/index.html',
          screenshotLink: require('../assets/img/projects/budgetapp.jpg'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/BudgetApp'
        },
        {
          id: 11,
          imageLink: require('../assets/img/header/screens/vuestockappproject-min.jpg'),
          title: 'Vue Stock Trader',
          skills: ['HTML / CSS', 'JavaScript', 'Vue JS'],
          subtitle: 'VUE STOCK TRADING APP',
          info:
            'The Vue stock trading app allows the use to buy and sell stocks. The stock prices change when the user ends the trading day. The user can save their stock portfolio to a firebase database and reload the portfolio when they come back to the app.',
          features: [
            'Components',
            'Routes',
            'Vuex',
            'Annimations / Transitions',
            'Firebase Database'
          ],
          projectLink:
            'http://vuejs-stockapp-deploy.s3-website-eu-west-1.amazonaws.com/',
          screenshotLink: require('../assets/img/projects/vueStock.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/VueStockApp'
        },
        {
          id: 12,
          imageLink: require('../assets/img/header/screens/vueurlappproject-min.jpg'),
          title: 'Vue URL Shortener',
          skills: ['HTML / CSS', 'JavaScript', 'Vue JS'],
          subtitle: 'VUE URL SHORTENER APP',
          info:
            'The Vue Url Shortener allows you to convert a url to a shorter version using the Google Url shortener. The inputed url is sent to the API service to shorten it and the result is displayed to the user. The user can also input a shortened url and expand the url to the full version.',
          features: ['Components', 'Vuex', 'Google Shortener API'],
          projectLink:
            'http://vue-url-shortener.s3-website-eu-west-1.amazonaws.com/#/',
          screenshotLink: require('../assets/img/projects/vueUrl.jpg'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/VueUrlShortener'
        },
        {
          id: 13,
          imageLink: require('../assets/img/header/screens/vuetranslateappproject-min.jpg'),
          title: 'Vue Translator',
          skills: ['HTML / CSS', 'JavaScript', 'Vue JS'],
          subtitle: 'VUE TRANSLATION APP',
          info:
            'The Vue translator allows you to translate an English input to any of the 6 different languages.',
          features: ['Components', 'Yanex API'],
          projectLink:
            'http://vue-translator.s3-website-eu-west-1.amazonaws.com/#/',
          screenshotLink: require('../assets/img/projects/vuetranslator.jpg'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/VueTranslator'
        },
        {
          id: 14,
          imageLink: require('../assets/img/header/screens/json-shop-screen-min.jpg'),
          title: 'Node Restful API',
          skills: ['Node', 'JavaScript', 'Restful API'],
          subtitle: 'CUSTOM RESTFUL API',
          info:
            'Custom Restful API that allows for user signup, login.  POST, GET, PATCH and DELETE options.  Protected routes for orders endpoint.  Mongo Atlas database use to store data.',
          features: [
            'Express',
            'Morgan',
            'Body Parser',
            'Mongoose',
            'Bcrypt',
            'JWT Authorization'
          ],
          projectLink: '',
          screenshotLink: require('../assets/img/projects/json-shop.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/Node_REST_API'
        },
        {
          id: 20,
          imageLink: require('../assets/img/header/screens/todo-list-app-min.jpg'),
          title: 'Node Mongo Todo App',
          skills: ['Node', 'JavaScript', 'Restful API'],
          subtitle: 'Todo App using API requests',
          info:
            'This todo list app is made using a node/Mongo back-end for the API and a front-end that will send the ajax requests to the different endpoints to update the API.',
          features: ['Express', 'Body Parser', 'Mongoose', 'Ajax'],
          projectLink: '',
          screenshotLink: require('../assets/img/projects/todo-list-app.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/todo-rest-api'
        },
        {
          id: 15,
          imageLink: require('../assets/img/header/screens/vue-auth-project-min.jpg'),
          title: 'Axios Auth Validation',
          skills: ['Vue', 'JavaScript'],
          subtitle: 'FIREBASE AUTHENTICATION, FORM VALIDATION',
          info:
            'Using Axios and Firebase Authentication to register users to a firebase database',
          features: ['Vuex', 'Vuelidate', 'Axios'],
          projectLink: 'http://axios-auth.s3-website-us-east-1.amazonaws.com',
          screenshotLink: require('../assets/img/projects/vue-auth.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/vue-auth-validation'
        },
        {
          id: 16,
          imageLink: require('../assets/img/header/screens/movie-listings-project-min.jpg'),
          title: 'Movie Listings API',
          skills: ['Vue', 'JavaScript', 'Vuetify'],
          subtitle: 'FILTER LASTEST MOVIE LISTINGS',
          info:
            'The latest movies from the TMDb API are retrieved and displayed in order of popularity.  The movies can be filtered based on genre or the movies rating using the min rating slider.  The genres listed are dynamic and only contain genres of the movies shown.',
          features: ['Axios', 'Vuetify', 'Filters'],
          projectLink:
            'http://movie-listings.s3-website-us-east-1.amazonaws.com',
          screenshotLink: require('../assets/img/projects/movie-listings.jpg'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/zone-project'
        },
        {
          id: 17,
          imageLink: require('../assets/img/header/screens/css-flex-min.jpg'),
          title: 'CSS Flexbox Layout',
          skills: ['CSS', 'Flexbox'],
          subtitle: 'RESPONSIVE LAYOUT USING FLEXBOX',
          info:
            'The layout can be adapted for quick reuse as landing/info pages for clients',
          features: ['Flexbox'],
          projectLink: 'http://css-flexbox.s3-website-eu-west-1.amazonaws.com',
          screenshotLink: require('../assets/img/projects/css-flexbox.jpg'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/CSS-flexbox-layout'
        },
        {
          id: 21,
          imageLink: require('../assets/img/header/screens/boot4-min.jpg'),
          title: 'Bootstrap 4 Sandbox',
          skills: ['HTML', 'CSS', 'Bootstrap 4'],
          subtitle: 'CUSTOM BOOTSTRAP 4 SANDBOX',
          info: 'Sandbox containing the main boostrap features',
          features: ['Bootstrap'],
          projectLink:
            'http://bootstrap4-sandbox.s3-website-eu-west-1.amazonaws.com/',
          screenshotLink: require('../assets/img/projects/boot4.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/bootstrap4-sandbox'
        },
        {
          id: 22,
          imageLink: require('../assets/img/header/screens/react-axios-min.jpg'),
          title: 'React HTTP Requests',
          skills: ['HTML', 'CSS', 'React'],
          subtitle: 'Axios React App Requests',
          info: 'React app using axios to pull data from a API, create POST and DELETE requests',
          features: ['React', 'Axios'],
          projectLink:
            'http://react-http-request.s3-website-us-east-1.amazonaws.com/',
          screenshotLink: require('../assets/img/projects/react-axios-screen.png'),
          previousProjectLink: '',
          nextProjectLink: '',
          githubLink: 'https://github.com/mullaned/react-http-request'
        }
      ]
    }
  }
}
</script>

<style lang="scss"  scoped>
.title-area {
  background-color: white;
}

#projects {
  background-color: #fff;
  padding: 25px 0 50px 0;
}

img {
  width: 100%;
}

.card-text {
  color: white;
  text-align: center;
  vertical-align: middle;
}

.card {
  perspective: 1500px;
  -moz-perspective: 1500px;
  border-style: none;
  position: relative;
  height: 250px;

  &__side {
    background-color: grey;
    height: 150px;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;

    &--front {
      background-color: #fff;
    }

    &--back {
      transform: rotateY(180deg);
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(#000, 0.15);
      //   height: 150px;
      margin-top: 40px;
      margin-left: 40px;
      width: 80%;

      &-1 {
        background-image: linear-gradient(to right bottom, #6cccf1, #5fa4e6);
      }
    }
  }

  &:hover &__side--front {
    transform: rotateY(180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0);
  }
}
</style>
