import {
  INIT_SHOP_CART,
  INIT_USER_INFO
} from './mutation-type'
import Vue from 'vue'

import {
  getLocalStore,
  setLsetLocalStore,
  removeLocalStore
} from '../config/global'

export default {
  [INIT_SHOP_CART] (state) {
    //存取本地购物车数据
    let initShopCart = getLocalStore('shopCart');
    if (initShopCart) {
      state.shopCart = JSON.parse(initShopCart);
    }
  },
  [INIT_USER_INFO] (state) {
    let initUserInfo = getLocalStore('userInfo');
    if (initUserInfo) {
      state.userInfo = JSON.parse(initUserInfo)
    }
  }
}