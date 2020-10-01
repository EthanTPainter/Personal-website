<template>
  <section class="about" id="about">
    <div class="about-heading">
      <h2>About Me</h2>
    </div>
    <div class="content">
      <h3 class="content-header">
        College
      </h3>
      <p class="content-body">
        I attended George Mason University from the fall of 2014 to the spring
        of 2018. I graduated with a Bachelor's degree in Computer Science with a
        minor in Business.
        <br /><br />
        During my junior year, I interned with a private technology consulting
        company called Coveros. This company provided Agile certified coaches
        and mentors to help companies help apply Agile methodologies to their
        software development process. The internsip focused primarily on
        encouraging Agile practices while developing a mobile application that
        would be used in the company's upcoming mobile app testing course.

        <br /><br />During my senior year, I enrolled in George Mason
        University's first capstone course for computer science students. The
        capstone course lasted both fall and spring semesters, compared to one
        semester for a standard course. The capstone featured various companies
        from ranging in size and software. I joined a team to work for
        Kryptowire, a company focused on security for web and mobile
        applications. This company detected security vulnerabilities for a
        variety of mobile and web applications. The Kryptowire project was to
        create a tool to disassemble android applications and reassemble with
        the removal of unncessary surveillance and tracking technologies. An
        example, would be a flashlight application that requires access to a
        device's contacts, GPS, ability to make phone calls, etc. A standard
        flashlight app wouldn't require access to any of those services because
        the purpose of the application doesn't merit the reliance on those
        services/technologies.
      </p>

      <h3 class="content-header">Professional</h3>
      <p class="content-body-last">
        After graduating college, I returned to Richmond, VA and started working
        at SingleComm, a web development company focused on software for call
        centers. Here, I worked on a variety of projects focused on node js
        (Javascript & Typescript) frontend and backend development, and deployed
        & maintained applications through Amazon Web Services (AWS). I worked
        here for 2 years and some change before moving on to a consulting
        company called Infinitive.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style>
.about-heading {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: #111;
}
.about-heading h2 {
  font-weight: 600;
  font-size: 48px;
  color: #111;
}
.about-heading h3 {
  width: 100%;
}

.content-header {
  font-size: 30px;
  margin: 15px 0;
}
.content-body {
  font-size: 24px;
  margin-bottom: 2em;
}
.content-body-last {
  font-size: 24px;
}

span .li {
  display: list-item;
  margin-left: 2em;
}

.contentBx h3 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
