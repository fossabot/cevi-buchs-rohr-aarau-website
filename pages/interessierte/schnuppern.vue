<template>
  <div>
    <h1>Schnuppern</h1>
    <h2>Wer sind wir?</h2>
    <p>
      Wir sind ein lokaler Verein, welcher zum drittgrössten Jugendverband der
      Schweiz dem <nuxt-link to="cevi_schweiz">Cevi Schweiz</nuxt-link> gehört.
      Wir möchten Kindern
      <nuxt-link to="aktivitaeten"
        >spannende Erlebnisse in der Natur ermöglichen</nuxt-link
      >, beibringen sorgsam mit der Umwelt umzugehen. Ausserdem unterstützen wir
      Kinder und Jugendliche dabei, ihr Leben sinnvoll zu gestalten und in der
      Gesellschaft Verantwortung zu übernehmen.
    </p>

    <h2>Wie sind wir aufgebaut?</h2>

    <p>
      Die Kinder werden je nach Alter in Geschlechter-gemischte Gruppen
      eingeteilt, welche von mind. zwei Leitern geleitet wird. Aktuell führen
      wir folgende zwei Gruppen:
    </p>
    <ul>
      <li>Kinder von 5-10: Celebrations</li>
      <li>Kinder ab 11 Jahren: Spartacus.</li>
    </ul>

    <h2>Wo finden die Nachmittage statt?</h2>

    <p>
      Unser Hauptstandort ist das
      <nuxt-link to="standort">Pfarrhaus Ausserdorf</nuxt-link> Von dort aus
      gehen wir in der Regel in den nahe gelegenen Buchser Wald. Ausnahmsweise
      kann sich der Besammlungsort ändern. Dies ist jeweils in der
      <nuxt-link to="../mitglieder/agenda">Agenda</nuxt-link> ersichtlich und
      wird kommuniziert.
    </p>

    <h2>Was muss ich mitnehmen?</h2>

    <p>An einem normalen Nachmittag benötigt das Kind folgendes Material:</p>
    <ul>
      <li>Ein kleines Getränk</li>
      <li>Etwas kleines zum Essen (Z'vieri)</li>
      <li>Ein Sackmesser</li>
      <li>Dem Wetter angepasste Kleider und Schuhe</li>
    </ul>

    <h2>Wie gewährleisten wir die Sicherheit?</h2>

    <p>
      Jede Gruppe wird von mindestens einem in einem Leiter, welcher in einem
      J+S anerkannten Gruppenleiterkurs ausgebildet wurde geleitet. Zusätzlich
      wird dieser durch einen oder mehrere Leiter unterstützt, welche ebenfalls
      den Gruppenleiterkurs oder den Hilfsleiterkurs absolviert haben. Wir
      berücksichtigen bei unseren Aktivitäten Wettervorhersagen (z. B.
      Sturmwarnungen) aber auch Verordnungen der Behörden (z. B. Feuerverbot).
      Alle Leiter verfügen über Mobiltelefone und der Cevi Schweiz betreibt ein
      Krisen-Telefon bei Notfällen.
    </p>

    <h2>Anmeldung</h2>

    <p>Wir freuen uns über eine kurze Anmeldung</p>

    <v-form ref="form">
      <v-text-field
        v-model="name"
        label="Name*"
        :rules="nameRules"
        required
        clearable
        outlined
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail*"
        required
        clearable
        outlined
      ></v-text-field>

      <v-text-field
        v-model="phone"
        label="Telefon"
        clearable
        outlined
      ></v-text-field>

      <v-text-field
        v-model="birthdate"
        label="Geburtsdatum"
        clearable
        outlined
      ></v-text-field>

      <v-menu
        ref="showBirthDatePicker"
        v-model="showBirthDatePicker"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="birthdate"
            label="Geburtsdatum"
            clearable
            outlined
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          ref="picker"
          v-model="birthdate"
          :max="new Date().toISOString().substr(0, 10)"
          min="1900-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>

      <v-menu
        v-model="showVisitPicker"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="visitdate"
            label="Schnupperdatum"
            readonly
            outlined
            clearable
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="visitdate"
          @input="showVisitPicker = false"
        ></v-date-picker>
      </v-menu>

      <v-textarea
        v-model="remarks"
        label="Bemerkungen"
        auto-grow
        :outlined="true"
      ></v-textarea>

      <v-snackbar
        v-model="showMessage"
        :bottom="true"
        :color="messageColor"
        :timeout="3000"
        :vertical="true"
      >
        {{ messageText }}
        <v-btn dark text @click="snackbar = false">
          Schliessen
        </v-btn>
      </v-snackbar>

      <v-btn class="mr-4" color="primary" @click="submit">Anmelden</v-btn>
    </v-form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      birthdate: '',
      visitdate: '',
      remarks: '',
      nameRules: [(v) => !!v || 'Name ist ein Pflichtfeld'],
      emailRules: [
        (v) => !!v || 'E-mail ist ein Pflichtfeld',
        (v) => /.+@.+/.test(v) || 'E-Mail-Adresse muss gültig sein'
      ],
      showVisitPicker: false,
      showBirthDatePicker: false,
      showMessage: false,
      messageText: '',
      messageColor: 'green'
    }
  },
  watch: {
    showBirthDatePicker(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    submit() {
      if (!this.name) {
        this.messageText = 'Bitte geben Sie einen Namen ein'
        this.messageColor = 'red'
        this.showMessage = 'true'
        return
      } else if (!this.email || !/.+@.+/.test(this.email)) {
        this.messageText = 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
        this.messageColor = 'red'
        this.showMessage = 'true'
        return
      }

      const instance = axios.create({
        baseURL: 'https://backend.cevi-buro-aarau.ch/api',
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' }
      })

      instance
        .post('/forms/submit/Schnuppern?token=486f18ebe895de87c4f35c58d3db0f', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          birthdate: this.birthdate,
          visitdate: this.visitdate,
          remarks: this.remarks
        })
        .then(() => {
          this.messageText =
            'Die Anmeldung wurde erfolgreich übermittelt. Wir werden in Kürze mit Ihnen in Kontakt treten.'
          this.messageColor = 'green'
          this.showMessage = 'true'
        })
        .catch((err) => {
          this.$sentry.captureException(err)
          this.messageText =
            'Fehler bei der Übermittlung. Bitte versuchen Sie es später noch einmal.'
          this.messageColor = 'red'
          this.showMessage = 'true'
        })
    },
    allowedDates: (val) => parseInt(val.split('-')[2], 10) % 2 === 0,
    save(date) {
      this.$refs.showBirthDatePicker.save(date)
    }
  }
}
</script>
