<template>
  <v-app centered>
    <v-navigation-drawer temporary v-model="sideNav" :mini-variant="mini" light absolute>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <router-link to="/">
              <v-list-tile-avatar>
                <img src="../src/assets/img/header/icons/daveicon.jpg">
              </v-list-tile-avatar>
            </router-link>

            <v-list-tile-content>
              <v-list-tile-title>David Mullaney</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-title>
                <a href="https://github.com/mullaned" target="_blank" rel="noopener noreferrer">
                  <v-icon class="icon">mdi-github-circle</v-icon>
                </a>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-title>
                <a href="https://ie.linkedin.com/in/mullaneydavid" target="_blank" rel="noopener noreferrer">
                  <v-icon class="icon">mdi-linkedin</v-icon>
                </a>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <br>
          <v-list-tile
            v-if="$route.path==='/'"
            v-for="item in menuItems"
            :key="item.title"
            v-scroll-to="item.hashlink"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-if="$route.path==='/project'"
            v-for="item in menuItems"
            :key="item.title"
            router
            :to="item.link"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
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
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <router-link to="/">
        <v-toolbar-title>
          <v-avatar>
            <img src="../src/assets/img/header/icons/dave.jpg" alt="Dave" route.path="/">
          </v-avatar>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-if="$route.path==='/'"
          v-for="item in menuItems"
          :key="item.title"
          v-scroll-to="item.hashlink"
        >{{item.title}}</v-btn>
        <v-btn
          flat
          v-if="$route.path==='/project'"
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >{{item.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-content>

    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="gray">
          <v-layout justify-center>
            <a href="https://github.com/mullaned" target="_blank" rel="noopener noreferrer">
              <v-icon class="footer-icon">mdi-github-circle</v-icon>
            </a>
            <a href="https://ie.linkedin.com/in/mullaneydavid" target="_blank" rel="noopener noreferrer">
              <v-icon class="footer-icon">mdi-linkedin</v-icon>
            </a>
          </v-layout>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;
          {{currentYear}}
          —
          <strong>David Mullaney</strong>
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
      currentYear: new Date().getFullYear(),
      menuItems: [
        { title: 'Home', hashlink: '#hero', link: '/' },
        { title: 'Projects', hashlink: '#projects', link: '/#projects' },
        { title: 'Skills', hashlink: '#skills', link: '/#skills' },
        { title: 'About', hashlink: '#about', link: '/#about' }
      ]
    }
  },
  mounted () {
    window['_fs_debug'] = false
    window['_fs_host'] = 'fullstory.com'
    window['_fs_org'] = 'KADF7'
    window['_fs_namespace'] = 'FS';
    (function (m, n, e, t, l, o, g, y) {
      if (e in m) {
        if (m.console && m.console.log) {
          m.console.log(
            'FullStory namespace conflict. Please set window["_fs_namespace"].'
          )
        }
        return
      }
      g = m[e] = function (a, b, s) {
        g.q ? g.q.push([a, b, s]) : g._api(a, b, s)
      }
      g.q = []
      o = n.createElement(t)
      o.async = 1
      o.crossOrigin = 'anonymous'
      o.src = 'https://' + _fs_host + '/s/fs.js'
      y = n.getElementsByTagName(t)[0]
      y.parentNode.insertBefore(o, y)
      g.identify = function (i, v, s) {
        g(l, { uid: i }, s)
        if (v) g(l, v, s)
      }
      g.setUserVars = function (v, s) {
        g(l, v, s)
      }
      g.event = function (i, v, s) {
        g('event', { n: i, p: v }, s)
      }
      g.shutdown = function () {
        g('rec', !1)
      }
      g.restart = function () {
        g('rec', !0)
      }
      g.consent = function (a) {
        g('consent', !arguments.length || a)
      }
      g.identifyAccount = function (i, v) {
        o = 'account'
        v = v || {}
        v.acctId = i
        g(o, v)
      }
      g.clearUserCookie = function () {}
    })(window, document, window['_fs_namespace'], 'script', 'user')
  }
}
</script>

<style scoped>

body {
  font-family: 'Poppins';
}

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
