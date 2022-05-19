<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 text-xs-center>
        <Header />  
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
import Header from './Header.vue'
import List from './List.vue'
import ListAdd from './ListAdd.vue'

export default {
  components:{
    Header,
    List,
    ListAdd,
  },
}
</script>