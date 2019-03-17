<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="item.title"/>
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
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
          title: '温泉必游',
          desc: '为你量身打造绿色健康生活方式，远离都市的喧嚣，工作的烦恼，还你一个悠闲静雅之旅'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1503/38/3806235c8444b759.water.jpg_200x200_c152fb10.jpg',
          title: '周庄',
          desc: '为你量身打造绿色健康生活方式，远离都市的喧嚣，工作的烦恼，还你一个悠闲静雅之旅'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1503/38/3806235c8444b759.water.jpg_200x200_c152fb10.jpg',
          title: '周庄',
          desc: '为你量身打造绿色健康生活方式，远离都市的喧嚣，工作的烦恼，还你一个悠闲静雅之旅'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .4rem
    text-indent: .2rem
    text-align: left
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    text-align: left
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
