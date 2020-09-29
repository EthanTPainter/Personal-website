<template>
  <header v-bind:class="{ sticky: isSticky }">
    <a href="#home" class="logo">Ethan Painter</a>
    <div class="toggle"></div>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  isSticky() {
    return window.scrollY > 0;
  },
};
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
}

header .sticky {
  background: #fff;
  padding: 20px 100px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

header .logo {
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 2px;
}

header ul {
  position: relative;
  display: flex;
}

header li {
  position: relative;
  list-style: none;
}

header ul li a {
  position: relative;
  display: inline-block;
  margin: 0 15px;
  color: #fff;
  text-decoration: none;
}

header .sticky ul li a {
  color: #fff;
}
</style>
