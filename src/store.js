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
  actions: {
    SET_TODOLIST: ({commit}, payload) => {
      const memoValid = /\n/
      if(memoValid.test(payload.memo) || payload.memo === null || payload.memo === ""){
        alert("다시 입력해주세요.")
      } else if(payload.index === undefined){
        commit('listAdd', payload)
      } else {
        commit('listEdit', payload)
      }
    },
    SET_STATUS: ({commit}, payload) => { commit('changeStatus', payload) },
    DELETE_MEMO: ({commit}, payload) => { commit('deleteMemo', payload) }, 
  },
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
