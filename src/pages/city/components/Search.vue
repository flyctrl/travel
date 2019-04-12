<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleChangeCity(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item" v-show="hasNodata">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasNodata () {
      return !this.list.length
    }
  },
  methods: {
    handleChangeCity (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        let result = []
        for (let item in this.cities) {
          this.cities[item].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~Styles/varibles.styl'
  .search
    margin-top: -0.01rem
    height: .72rem
    background: $bgColor
    padding: 0.05rem .1rem
    .search-input
      border: none
      outline: none
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      display: block
      color: #666
      padding: 0 .1rem
      border-radius: .06rem
      text-align: center
  .search-content
    z-index: 1
    position: absolute
    top: 1.66rem
    bottom: 0
    right: 0
    left: 0
    background: #eee
    overflow: hidden
    .search-item
      line-height: .56rem
      background: #fff
      padding-left: .2rem
</style>
