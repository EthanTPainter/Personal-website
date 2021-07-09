<template>
  <header>
    <div class="toggle"></div>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#passions">Passions</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#connect">Connect</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "NavBar"
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
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
}

header ul li:hover {
  transform: scale(1.1);
  transition: .2s;
}

/*
Colors for new nav bar when hovered
Red - #ff0000
Orange - #ff7400
Green - #15ff00
Light blue - #00c5ff
Blue - #0004ff
*/

</style>