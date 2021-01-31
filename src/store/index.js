import Vue from 'vue'
import Vuex from 'vuex'
import Data from '../Api/data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    TotalPrize:0,
    pay:false,
  },
  mutations: {
    updateHandleProduct(state, data,){
      const item = state.products.find(i=>{
        return i.product.id === data.id
      })
      if(item === undefined || item === null){
        const newData = new Object({
          product:data,
          quantity: 1,
          totalPrize: data.prize
        })
        state.products.push(newData)
      }else if(item){
        item.quantity++
      }
    },
    clear(state){
      state.products = []
      state.pay = false
    },
    pay(state){
      if(state.products.length !== 0){
        state.pay = true
      }
    },
  },
  actions: {
    handleProduct(ctx, id){
      const data = Data.filter(p=>{
        return p.id === id
      })
      ctx.commit("updateHandleProduct", data[0])
    },
    clear(ctx){
      ctx.commit("clear")
    },
    Pay(ctx){
      ctx.commit("pay")
    },
  },
  getters:{
    products(state){
      return state.products
    },
    allItem(state){
      const q = state.products.map((p)=>{
        return p.quantity
      })
      const totalItem = q.reduce((totalItem, i)=>{
        return i + totalItem
      }, 0)
      return totalItem
    },
    allPrizeItem(state){
      const all = state.products.map((p)=>{
        return p.quantity*p.product.prize
      })
      const total = all.reduce((totalPrize, i)=>{
        return i + totalPrize
      }, 0)
      return state.TotalPrize = total
    }
  }
})
