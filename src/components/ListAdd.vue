<template>
  <div>
      <v-textarea
          outline
          v-model="memo"
          label="투두리스트를 입력해주세요."
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
            mode: 'add',
        }
    },
    computed: {
        todo() {
            return this.$store.state.todo;
        }
    },
    created() {
        if(this.todo !== null) {this.memo = this.todo}
    },
    methods:{
        listAdd(){
            if(this.memo === null || this.memo.includes(`\n`)){
                alert("할일을 입력해주세요.");
            } else {
                this.$store.commit('listAdd', {memo: this.memo, status: 'created'});
                this.clearList();
            }
        },
        clearList(){
            this.memo = null
        },
        listEdit(){
            if(this.memo === null || this.memo.includes(`\n`)){
                alert("할일을 입력해주세요.")
            } else {
                this.clearList();
                this.mode = 'add';
            }
        }
    }
}
</script>

<style>

</style>