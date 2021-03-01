<template>
  <div>
    <List />
    <div>
      人员信息登记: 名字:<input v-model="msgObj.name" /> 年龄:<input
        v-model="msgObj.age"
      />
      性别:<input v-model="msgObj.sex" />
      <button @click="addEvent">登记</button>
      <button @click="syncEvent">同步</button>
    </div>

    <Search :msgArr="msgArr" @updateMsgArr="updateMsgArr" />

    <div>
      <h1>人员信息展示</h1>
      <div v-for="(item, index) in msgArr" :key="index">
        姓名:{{ item.name }} 年龄:{{ item.age }} 性别:{{ item.sex
        }}<button @click="delEvent(index)">删除</button>
        <button @click="editorEvent(index, item)">编辑</button>
      </div>
    </div>

    <div v-show="isShow">
      <h1>人员信息修改</h1>
      名字:<input v-model="updateObj.name" /> 年龄:<input
        v-model="updateObj.age"
      />
      性别:<input v-model="updateObj.sex" />
      <button @click="updateEvent">修改</button>
    </div>
  </div>
</template>


<script>
import Search from '../components/Search'
import List from '../components/List'
export default {
  components: {
    Search,
    List,
  },
  watch: {
    $route: {
      immediate: true,
      handler(n, o) {
        console.log(this.$router, this.$route)
        console.log(n, o)
      },
    },
  },
  data() {
    return {
      isShow: false,

      msgObj: {
        name: '',
        age: '',
        sex: 0, // 0 男 1 女
      },
      curIndex: null,
      updateObj: {},
      saveData: [],
      msgArr: [
        {
          name: 'luo',
          age: 3,
          sex: 0,
        },
        {
          name: 'luojie',
          age: 13,
          sex: 0,
        },
      ],
    }
  },
  methods: {
    syncEvent() {
      let man = 0
      let woman = 0
      this.msgArr.forEach((item) => {
        if (item.sex == 0) {
          man++
        } else {
          woman++
        }
      })
      this.$store.commit('commitArrMsg', { man, woman })
    },
    updateMsgArr(res) {
      this.msgArr = res
    },
    addEvent() {
      // 1.添加
      this.msgArr.push(this.msgObj)
      // 2. 清空
      this.msgObj = {
        name: '',
        age: '',
        sex: 0, // 0 男 1 女
      }
    },
    delEvent(index) {
      this.msgArr.splice(index, 1)
    },
    editorEvent(index, item) {
      this.isShow = true
      this.curIndex = index
      //   this.updateObj =  Object.assign({},item)
      this.updateObj = JSON.parse(JSON.stringify(item))
    },
    updateEvent() {
      this.msgArr.splice(this.curIndex, 1, this.updateObj)
    },
  },
}
</script>


<style scoped>
</style>