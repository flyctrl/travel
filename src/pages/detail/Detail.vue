<template>
  <div>
    <detail-banner
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
      :sightName="sightName"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import api from 'Utils/api'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo () {
      api.Common.getDetail({
        id: this.$route.params.id
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (data) {
      console.log(data)
      this.bannerImg = data.bannerImg
      this.list = data.categoryList
      this.gallaryImgs = data.gallaryImgs
      this.sightName = data.sightName
    }
  },
  data () {
    return {
      bannerImg: '',
      gallaryImgs: [],
      sightName: '',
      list: []
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
