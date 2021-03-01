<template>
  <div>
    领导发话:
    <button @click="jumpEvent">进行人员登记</button>
  </div>
</template>


<script>
export default {
  data() {
    return {}
  },
  methods: {
    jumpEvent() {
      this.$router.push({ name: 'Msg', params: { msg: '开工啦' } })
    },
  },
}
</script>


<style scoped>
</style>
