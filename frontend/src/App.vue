<template>
  <n-config-provider :theme="this.theme" :theme-overrides="themeOverrides">
    <n-layout>
    <n-layout-header bordered>
      <n-space justify="space-between">
        <div class="top-logo-container">
          <n-gradient-text type="info">DUX</n-gradient-text>

          <n-button text><router-link to="/">Home</router-link></n-button>
          <n-button text><router-link to="/menu">Menu</router-link></n-button>
          <n-button text><a href="https://vk.com/doc269075898_653912565?hash=eJBZM9u8q0bAK38hrvbNjnkOWDZ3diZ1FjOQNg4CT04&dl=K878iuLnkLybwMeANT3cGXXDlpqHxoBjlhQw46E7B5T">
            Брошюра
          </a></n-button>
        </div>


        <div class="button-theme-container">
        <n-button @click="changeThemeToDark">
          Dark
        </n-button>
        <n-button @click="this.theme = null">
          Light
        </n-button>
        </div>
      </n-space>
    </n-layout-header>
    <n-layout-content>
        <router-view v-slot="{ Component }">
          <transition name="tron" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
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
  darkTheme, NConfigProvider, NGradientText, NButton, NSpace, NCard, NLayout, NLayoutContent, NLayoutHeader,
  NLayoutFooter, NInput
} from "naive-ui";
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router';

@Options({
  components: {
    NGradientText, NConfigProvider,
    NButton, NSpace, NCard, NLayout, NLayoutContent, NLayoutHeader,
    NLayoutFooter,  NInput
  },
})
export default class App extends Vue {
  theme = darkTheme

  themeOverrides = {
    common: {
      primaryColorHover: '#8ACBECFF'
    },

    // ...
  }

  private isSelected(param: string) {
    // eslint-disable-next-line no-prototype-builtins
    const selected = this.$route.params.hasOwnProperty(param) && !!this.$route.params[param];
    return {
      selected,
      id: selected ? Number(this.$route.params[param]) : NaN,
    };
  }

  get isSelectedPlaceType(){
    return this.isSelected('placeTypeId');
  }

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
.top-logo-container > .n-gradient-text{
  font-size 32px
}
.top-logo-container > .n-button{
  margin-left 90px
}
.top-logo-container
  display flex
  justify-content center
  align-items center

.button-theme-container > .n-button
  margin 2px

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

.tron-enter-active,
 tron-leave-active{
  transition: 1s ease all;
 }

.tron-enter-from,
 tron-leave-to{
  opacity: 0;
  transform: translateX(100px);
 }
</style>