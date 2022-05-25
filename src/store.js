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
      state.todoList.forEach(todo => {
        if(todo.status === 'done') count++;
      })
      return count;
    }
  },
})
