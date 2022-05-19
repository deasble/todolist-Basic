<template>
  <div>
      <v-textarea
          outline
          v-model="memo"
          label="투두리스트를 입력해주세요."
        ></v-textarea>
        <v-btn v-if="status === 'created'" @click="listAdd">리스트 추가</v-btn>
        <v-btn v-else @click="listEdit">리스트 수정</v-btn>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    data(){
        return{
            memo: null,
            index: null,
            status: 'created',
        }
    },
    created() {
        eventBus.$on('listEdit', (memo,index,status) => {
            this.memo = memo;
            this.index = index;
            this.status = status;
        })
    },
    methods:{
        listAdd(){
            if(this.memo === null){
                alert("할일을 입력해주세요.");
            } else {
                this.$store.commit('listAdd', {memo: this.memo.replace(/\n/g,""), status: 'created'});
                this.memo = null;
            }
        },
        listEdit() {
            this.$store.commit('listEdit',{memo: this.memo, index: this.index});
            this.status = 'created',
            this.$store.commit('changeStatus', {status: this.status, index: this.index})
            this.memo = null;
        }
    },
}
</script>

<style>

</style>