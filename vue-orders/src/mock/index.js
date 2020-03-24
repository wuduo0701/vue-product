import Mock from 'mockjs'
const Random = Mock.Random

const total = 100;
const dataList = [];

for(let i = 0;i<total;i++){
  const templete = {
    "_id": i+1,
    "name": Random.name(),
    "orderDate": Random.date(),
    "status": Random.pick(['created','cancer','completed']),
    "Fee": Random.float(0, 20, 0, 2),
    "price": Random.float(10, 200, 0, 2)
  }
  dataList.push(templete)
}
// const dataList = {
//   'orders|100':[{
//     "_id|+1":1, //id自增
//     "name": "@cname",
//     "orderDate": "@datetime",
//     "status": "@pick(['created','cancer','completed'])",
//     "Fee":  "@float(0,8,0,2)",
//     "price":  "@float(20,108,0,2)"
//   }]
// }

// mock 跟后端一样 url 返回结果

// url   ==  node api url
// Mock.mock('/api/orders',  'post', dataList)
// Mock 分页
Mock.mock('/api/orders', 'post', (params) => {
  // console.log(params,'----------')
  const info = JSON.parse(params.body);
  console.log(info)
  let {page = 1, limit = 20} = info.params;
  console.log(page,limit)
  return {
    // dataList,
    total,
    result: dataList.slice((page -1)*limit, page*limit)
  }
})

//假数据生产
export default Mock;