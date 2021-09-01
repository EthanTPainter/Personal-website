<template>
  <div class="container">
    <div class="container__preset">I Love</div>
    <div class="container__dynamic">
      {{ formattedText }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextRotation",
  props: {
    suppliedText: {
      required: true,
      type: String,
    },
  },
  data() {
    const formattedText = ` ${this.suppliedText}`;
    return {
      formattedText,
    };
  },
  watch: {
    // Whenever the supplied text is updated
    suppliedText(newText, oldText) {
      console.log(`New Text: ${newText}`);
      console.log(`Old Text: ${oldText}`);
      this.formattedText = newText;
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  font-size: 86px;
  text-align: center;
  color: white;

  &__preset {
    margin-right: 15px;
  }

  &__dynamic {
    display: inline-block;
    border-bottom: 2px solid white;
  }
}
</style>
