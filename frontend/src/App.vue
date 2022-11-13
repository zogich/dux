<template>
  <n-config-provider :theme="this.theme">
    <n-layout>
    <n-layout-header bordered>
      <n-space justify="end">
        <n-button @click="changeThemeToDark">
          Dark
        </n-button>
        <n-button @click="this.theme = null">
          Light
        </n-button>
      </n-space>
    </n-layout-header>

      <n-layout-content>
        <router-view/>
      </n-layout-content>
      <n-layout-footer bordered>
        <n-space vertical style="gap: 3px" justify='space-evenly' align="start">

          <n-gradient-text type="info">
          developed by students dvfu
          </n-gradient-text>
          <n-gradient-text type="info">
            <a href="https://github.com/TCKACHIKSIS/dux">https://github.com/TCKACHIKSIS/dux</a>
          </n-gradient-text>
          <n-gradient-text type="info">
          Feel free to contribute :)
          </n-gradient-text>
        </n-space>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  darkTheme, NConfigProvider, NGradientText, NButton, NSpace, NCard, NLayout, NLayoutContent, NLayoutHeader, NLayoutFooter
} from "naive-ui";
import { useThemeVars } from 'naive-ui'
@Options({
  components: {
    NGradientText, NConfigProvider, NButton, NSpace, NCard, NLayout, NLayoutContent, NLayoutHeader, NLayoutFooter
  },
})
export default class App extends Vue {
  theme = darkTheme
  themeVars = useThemeVars;

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
</style>
<style scoped lang="stylus">
.n-layout-header
    padding 12px
    height 63px

.n-layout-content
    height calc(100vh - 63px)

.n-layout-footer
    font-size 12px
    height 87px
    padding-left 20px;
    padding-top 5px;
a{
  text-decoration none
}
a:visited{
    color: #70c0e8;
}
</style>