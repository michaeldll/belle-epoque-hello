<template>
  <nav>
    <ul>
      <li><nuxt-link to="/slider">slider</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      padding: 0 42.5px;
      &:first-child {
        padding: 0 42.5px 0 0;
      }
      &:last-child {
        padding: 0 0 0 42.5px;
      }
      a {
        font-size: 18px;
        color: white;
        font-family: 'Playfair Display', serif;
        text-decoration: none;
      }
    }
  }
}
</style>

<script></script>
