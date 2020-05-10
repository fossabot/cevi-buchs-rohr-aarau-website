<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <menu-item 
        v-for="(item, i) in items"
        :key="i"
        v-bind:item="item" />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <img src="logo.svg" alt="Cevi Jungschar Buchs-Rohr Aarau" height="64" width="320" />
    </v-app-bar>
    <v-content>
      <v-container style="max-width: 976px;">
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; {{ new Date().getFullYear() }} Cevi Jungschar Buchs-Rohr Aarau</span>
    </v-footer>
  </v-app>
</template>

<style>
h1 {
    font-size: 3rem;
    margin-top: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

p {
  margin: 0 0 1.2rem;
}
</style>

<script>
import MenuItem from '~/components/MenuItem.vue'
export default {
  components: {
    MenuItem
  },
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          title: 'Interessierte',
          to: '/interessierte',
          subitems: [
            {
              icon: 'mdi-door',
              title: 'Schnuppern',
              to: '/interessierte/schnuppern'
            },
            {
              icon: 'mdi-walk',
              title: 'Aktvitäten',
              to: '/interessierte/aktivitaeten'
            },
            {
              icon: 'mdi-city',
              title: 'Cevi Schweiz',
              to: '/interessierte/cevi_schweiz'
            },
            {
              icon: 'mdi-map',
              title: 'Standort',
              to: '/interessierte/standort'
            },
          ]
        },
        {
          title: 'Mitglieder',
          to: '/mitglieder',
          subitems: [
            {
              icon: 'mdi-calendar',
              title: 'Agenda',
              to: '/mitglieder/agenda'
            },
            {
              icon: 'mdi-image',
              title: 'Album',
              to: '/mitglieder/album'
            },
            {
              icon: 'mdi-basket',
              title: 'Lädeli',
              to: '/mitglieder/laedeli'
            },
            {
              icon: 'mdi-human-male-boy',
              title: 'Ausbildung',
              to: '/mitglieder/ausbildung'
            },
            {
              icon: 'mdi-account-group',
              title: 'Leiterteam',
              to: '/mitglieder/leiterteam'
            },
          ]
        },
        {
          icon: 'mdi-comment-text',
          title: 'Kontakt',
          to: '/kontakt'
        }
      ],
    }
  }
}
</script>
