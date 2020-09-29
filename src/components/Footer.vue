<template>
  <div class="copyright">
    <p>Copyright &copy; {{ year }} Ethan T Painter. All Rights Reserved</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.copyright {
  background: #000;
  color: #fff;
  text-align: center;
  padding: 10px;
}
</style>
