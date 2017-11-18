import qyy1 from './img/qyy1.jpg'
import qyy2 from './img/qyy2.jpg'
import qyy3 from './img/qyy3.jpg'
import $68 from './img/6.8.jpg'
const qyys = [
  './img/6.8.jpg',
  './img/grid/5.jpg',
  './img/4.22.jpeg',
  './img/1.6.jpeg',
  './img/12.26.jpeg',
  './img/12.17.jpeg',
  './img/12.14.jpeg',
  './img/12.11.jpeg',
  './img/11.11.jpeg',
  './img/10.29.jpeg',
  './img/10.5.jpeg',
  './img/9.23.jpeg'
]
const data = {
  articles: [
    { date: '17/6/8 ', text: '👹已经有了很多，意外的收获更加觉得幸运', pic: $68 },
    { date: '17/5/25', text: '软件院“毕业晚会”，三个节目，真的牛' },
    { date: '17/4/21', text: '当志愿者真的很爽耶 当然 最后还是被恐龙吃掉了 啊！ ' },
    {
      date: '17/1/6',
      text:
        '感动到要命的一天 从陆续收到宝贝们寄来的礼物 到 凌晨我仙女们的祝福和一天的相伴 中午的聚餐 下午1611的大屏幕惊喜和尬舞环节 晚上家人的陪伴 快乐 难忘 感激 喜欢把情感放在心里的我 真诚的说 我好喜欢 真的爱你们！我身边的人！ 好开心！好想每天都过生日啊！\n              '
    },
    { date: '2016/12/26', text: '419 的小仙女收到的礼物' },
    { date: '2016/12/17', text: '团日活动' },
    { date: '16/12/14', text: '礼仪风采大赛' },
    { date: '2016/12/11', text: '敬老院' },
    { date: '16/11/11', text: '六只单身汪的光棍节' },
    { date: '2016/10/29', text: '嘻嘻嘻嘻嘻' },
    { date: '2016/10/5', text: '长胖10000KG' },
    {
      date: '2016/9/23',
      text:
        ' 和很多人的一样 它开始是令人抵制的 到最后是令人不舍的 每天晚上的小游戏都让陌生的群体更加团结 每一份用汗水 勇气换来的小奖励都更加值得珍惜n                一起拉歌 一起搞事情 一起保护小土豆儿 一些看起来十分幼稚的东西反而都让我们成长 担当 勇气 坚持 选择 记得不要被人潮淹没 要赢就赢那悠长的岁月'
    }
  ],
  selfies: [
    {
      title: '2015',
      text: '很好看的写真，可是我好像除了说： 卧槽，很漂亮就不知道怎么形容咯。',
      pic: qyy1
    },
    {
      title: '2015',
      text: '很好看的写真，可是我好像除了说： 卧槽，很漂亮就不知道怎么形容咯。',
      pic: qyy2
    },
    {
      title: '2015',
      text: '很好看的写真，可是我好像除了说： 卧槽，很漂亮就不知道怎么形容咯。',
      pic: qyy3
    }
  ],
  hero: {
    title: 'For You',
    subtitle: `It's a website that helps me remember the only girl I like in university`,
    small: `Something is like a cloud of smoke but something will last forever. 
Hope you can remember me after graduation.`
  }
}

// qyys.forEach(
//   async (qyy, i) => {
//     const img = await import(qyy)
//     data[i].pic = img
//   }
// )
export default data
