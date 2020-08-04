<template>
  <div id="category">
    <Header></Header>
    <Skeleton v-show="isShowLoading" />
    <div v-if="!isShowLoading"
         class="listWrapper">

    </div>
  </div>
</template>

<script>
import Skeleton from './components/skeleton/Skeleton'
import Header from './components/SearchHead'

export default {
  name: 'Category',
  components: {
    Skeleton,
    Header
  },
  data () {
    return {
      isShowLoading: true
    };
  }

}
</script>

<style>
</style>