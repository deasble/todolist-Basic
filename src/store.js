import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
    todo: null,
  },
  mutations: {
    listAdd: (state, payload) => { state.todoList.push(payload) },
    changeStatus: (state, payload) => { state.todoList[payload.index].status = payload.status },
    deleteMemo: (state, payload) => { state.todoList.splice(payload, 1) },
    editMemo: (state,payload) => { state.todo = payload },
    listEdit: (state, payload) => { state.todoList[index].memo = payload},
  },
  actions: {},
  getters: {},
})
