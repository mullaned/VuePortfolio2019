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
      <h1 class="display-1  mb-3">DESIGN, <span class="bannerText">DEVELOP</span>, DEPLOY</h1>

    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  data () {
    return {
      bannerImage: require('../assets/img/header/backgrounds/smooth-parallax.png')
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
</style>
