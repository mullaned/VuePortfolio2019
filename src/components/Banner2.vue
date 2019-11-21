<template>
  <v-parallax
    height="300"
    :src="bannerImage"

  >
  <v-layout
      align-center
      column
      justify-center
    >
    <h1 class="display-1  mb-3">Get In Touch:</h1>
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
      bannerImage: require('../assets/img/header/backgrounds/beachppl.jpg')
    }
  }
}
</script>

<style scoped>
    .bannerText{
        color: #F86D18
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
    color: white;
  }

  a{
    text-decoration: none;
  }

  .icon:hover {
      transform: translateY(-5px);
  }
</style>
