import Mock from 'mockjs'

const dataList = {
  'orders|100':[{
    "_id|+1":1, //id自增
    "name": "@cname",
    "orderDate": "@datetime",
    "status": "@pick(['created','cancer','completed'])",
    "Fee":  "@float(0,8,0,2)",
    "price":  "@float(20,108,0,2)"
  }]
}
// url   ==  node api url
Mock.mock('/api/orders',  'post', dataList)

//假数据生产
export default Mock;