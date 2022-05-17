<template>
  <div>
    <v-card class="pa-3 mb-2" :class="{'done' : list.status==='done'}" v-for="(list,index) in todoList" :key="index">
        <p>{{ list.memo }}</p>
        <!-- 완료 -->
        <v-btn v-if="list.status === 'created'" fab flat small color="green" @click="$emit('statusControl',index, 'done')"><i class="fa-solid fa-check"></i></v-btn>
        <!-- 부활 -->
        <v-btn v-if="list.status === 'done'" fab flat small color="blue" @click="$emit('statusControl',index, 'created')"><i class="fa-solid fa-arrows-rotate"></i></v-btn>
        <!-- 삭제 -->
        <v-btn fab flat small color="red" @click="$emit('listDelete',index)"><i class="fa-solid fa-trash-can"></i></v-btn>
        <v-btn v-if="list.status === 'created'" fab flat small color="yellow" @click="listEdit(list.memo,index)"><i class="fa-solid fa-edit"></i></v-btn>
    </v-card>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    props: ['todoList'],
    methods: {
      listEdit(memo,index){
        eventBus.listEdit(memo,index)
      }
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