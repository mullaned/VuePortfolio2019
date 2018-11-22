<template>
    <!-- <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6" v-for="data in projectInfoData">
                <div>
                    <h4 class="text-left title-text">{{data.title}}</h4>
                    <p class="text-left">{{data.info}}</p>  <v-icon class="myIcons">{{data.icon}}</v-icon>
                </div>
            </div>
        </div>
    </div> -->

    <v-container fluid grid-list-md>
        <v-layout align-space-around justify-center row wrap fill-height>
            <v-flex d-flex xs12 sm4 md4  v-for="data in projectInfoData">
                <v-card color="blue lighten-2" dark>
                    <v-card-title primary class="title"><v-icon class="">{{data.icon}}</v-icon>  {{data.title}}</v-card-title>
                    <v-card-text>{{data.info}}</v-card-text>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
export default {
  data () {
    return {
      projectInfoData: [
        { id: 1, icon: 'mdi-speedometer', title: 'Performance', info: 'Projects built for speed, performance and usability. User experience and responsive design are core values.' },
        { id: 2, icon: 'mdi-airplane-takeoff', title: 'Elegant', info: 'Project code is clean, thoughfully commented and well documented for both users and colleagues to understand.' },
        { id: 3, icon: 'mdi-github-circle', title: 'Version Control', info: 'I use git and github on all of my projects for version control. Using multiple branches to deploy different styles and features.' },
        { id: 4, icon: 'mdi-shield-plus-outline', title: 'Modern', info: 'I utilize the latest technology to build and deploy my projects. Always looking to improve and add features.' },
        { id: 5, icon: 'mdi-cloud-outline', title: 'Responsive', info: 'Projects need to be adaptable to the wide array of possible devices they will be viewed on while meeting the needs of customers and clients.' },
        { id: 6, icon: 'mdi-lifebuoy', title: 'Test Driven', info: 'I use TDD to ensure new features and improvements do not conflict with existing work.' }]

    }
  }
}
</script>

<style scoped>
    .myIcons{
        color:#F86E19;
        font-size: 2rem;
        float: left;
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
    }

    p{
        margin: 0 0 15px;
        padding: 0;
    }

    .info{
        margin-bottom: 30px;
        padding-left: 40px;
    }
    .title-text{
        font-weight: 700;
        font-family: "Open Sans";
        font-size: 18px;
        margin-bottom: 15px;
        color: #222;
        line-height: 1.3em;
    }
</style>
