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
              <v-img :src="data.fields.titleImage.fields.file.url" aspect-ratio height="250" contain></v-img>
              <!-- <h1 class="text-xs-center">{{data.fields.titleImage.fields.file.url}}</h1> -->
            </div>

            <v-card color="blue-grey lighten-3 card__side card__side--back card__side--back-1" dark>
              <v-card-text primary class="title text-md-center text-xs-center">{{data.fields.title}}</v-card-text>
              <v-layout row justify-center>
                <v-dialog v-model="dialog" width="80%">
                  <v-btn slot="activator" round color="blue lighten-1" dark>Project Info</v-btn>
                  <v-card id="project">
                    <v-card-text>
                      <h1 class="text-xs-center">{{data.fields.title}}</h1>
                      <h3 class="text-xs-center">{{data.fields.subTitle}}</h3>
                    </v-card-text>

                    <v-container fluid grid-list-md>
                      <v-layout align-space-around justify-center row fill-height>
                        <v-flex d-flex xs12 sm6 md6>
                          <v-img :src="data.fields.titleImage.fields.file.url" aspect-ratio height="300" contain></v-img>
                        </v-flex>
                      </v-layout>
                    </v-container>

                    <v-container fluid grid-list-md>
                      <v-layout align-space-around justify-center row fill-height>
                        <v-flex d-flex xs12 sm6 md6>
                          <v-card color="blue-grey lighten-3" dark>
                            <v-card-title primary class="title">Project Info:</v-card-title>
                            <v-card-text>{{ data.fields.description }}</v-card-text>

                            <v-layout align-center>
                              <v-flex xs12 sm4 text-xs-center>
                                <div>
                                  <a v-if="data.fields.githubLink" :href="data.fields.githubLink" target="_blank">
                                    <v-btn round color="blue lighten-1">Github Link</v-btn>
                                  </a>
                                  <a
                                    v-if="data.fields.projectLink"
                                    :href="data.fields.projectLink"
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
                                  v-for="(feature, index) in data.fields.features"
                                  :key="index"
                                >{{ feature }}</v-card-text>
                              </v-card>
                            </v-tab-item>
                            <v-tab-item>
                              <v-card flat>
                                <v-card-text
                                  v-for="(skill, index) in data.fields.skills"
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
                              :src="data.fields.screenshotImage.fields.file.url"
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
  mounted() {
     this.$contentful
        .getEntries()
        .then((response) => {this.projectData = response.items})
        .catch(console.error)
  },
  data () {
    return {
      projectData: [],
    }
  },
  

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
