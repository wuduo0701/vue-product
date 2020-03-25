1. mongodb 与 mysql的本质区别？
  - NOSQL SQL 数据库三大范式
  - NOSQL doc 允许一定的存储冗余

  user_id name orders
  1.  只能是订单  分页  element-ui  PC后台  iview 移动端
    
  2. 用户来说 最多的查询是什么？  查询需求更大
    price ->  products  推荐
    orders  我的订单  user_id name  不需要关联 user 表


  3. 总销量
    total -> order  _id
    $sum  += total

aggregate 应用场景
- 第一季度  orderDate ISODate() $lt $gt 范围查询
- 每个州  $state  分组的依据  $group  state
- 销量   orderLines.sku $group  分组  $sun  orderLines.qty
- sku

$match  == where
  有效订单  status： "completed"

  state + sku 分组
  每个订单中
  $unwind 展开orderLindes 展开
  $group  分组

  db.orders.aggregate([ { $match:{   status: "completed",   orderDate: {      $gte: ISODate("2019-01-01"),      $lt:  ISODate("2019-04-01")   } } }, { $unwind: "$orderLines" }, {    $group:{      _id:{          state: "$state",          sku:"$orderLines.sku"      },      count: {            $sum: "$orderLines.qty"      }     }  }, {     $sort: {        "_id.state": 1,        "count": -1      } } ,{    $group:        {         _id: "$_id.state",         sku: {            $first: "$_id.sku"         },         count: {             $first: "$count"         }       } }])