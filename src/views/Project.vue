<template>
  <v-card id="project">
    <v-card-text>

      <h1 class="text-xs-center">{{title}}</h1>
      <h3 class="text-xs-center">{{subtitle}}</h3>

    </v-card-text>

    <v-container fluid grid-list-md>
        <v-layout align-space-around justify-center row fill-height>

      <v-flex d-flex xs12 sm6 md6 >
      <v-img :src="imageLink" aspect-ratio=""  height="300" contain></v-img>
      </v-flex>
    </v-layout>
    </v-container>

    <v-container fluid grid-list-md>
        <v-layout align-space-around justify-center row fill-height>
            <v-flex d-flex xs12 sm6 md6>
                <v-card color="blue-grey lighten-3" dark>
                    <v-card-title primary class="title">Project Info:</v-card-title>
                    <v-card-text>{{ info }}</v-card-text>

                    <v-layout align-center>
                        <v-flex xs12 sm4 text-xs-center>
                            <div>
                                <a v-if="githubLink" :href="githubLink" target="_blank" rel="noopener noreferrer"><v-btn round color="blue lighten-1">Github Link</v-btn></a>
                                <a v-if="projectLink" :href="projectLink" target="_blank" rel="noopener noreferrer"><v-btn round color="blue lighten-1">View Project</v-btn></a>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout  align-space-around justify-center row fill-height>
            <v-flex d-flex xs12 sm6 md6>
                <v-tabs
                    v-model="active"
                    color="blue lighten-1"
                    dark
                    slider-color="cyan accent-1"
                >
                <v-tab ripple>
                    Features
                </v-tab>
                <v-tab ripple>
                    Technologies
                </v-tab>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text v-for="feature in features">{{ feature }}</v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text v-for="skill in skills">{{ skill }}</v-card-text>
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
                        :src="screenshotLink"
                        position= 'center center'
                        class="grey darken-4"
                    ></v-img>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>

  </v-card>
</template>

<script>
export default {
  name: 'project',
  props: ['data'],
  data () {
    return {
      title: 'Please Select a Project'
    }
  },
  mounted () {
    if (this.data) {
      this.title = this.data.title
      this.subtitle = this.data.subtitle
      this.info = this.data.info
      this.skills = this.data.skills
      this.features = this.data.features
      this.imageLink = this.data.imageLink
      this.screenshotLink = this.data.screenshotLink
      this.projectLink = this.data.projectLink
      this.githubLink = this.data.githubLink
    }
  }
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }
</style>
