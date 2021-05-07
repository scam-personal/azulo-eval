<template>
  <header class="h-16 border-b border-gray-300 bg-gray-300">
    <div class="container-header">
      <div class="header-logo">
      <div>
        <router-link to="/">
          <img class="h-12" alt="Vue logo" src="../src/assets/logo.png" />
        </router-link>
      </div>
    </div>
      <nav class="h-16 flex-1 mt-1">
        <ul class="menu">
          <li><router-link to="/">Airports</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
  <router-view/>
</template>