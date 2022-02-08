<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center py-4">
      <nuxt-link :to="{ name: 'index' }">
        <img src="~/assets/images/logo/main.png" />
      </nuxt-link>
    </div>

    <div class="w-100">
      <div class="login-section">
        <div class="login-box">
          <Nuxt />
          <div class="login-box__footer-links mt-4">
            <a href="/imprint">Impressum</a>
            <a href="/privacy">Datenschutz</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
