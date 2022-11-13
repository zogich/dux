<template>
  <n-config-provider :theme="this.theme"  style="height: 100%">
    <n-layout>
    <n-layout-header bordered>
        <n-button @click="changeThemeToDark">
          Dark
        </n-button>
        <n-button @click="this.theme = null">
          Light
        </n-button>
    </n-layout-header>

      <n-layout-content>
        <router-view/>
      </n-layout-content>

    </n-layout>
  </n-config-provider>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  darkTheme, NConfigProvider, NGradientText, NButton, NSpace, NCard, NLayout, NLayoutContent, NLayoutHeader
} from "naive-ui";

@Options({
  components: {
    NGradientText, NConfigProvider, NButton, NSpace, NCard, NLayout, NLayoutContent, NLayoutHeader
  },
})
export default class App extends Vue {
  theme = darkTheme
  changeThemeToDark(){
    this.theme = darkTheme;
    return
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height: 100vh;
</style>
<style scoped>
.n-layout-header {
  padding: 12px;
}
.n-layout-content{
}
</style>