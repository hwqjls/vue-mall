import {
  INIT_SHOP_CART,
  INIT_USER_INFO,
  ADD_GOODS,
  ADD_TO_CART
} from './mutation-type'
import Vue from 'vue'

import {
  getLocalStore,
  setLsetLocalStore,
  removeLocalStore,
  setLocalStore
} from '../config/global'
import { Toast } from 'vant';
import router from '@/router/index'

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
  },
  [ADD_GOODS] (state, { goodsID, goodsName, smallImage, goodsPrice }) {
    let shopCart = state.shopCart;
    if (shopCart[goodsID]) {
      shopCart[goodsID]['num']++
    } else {
      shopCart[goodsID] = {
        'num': 1,
        'id': goodsID,
        'name': goodsName,
        'price': goodsPrice,
        'smallImage': smallImage,
        'checked': true
      }

      state.shopCart = {
        ...shopCart
      };
    }
    setLocalStore('shopCart', state.shopCart);
  },
  [ADD_TO_CART] (state, goods) {
    if (state.userInfo.token) {
      setTimeout(() => {
        this.commit('ADD_GOODS', {
          goodsID: goods.id,
          goodsName: goods.name,
          smallImage: goods.small_image,
          goodsPrice: goods.price
        })
        Toast({
          message: '成功加入购物车',
          duration: 800
        })
      }, 900);
    } else {
      router.push('/login');
    }
  }
}