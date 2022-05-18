<template>
  <div>
    <v-card class="pa-3 mb-2" :class="{'done' : list.status==='done'}" v-for="(list,index) in todoList" :key="index">
        <p>{{ list.memo }}</p>
        <!-- done -->
        <v-btn v-if="list.status === 'created'" fab flat small color="green" @click="changeStatus(index, 'done')"><i class="fa-solid fa-check"></i></v-btn>
        <!-- restore -->
        <v-btn v-if="list.status === 'done'" fab flat small color="blue" @click="changeStatus(index, 'created')"><i class="fa-solid fa-arrows-rotate"></i></v-btn>
        <!-- Delete -->
        <v-btn fab flat small color="red" @click="deleteMemo(index)"><i class="fa-solid fa-trash-can"></i></v-btn>
        <!-- created -->
        <v-btn v-if="list.status === 'created'" fab flat small color="yellow" @click="editMemo(list.memo)"><i class="fa-solid fa-edit"></i></v-btn>
    </v-card>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    computed: {
      todoList() {
        return this.$store.state.todoList;
      }
    },
    methods: {
      changeStatus(index, status){
        this.$store.commit('changeStatus', {status,index})
      },
      deleteMemo(index) {
        this.$store.commit('deleteMemo', index)
      },
      editMemo(memo){
        this.$store.commit('editMemo', {memo})
      },
    }
}
</script>

<style scoped>
.done{
  background-color: rgba(0, 0, 0, 0.1);
}
.done p {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
}
</style>