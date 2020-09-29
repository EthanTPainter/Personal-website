<template>
  <section class="projects" id="projects">
    <div class="project-heading">
      <h2>Previous Projects</h2>
      <p>Here are some projects I've worked on</p>
    </div>
    <div class="content">
      <div class="projectBx">
        <img src="project1.jpg" />
      </div>
      <div class="projectBx">
        <img src="project1.jpg" />
      </div>
      <div class="projectBx">
        <img src="project1.jpg" />
      </div>
      <div class="projectBx">
        <img src="project1.jpg" />
      </div>
      <div class="projectBx">
        <img src="project1.jpg" />
      </div>
      <div class="projectBx">
        <img src="project1.jpg" />
      </div>
    </div>
    <div class="heading">
      <a href="#" class="btn">View More</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style>
.project-heading {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: #111;
}
.project-heading h2 {
  font-weight: 600;
  font-size: 30px;
  color: #111;
}
.projects .content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.projects .content .projectBx {
  width: 50%;
  padding: 20px;
}
.projects .content .projectBx img {
  max-width: 100%;
}
</style>
