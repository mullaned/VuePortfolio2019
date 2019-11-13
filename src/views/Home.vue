<template>
  <section id="home">
    <hero></hero>
    <projects-modal></projects-modal>
     <info></info>
     <banner></banner>
     <about></about>
     <banner2></banner2>
     <skills></skills>

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
import ProjectsModal from '../components/ProjectsModal'

export default {
  components: {
    Hero,
    Projects,
    Info,
    VideoBanner,
    Skills,
    Banner,
    About,
    Banner2,
    ProjectsModal
  }
}
</script>
