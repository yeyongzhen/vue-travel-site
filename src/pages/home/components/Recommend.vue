<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList">
        <img class="item-img" :src="item.imgUrl" alt="item.title"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1503/38/3806235c8444b759.water.jpg_200x200_c152fb10.jpg',
          title: '周庄',
          desc: '古香古色，品美食寻才子觅佳人'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1503/38/3806235c8444b759.water.jpg_200x200_c152fb10.jpg',
          title: '周庄',
          desc: '古香古色，品美食寻才子觅佳人'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1503/38/3806235c8444b759.water.jpg_200x200_c152fb10.jpg',
          title: '周庄',
          desc: '古香古色，品美食寻才子觅佳人'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .4rem
    text-indent: .2rem
    text-align: left
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      text-align: left
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16em
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
