<template>
  <div>
      <v-textarea
          outline
          v-model="memo"
          label="투두리스트를 입력해주세요."
          @keyup.enter="listAdd"
        ></v-textarea>
        <v-btn v-if="mode === 'add'" @click="listAdd">리스트 추가</v-btn>
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
            mode: 'add',
        }
    },
    created() {
        eventBus.$on('listEdit', (memo,index) => {
            this.memo = memo;
            this.index = index;
            this.mode = 'edit';
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
            this.mode = 'add',
            this.memo = null;
        }
    },
}
</script>

<style>

</style>