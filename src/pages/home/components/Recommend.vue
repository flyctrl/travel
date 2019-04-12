<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~Styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      display: block
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      min-width: 0
      .item-title
        line-height: .6rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #929090
        ellipsis()
      .item-button
        line-height: .54rem
        margin-top: .16rem
        background: #ff9300
        border-raduis: .6rem
        padding: 0 .3rem
        color: #fff
        cursor: pointer
</style>
