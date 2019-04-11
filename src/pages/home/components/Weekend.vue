<template>
  <div>
    <div class="title">周末游去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~Styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    margin-bottom: .2rem
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 38%
      .item-img
        display: block
        width: 100%
    .item-info
      min-width: 0
      padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #929090
        ellipsis()
</style>
