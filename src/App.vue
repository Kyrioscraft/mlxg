<template>
  <div id="app">
    <div class="loadBox" v-if="
      state.loading && JSON.stringify($route.meta) == '{}'
        ? true
        : $route.meta.flag
    ">
      <van-loading type="spinner" />
    </div>
    <div class="sy-bgbox">
      <van-tabbar v-model="state.active" class="home-nav">
        <van-tabbar-item to="/home">
          <span>首页</span>
          <template #icon="props">
            <img src="@/assets/iconimg/sy-act.png" alt="" v-if="props.active" />
            <img src="@/assets/iconimg/sy.png" alt="" v-else width="100%" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/note">
          <span>手记</span>
          <template #icon="props">
            <img src="@/assets/iconimg/shouji-act.png" alt="" v-if="props.active" />
            <img src="@/assets/iconimg/shouji.png" alt="" v-else />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/find">
          <span>发现</span>
          <template #icon="props">
            <img src="@/assets/iconimg/find-act.png" alt="" v-if="props.active" />
            <img src="@/assets/iconimg/find.png" alt="" v-else />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/mine">
          <span>我的</span>
          <template #icon="props">
            <img src="@/assets/iconimg/mine-act.png" alt="" v-if="props.active" />
            <img src="@/assets/iconimg/mine.png" alt="" v-else />
          </template>
        </van-tabbar-item>
      </van-tabbar>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({
  loading: false,
  active: 0
})

onMounted(() => {
  fetchRoute()
})

const fetchRoute = () => {
  if (router.path == "/home") {
    state.active = 0;
  } else if (router.path == "/note") {
    state.active = 1;
  } else if (router.path == "/find") {
    state.active = 2;
  } else if (router.path == "/mine") {
    state.active = 3;
  }
}


</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  position: relative;
}

.loadBox {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.sy-bgbox {
  width: 100%;

  .home-nav {
    height: 60px;
    font-family: "siyuanMed";
    z-index: 2;

    .van-tabbar-item {
      padding-top: 8px;
      font-size: 0.6rem;
      line-height: normal;
      justify-content: space-around;
      color: #a0a1a1;
    }

    .van-tabbar-item--active {
      color: #1a1a1a;
    }

    &::after {
      position: relative;
    }
  }
}
</style>
