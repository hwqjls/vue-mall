<template>
  <div id="specialZone">
    <div class="title">
      特色专区
    </div>
    <div class="wrapperItem">
      <div class="newItem"
           v-for="newItem in specialZone.newItemList"
           :key="newItem.id">
        <p class="itemTitle">{{newItem.title}}</p>
        <p class="itemSubTitle">{{newItem.subtitle}}</p>
        <img class="itemImg"
             v-lazy="newItem.imageOne">
        <img class="itemImg"
             v-lazy="newItem.imageTwo">
      </div>
      <div class="hotItem"
           v-for="hotItem in specialZone.hotItemList"
           :key="hotItem.id">
        <p class="itemTitle hotItemTitle">{{hotItem.title}}</p>
        <p class="itemSubTitle">{{hotItem.subtitle}}</p>
        <img class="itemImg"
             v-lazy="hotItem.imageOne"
             alt="">
        <img class="itemImg"
             v-lazy="hotItem.imageTwo"
             alt="">
      </div>
      <div class="vipItem"
           v-for="vipItem in specialZone.vipItemList"
           :key="vipItem.id">
        <p class="itemTitle vipItemTitle">{{vipItem.title}}</p>
        <p class="itemSubTitle">{{vipItem.subtitle}}</p>
        <img class="itemImg"
             v-lazy="vipItem.imageOne"
             alt="">
        <img class="itemImg"
             v-lazy="vipItem.imageTwo"
             alt="">
      </div>
      <div class="otherItem"
           v-for="otherItem in specialZone.otherItemList"
           :key="otherItem.id">
        <p class="itemTitle">{{otherItem.title}}</p>
        <p class="itemSubTitle">{{otherItem.subtitle}}</p>
        <img class="itemImg"
             src="../../../../images/special/peanut.jpeg"
             alt="">
      </div>
      <div class="lowPrice"
           v-for="lowPriceItem in specialZone.lowPriceItemList"
           :key="lowPriceItem.id">
        <p class="itemTitle">{{lowPriceItem.title}}</p>
        <p class="itemSubTitle">{{lowPriceItem.subtitle}}</p>
        <img class="itemImg"
             :src="lowPriceItem.image"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialZone',
  props: {
    specialZone: Object
  }
}
</script>

<style lang="less" scoped>
#specialZone {
  margin-top: 0.1rem;
  padding: 0.44rem 0 0.3rem;
  background-color: #fff;
  .title {
    margin-left: 0.1rem;
    padding-left: 0.1rem;
    border-left: 0.08rem #3cb963 solid;
    font-size: 0.5rem;
  }
  .wrapperItem {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0.3rem 2.5% 0;
    font-size: 0.24rem;
    box-sizing: border-box;
    .newItem {
      width: 49%;
      height: 1.76rem;
      border: 0.02rem #dddbc0 solid;
    }
    .hotItem {
      width: 49%;
      height: 1.76rem;
      border-top: 0.02rem #dddbc0 solid;
      border-right: 0.02rem #dddbc0 solid;
      border-bottom: 0.02rem #dddbc0 solid;
    }

    .vipItem {
      width: 49%;
      height: 1.76rem;
      border-left: 0.02rem #dddbc0 solid;
      border-bottom: 0.02rem #dddbc0 solid;
      border-right: 0.02rem #dddbc0 solid;
    }

    .otherItem {
      width: 24.5%;
      height: 1.76rem;
      border-bottom: 0.02rem #dddbc0 solid;
    }
    .lowPrice {
      width: 24.5%;
      height: 1.76rem;
      border-left: 0.02rem #dddbc0 solid;
      border-bottom: 0.02rem #dddbc0 solid;
      border-right: 0.02rem #dddbc0 solid;
    }
    .itemTitle {
      padding: 0.1rem 0 0 0.2rem;
      background-image: linear-gradient(135deg, red, orange);
      -webkit-background-clip: text;
      color: transparent;
    }
    .itemSubTitle {
      padding: 0.1rem 0 0 0.2rem;
      color: grey;
    }
    .itemImg {
      width: 1rem;
      height: 0.8rem;
      padding: 0.2rem 0 0 0.4rem;
    }
    .vipItemTitle {
      background-image: linear-gradient(150deg, #0e9e09, #51b14d);
      -webkit-background-clip: text;
      color: transparent;
    }
    .hotItemTitle {
      background-image: linear-gradient(150deg, #b2233f, #f70d3c);
      -webkit-background-clip: text;
      color: transparent;
    }
  }
}
</style>