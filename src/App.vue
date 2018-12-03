<template>
  <v-app centered>
     <v-navigation-drawer
      temporary
      v-model="sideNav"
      :mini-variant="mini"
      light
      absolute
    >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <router-link to="/">
            <v-list-tile-avatar>
              <img src="../src/assets/img/header/icons/daveicon.jpg" />
            </v-list-tile-avatar>
          </router-link>

        <v-list-tile-content>
          <v-list-tile-title>David Mullaney</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-title><a href="https://github.com/mullaned" target="_blank"><v-icon class="icon ">mdi-github-circle</v-icon></a></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-title><a href="https://ie.linkedin.com/in/mullaneydavid" target="_blank"><v-icon class="icon">mdi-linkedin</v-icon></a></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <br>
        <v-list-tile v-if="$route.path==='/'" v-for="item in menuItems" :key="item.title" v-scroll-to="item.hashlink">
            <v-list-tile-content>
            <v-list-tile-title >{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="$route.path==='/project'" v-for="item in menuItems" :key="item.title" router :to="item.link">
            <v-list-tile-content>
            <v-list-tile-title >{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon></v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>

    <v-toolbar>
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <router-link to="/">
        <v-toolbar-title><v-avatar>
      <img
        src="../src/assets/img/header/icons/dave.jpg"
        alt="Dave"
        route.path='/'
      >
    </v-avatar></v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-if="$route.path==='/'" v-for="item in menuItems" :key="item.title" v-scroll-to="item.hashlink">{{item.title}}</v-btn>
        <v-btn flat v-if="$route.path==='/project'" v-for="item in menuItems" :key="item.title" router :to="item.link">{{item.title}}</v-btn>

      </v-toolbar-items>
</v-toolbar>

    <v-content>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-content>

 <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="gray">
        

         <v-layout justify-center>
           <a href="https://github.com/mullaned" target="_blank"><v-icon class="footer-icon">mdi-github-circle</v-icon></a>
           <a href="https://ie.linkedin.com/in/mullaneydavid" target="_blank"><v-icon class="footer-icon">mdi-linkedin</v-icon></a>

  </v-layout>

      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>David Mullaney</strong>
      </v-card-actions>
    </v-card>
  </v-footer>

  </v-app>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      sideNav: false,
      menuItems: [
        { title: 'Home', hashlink: '#hero', link: '/' },
        { title: 'Projects', hashlink: '#projects', link: '/#projects' },
        { title: 'Skills', hashlink: '#skills', link: '/#skills' },
        { title: 'About', hashlink: '#about', link: '/#about' }
      ]
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.footer-icon:hover {
      transform: scale(1.2);
  }

</style>
