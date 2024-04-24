<template>
  <div class="swp-box">
    <van-swipe @change="onChange" v-if="obj">
      <van-swipe-item
          v-for="(item, index) in obj ? obj.children[0].children : ''"
          :key="index"
          class="van-swp"
      >
        <van-image
            fit="cover"
            :src="item ? item.model.cover : ''"
            alt=""
            @click="toEarc(item.model.link)"
        />
        <div class="customs-left">{{ item ? item.model.title : "" }}</div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          <span>{{ currentRef + 1 }}</span>
          / {{ obj ? obj.children[0].children.length : 1 }}
        </div>
      </template>
    </van-swipe>

    <van-swipe @change="onChange" v-if="findObj">
      <van-swipe-item
          v-for="(item, index) in findObj ? findObj.banners : ''"
          :key="index"
          class="van-swp"
      >
        <van-image
            fit="cover"
            :src="item ? item.cover : ''"
            alt=""
            @click="toEarcs(item)"
        />
        <div class="customs-left">{{ item ? item.title : "" }}</div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          <span>{{ currentRef + 1 }}</span>
          / {{ findObj ? findObj.banners.length : 1 }}
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  obj: Object,
  findObj: Object
})

const state = reactive({
  earcId: null,
  videoId: null,
  videoPoster: null
})

const currentRef = ref(0)


const onChange = (index) =>{
  currentRef.value = index
}

const toEarc = (n) =>{
  let str = n.split("%")[4].slice(2);
  router.push("/swipearc")
  state.earcId = str
}
const toEarcs = (n) => {
  let str = n.url.split("?")[0].split("/")[4];
  router.push("/videoplay");
  state.videoId = str ? str : null
  state.videoPoster = n ? n.cover : null
}
</script>

<script>

</script>

<style lang="less" scoped>
.swp-box {
  padding: 3px 10px;
  padding-bottom: 10px;
}
.van-swp {
  position: relative;
  .customs-left {
    position: absolute;
    bottom: 20px;
    left: 10px;
    color: #fff;
  }
}
</style>

<style lang="less">
.van-swipe {
  border-radius: 10px;
  overflow: hidden;
  .van-swipe-item {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.custom-indicator {
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 0.75rem;
  font-family: "siyuanMed";
  color: #fff;
  span {
    font-size: 1rem;
  }
}
</style>