<template>
  <div>
      <v-textarea
          outline
          v-model="memo"
          label="투두리스트를 입력해주세요."
          ref="memofocus"
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
            this.focusMemo();
        })
    },
    mounted() {
        this.focusMemo();
    },
    methods:{
        listAdd() {
            this.$store.dispatch('AddAndEdit', {memo: this.memo, status: this.status})
            this.memo = null
            this.focusMemo()
        },
        listEdit() {
            this.$store.dispatch('AddAndEdit',{memo: this.memo, index: this.index})
            this.status = 'created'
            this.$store.dispatch('changeStatus', {status: this.status, index: this.index})
            this.memo = null
            this.focusMemo()
        },
        focusMemo() {
            this.$refs.memofocus.focus()
        }
    },
}
</script>

<style>

</style>