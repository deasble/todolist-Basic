<template>
  <div class="Header">
    <h1> 투두 리스트</h1>
    <p>전체 할일: {{ ListLength }} / 완료된 할일: {{ ListDone }} / 남은 할일: {{ ListLength-ListDone }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['ListLength', 'ListDone'])
  },
}
</script>

<style  scoped>
.Header h1{
    padding: 0 0 10px;
}
</style>