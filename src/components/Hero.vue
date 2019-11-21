<template>
  <v-parallax
    id="hero"
    height="800"
    dark
    :src="heroImage"

  >
    <v-layout
      align-center
      column
      justify-center

    >
    <v-card-text color="blue lighten-2">
      <h1 class="display-3  mb-2 text-xs-center">David Mullaney</h1>

      <h2 class="text-xs-center display-1">Software Developer / Designer / Photographer</h2>
      <hr>
      <div class="d-flex justify-content-center w-50 skills">
        <h2 class="subheading display-1 text-xs-center w-50">HTML 5, CSS 3,<br> Bootstrap 4, SCSS, <br> Axios, jQuery, WebPack,<br> React JS, Vue JS, ES6, <br> REST API, Drupal 8 </h2>
      </div>

      <!-- <h3 class="subheading display-1 text-xs-center">JavaScript</h3>
      <h3 class="subheading display-1 text-xs-center">Vue JS</h3>
      <h3 class="subheading display-1 text-xs-center">React JS</h3> -->
    </v-card-text>

      <form style="display: inline-block">
    <a href="https://github.com/mullaned" target="_blank" rel="noopener noreferrer"><v-icon class="icon ">mdi-github-circle</v-icon></a>
      <a href="https://ie.linkedin.com/in/mullaneydavid" target="_blank" rel="noopener noreferrer"><v-icon class="icon">mdi-linkedin</v-icon></a>
   </form>

    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  data () {
    return {
      heroImage: require('../assets/img/header/backgrounds/sky-hill-min.jpg')
    }
  }
}
</script>

<style scoped>

.skills {
  margin-left: auto;
  margin-right: auto;
}

  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
                        rgba(255,0,0,.25),
                        rgba(255,0,0,.25) 5px,
                        rgba(0,0,255,.25) 5px,
                        rgba(0,0,255,.25) 10px
                      );
  }

  .icon{
    font-size: 70px;
    text-decoration: none;
  }

  a{
    text-decoration: none;
  }
  hr {
    display: block;
    height: 2px;
    border: 0;
    border-top: 3px solid white;
    margin: 1em 0;
    padding: 0;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
}

@keyframes fadein {

    100% {
      /* transform: scale(1); */
      opacity: 1;
    }
  }

  h1, h2, h3, hr, .icon {
    opacity: 0;
    animation: 2s fadein 0.5s forwards;
  }

  .icon:hover {
      transform: translateY(-5px);
      color: white;
  }
</style>
