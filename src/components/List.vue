<template>
  <div>
    <v-card class="pa-3 mb-2" :class="{'done' : list.status==='done'}" v-for="(list,index) in todoList" :key="index">
        <p>{{ list.memo }}</p>
        <!-- Done -->
        <v-btn v-if="list.status === 'created'" fab flat small color="green" @click="changeStatus(index, 'done')"><i class="fa-solid fa-check"></i></v-btn>
        <!-- Restore -->
        <v-btn v-if="list.status === 'done'" fab flat small color="blue" @click="changeStatus(index, 'created')"><i class="fa-solid fa-arrows-rotate"></i></v-btn>
        <!-- Delete -->
        <v-btn v-if="list.status !== 'edit'" fab flat small color="red" @click="deleteMemo(index)"><i class="fa-solid fa-trash-can"></i></v-btn>
        <!-- Edit -->
        <v-btn v-if="list.status === 'created'" fab flat small color="yellow" @click="editMemo(list.memo,index,'edit')"><i class="fa-solid fa-edit"></i></v-btn>
    </v-card>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import { mapState } from 'vuex';

export default {
    computed: {
      ...mapState(['todoList'])
    },
    methods: {
      changeStatus(index, status){
        this.$store.dispatch('changeStatus', {status,index})
      },
      deleteMemo(index) {
        this.$store.commit('deleteMemo', index)
      },
      editMemo(memo,index,status){
        eventBus.$emit('listEdit',memo,index,status)
        this.$store.dispatch('changeStatus', {status,index})
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