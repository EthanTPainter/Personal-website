<template>
  <section class="banner" id="home">
    <div class="textBx">
      <h2>Hello, I'm <span>Ethan Painter.</span></h2>
      <h3>Full Stack Web Developer</h3>
      <a href="#about" class="btn">About Me</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
section {
  padding: 100px;
}

.banner {
  position: relative;
  min-height: 100vh;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.banner h2 {
  font-size: 3em;
  color: #fff;
  font-weight: 500;
  line-height: 1.5em;
}

.banner h2 span {
  font-size: 1.5em;
  font-weight: 700;
}

.banner h3 {
  font-size: 1.15em;
  color: #fff;
  font-weight: 500;
}

.btn {
  position: relative;
  background: #2196f3;
  display: inline-block;
  color: #fff;
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
