<template>

     <v-card id="about">
      <v-card-text>
        <h1 class="text-xs-center">About Me</h1>
        <h3 class="text-xs-center">A little bit about myself...</h3>
      </v-card-text>

      <v-container >
        <v-layout align-space-around justify-center row wrap fill-height>
            <v-flex d-flex xs12 md4>
                <v-card  >

                    <v-card-text>
                        <h2 class="text-xs-center">Software Development</h2>
                        <p class="text-xs-center">I have completed intensive software development training with the Code Institute Dublin</p>
                    </v-card-text>
                    <v-card-text>
                        <h2 class="text-xs-center">Computer Engineer</h2>
                        <p class="text-xs-center">I have a degree in Computer Engineering and Maths from Trinity College Dublin</p>
                    </v-card-text>
                    <v-card-text>
                        <h2 class="text-xs-center">Experienced</h2>
                        <p class="text-xs-center">I have worked on teams with Microsoft, Google and Arvato</p>
                    </v-card-text>

                </v-card>
            </v-flex>
            <v-flex d-flex xs12 md4>
                <v-card  >

                    <v-img :src="profileImage" aspect-ratio=""  contain></v-img>

                </v-card>
            </v-flex>
            <v-flex d-flex xs12 md4>
                <v-card  >

                    <v-card-text>
                        <h2 class="text-xs-center">Driven</h2>
                        <p class="text-xs-center"> I am constantly looking to improve and develop new skills and features for my projects</p>
                    </v-card-text>
                    <v-card-text>
                        <h2 class="text-xs-center">Design</h2>
                        <p class="text-xs-center">I believe great functionality needs great design.  User experience and responsive design are core values</p>
                    </v-card-text>
                    <v-card-text>
                        <h2 class="text-xs-center">Location</h2>
                        <p class="text-xs-center">I am currently based in Dublin, Ireland</p>
                    </v-card-text>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    </v-card>

</template>

<script>
export default {
  data () {
    return {
      profileImage: require('../assets/img/header/icons/dave.jpg')
    }
  }
}
</script>

<style scoped>
.title {
        font-weight: 900;
        font-size: 40px;
        text-transform: uppercase;
        margin-bottom: 0;
        color: #222;
        font-family: "Open Sans";
        line-height: 13px;
        padding-top: 50px;
        padding-bottom: 20px;
    }

    .subtitle {
        display: block;
        font-size: 110%;
        line-height: 20px;;
        text-transform: uppercase;
        max-width: 80%;
        margin: 0 auto;
        margin-top: 15px;
        letter-spacing: 1px;
        padding: 0;
        font-weight: 400;
        color: rgb(71, 71, 71);
    }

    i{
        color: rgb(71, 71, 71);
        font-size: 1.5rem;
        display: inline-block;
        text-align: center;
    }

    img{
        width: 100%;

    }

    .anchor {
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    z-index: -1;
    top: -40px;
    left: 0;
    visibility: hidden;
}

</style>
