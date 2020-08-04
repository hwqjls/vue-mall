<template>
  <div id="category">
    <Header></Header>
    <Skeleton v-show="isShowLoading" />
    <div class="listWrapper"
         v-if="!isShowLoading">
      <div class="leftWrapper">
        <ul class="wrapper">
          <li class="categoryItem"
              v-for="(cate, index) in categoriesData"
              :key="cate.id"
              :class="{selected:currentIndex === index}"
              @click="clickLeftLi(index)"
              ref="menuList">
            <span class="textWrapper">
              {{cate.name}}
            </span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import Skeleton from './components/skeleton/Skeleton'
import Header from './components/SearchHead'

import BScroll from 'better-scroll'
import {
  getCategoryData,
  getCategoryDetailData
} from './../../serve/api/index.js'

export default {
  name: 'Category',
  components: {
    Skeleton,
    Header
  },
  data () {
    return {
      isShowLoading: true,
      categoriesData: [], // 左边列表数据
      categoriesDetailData: [], // 右边列表数据
      currentIndex: 0,
      isShowLoadingGif: false
    };
  },
  mounted () {
    this._initData()
  },
  activated () {
    this.$nextTick(() => {
      if (this.$route.params.currentIndex > -1) {
        this.clickLeftLi(this.$route.params.currentIndex + 1)
      }
    })
  },
  methods: {
    async _initData () {
      let leftRes = await getCategoryData()
      if (leftRes.success) {
        this.categoriesData = leftRes.data.cate
      }
      let rightRes = await getCategoryDetailData('/lk001')
      if (rightRes.success) {
        this.categoriesDetailData = rightRes.data.cate
      }
      this.isShowLoading = false

      this.$nextTick(() => {
        if (!this.leftScroll) {
          this.leftScroll = new BScroll('.leftWrapper', {
            probeType: 3,
            click: true,
            scrollY: true,
            tap: true,
            mouseWheel: true
          })
        } else {
          this.leftScroll.refresh()
        }
      })
    },
    async clickLeftLi (index) {
      this.isShowLoadingGif = true
      this.currentIndex = index
      setTimeout(() => {
        let menuLists = this.$refs.menuList
        let el = menuLists[index]
        this.leftScroll.scrollToElement(el, 300)
      }, 900)

      let param
      if (index >= 9) {
        param = `/lk0${index + 1}`
      } else {
        param = `/lk00${index + 1}`
      }

      let rightRes = await getCategoryDetailData(param)
      if (rightRes.success) {
        this.categoriesDetailData = rightRes.data.cate
      }
      this.isShowLoadingGif = false
    }
  },
}
</script>

<style lang="less" scoped>
#category {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  .listWrapper {
    display: flex;
    position: absolute;
    top: 0.99rem;
    bottom: 1rem;
    width: 100%;
    overflow: hidden;
    .leftWrapper {
      flex: 0 0 1.7rem;
      width: 1.7rem;
      vertical-align: middle;
      background-color: #f4f4f4;
      .categoryItem {
        position: relative;
        height: 0.5rem;
        padding: 0.25rem 0;
        border-bottom: solid 0.01rem #e8e9e8;
        .textWrapper {
          position: absolute;
          top: 0.3rem;
          left: 0.1rem;
          line-height: 0.4rem;
          padding: 0.1rem 0.2rem;
          border-left: 0.06rem solid transparent;
          font-size: 0.24rem;
          color: #666;
        }
      }
      .selected {
        background-color: #fff;
        .textWrapper {
          border-left-color: #3cb963;
          font-weight: bold;
          font-size: 0.28rem;
          color: #333333;
        }
      }
    }
  }
}

@media (min-width: 960px) {
  .wrapper {
    border-right: 0.01rem solid #e8e9e8;
  }

  .wrapper .categoryItem {
    background: #fff;
  }
}
</style>