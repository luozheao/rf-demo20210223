<template>
  <div>
    人名搜索: <input v-model="key" /><button @click="searchEvent">搜索</button>
    <button @click="resetEvent">复原</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      key: '',
      saveData: [],
    }
  },
  name: 'Search',
  props: ['msgArr'],
  methods: {
    searchEvent() {
      let key = this.key
      let res = this.msgArr.filter((item) => {
        return item.name.indexOf(key) > -1
      })
      this.saveData = this.msgArr // 保存
      //   this.msgArr = res
      this.$emit('updateMsgArr', res)
    },
    resetEvent() {
      this.$emit('updateMsgArr', this.saveData)
    },
  },
}
</script>


<style scoped>
</style>

