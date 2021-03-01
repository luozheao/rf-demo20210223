<template>
  <div style="border: 1px solid red">
    人员统计信息:
    <br />
    男:{{ obj.man }},女:{{ obj.woman }}

    <br />
    <button @click="getData">获取数据</button>
    {{ obj1 }}
  </div>
</template>


<script>
// import axios from 'axios'
export default {
  data() {
    return {
      obj: {},
      obj1: { a: 1 },
    }
  },
  mounted() {},
  methods: {
    getData() {
      // axios.get('/api/v4/answer_later/count').then((data) => {
      //   console.log(data)
      // })
      this.obj1 = Object.assign({}, this.obj1, 'c', 20)
    },
  },
  watch: {
    '$store.state': {
      deep: true,
      handler(n, o) {
        console.log(n, o)
        this.obj = n.obj
      },
    },
  },
}
</script>


<style scoped>
</style>