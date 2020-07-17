<template>
  <div class="cookie-consent ">
    <div class="container">
      <div class="grid">
        <p>We use cookies to enhance your experience and for analytics. If you continue on this website you will be providing consent to our use of cookies</p>
        <a @click="acceptCookie">I understand</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CookieConsent',
  methods: {
    ...mapActions('ui', ['acceptCookie'])
  }
}
</script>

<style lang="scss" scoped>
.cookie-consent {
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #000;
  font-size: 11px;
}

.grid {
  padding: 10px 30px 10px 7px;
  justify-content: space-between;
}

a {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  a {
    margin-top: 10px;
  }
}
</style>
