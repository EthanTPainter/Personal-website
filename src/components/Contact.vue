<template>
  <section class="contact" id="contact">
    <div class="heading">
      <h2>Contact Me</h2>
      <p>Contact me for some cool memes</p>
    </div>
    <div class="content">
      <div class="contactInfo">
        <h3>Contact Info</h3>
        <div class="contactInfoBx">
          <div class="box">
            <i class="lni lni-map-marker"></i>
            <div class="text">
              <h3>Email</h3>
              <p>ethantpainter@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="formBx">
        <form>
          <h3>Message Me</h3>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea type="text" placeholder="Your Message"> </textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
.contact {
  background: #111;
}
.contact .content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.heading {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: #fff;
}

.formBx {
  min-width: 60%;
}
.formBx form {
  display: flex;
  flex-direction: column;
}
.formBx form h3,
.contactInfo h3 {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
.contactInfo {
  min-width: 40%;
}
.contactInfoBx {
  position: relative;
}
.contactInfoBx .box {
  position: relative;
  padding: 20px 0;
}
.contactInfoBx .box .icon {
  min-width: 40px;
  padding-top: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
.contactInfoBx .box .text {
  display: flex;
  margin-left: 20px;
  font-size: 16px;
  color: #fff;
  flex-direction: column;
  font-weight: 300;
}
.contactInfoBx .box .text h3 {
  font-weight: 500;
  color: #2196f3;
}
.formBx form input,
.formBx form textarea {
  margin-bottom: 20px;
  padding: 15px;
  font-size: 16px;
  background: transparent;
  border: none;
  outline: none;
  background: #222;
  resize: none;
}
.formBx form textarea {
  min-height: 200px;
}
.formBx form input::placeholder,
.formBx form textarea::placeholder {
  color: #999;
}
.formBx form input[type="submit"] {
  max-width: 100px;
  background: #2196f3;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.formBx form input,
.formBx form textarea {
  color: #fff;
}
</style>
