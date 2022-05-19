import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
    memo: null,
    editTodo: null,
  },
  mutations: {
    listAdd: (state, payload) => { state.todoList.push(payload) },
    changeStatus: (state, payload) => { state.todoList[payload.index].status = payload.status },
    deleteMemo: (state, payload) => { state.todoList.splice(payload, 1) },
    listEdit: (state,payload) => { state.todoList[payload.index].memo = payload.memo },
  },
  actions: {},
  getters: {
    ListLength: (state) => { return state.todoList.length },
    ListDone: (state) =>{
      let count = 0;
      var i
      if(state.todoList.length !== 0){
        for(i = 1; i <= state.todoList.length; i++) {
          if(state.todoList[i-1].status === "done"){
            count += 1;
          }
        }
      }
      return count;
    }
  },
})
