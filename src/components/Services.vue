<template>
  <section class="services" id="services">
    <div class="heading">
      <h2>Services</h2>
      <p>This is everything I think I do well enough</p>
    </div>
    <div class="content">
      <div class="servicesBx">
        <i class="lni lni-laptop"></i>
        <h2>Backend Web</h2>
        <p></p>
      </div>
      <div class="servicesBx">
        <i class="fab fa-react"></i>
        <h2>Frontend Frameworks</h2>
        <p>I've worked with Angular,</p>
      </div>
      <div class="servicesBx">
        <i class="fab fa-node-js"></i>
        <h2>Node JS</h2>
        <p>I've worked with node js on frontend and backend.</p>
      </div>
      <div class="servicesBx">
        <img src="icon1.png" />
        <h2></h2>
        <p></p>
      </div>
      <div class="servicesBx">
        <i class="fab fa-aws"></i>
        <h2>AWS Cloud</h2>
        <p></p>
      </div>
      <div class="servicesBx">
        <i class="fas fa-desktop"></i>
        <h2>PC Building</h2>
        <p>Building PCs is fun</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style>
.services {
  background: #111;
}
.services .content {
  display: flex;
  justify-content: center;
  flex-wrap: row;
  flex-direction: row;
}
.heading {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: #fff;
}
.heading h2 {
  font-weight: 600;
  font-size: 30px;
  color: #fff;
}

.services .content .servicesBx {
  padding: 40px 20px;
  background: #222;
  color: #fff;
  max-width: 340px;
  margin: 20px;
  text-align: center;
  transition: 0.5s;
}

.services .content .servicesBx:hover {
  background: #2196f3;
}
.services .content .servicesBx img {
  max-width: 80px;
  filter: invert(1);
}
.services .content .servicesBx h2 {
  font-size: 20px;
  font-weight: 600;
}
</style>
