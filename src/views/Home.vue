<template>
  <section id="home">
    <hero></hero>
    <projects></projects>
     <info></info>
     <banner></banner>
     <skills></skills>
     <banner2></banner2>
     <about></about>
  </section>

</template>

<script>
// import HelloWorld from '../components/HelloWorld'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Info from '../components/Info'
import VideoBanner from '../components/VideoBanner'
import Skills from '../components/Skills'
import Banner from '../components/Banner'
import About from '../components/About'
import Banner2 from '../components/Banner2'

export default {
  components: {
    Hero,
    Projects,
    Info,
    VideoBanner,
    Skills,
    Banner,
    About,
    Banner2
  }
}
</script>
