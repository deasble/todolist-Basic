<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12 text-xs-center>
      <h1> 투두 리스트</h1>
      <!-- <p>전체 할일: {{ todoList.length }} / 완료된 할일: {{ countDone }} / 남은 할일: {{ todoList.length-countDone }}</p> -->
    </v-flex>
    <v-flex xs6 pa-2>
      <List />
    </v-flex>
    <v-flex xs6 pa-2>
      <ListAdd />
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import List from './List.vue'
import ListAdd from './ListAdd.vue'

export default {
  components:{
    List,
    ListAdd,
  },
}
</script>