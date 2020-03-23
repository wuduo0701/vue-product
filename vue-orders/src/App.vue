<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <h1 class="center">订单管理</h1>
    <el-table v-loading="listLoading" :data="list">
      <el-table-column label="ID" prop="_id" align="center" width="80">
        <template slot-scope="{row}">
          <span class="red">{{row._id}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="OrderDate" prop="orderDate" align="center" width="500">
        <template slot-scope="{row}">
          <span>{{row.orderDate}}</span>
        </template>
      </el-table-column>
      <el-table-column label="status" prop="status" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.status}}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮费" prop="Fee" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.Fee}}</span>
        </template>
      </el-table-column>
      <el-table-column label="单价" prop="price" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.price}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page.sync="page"
      :total="total"
      :pageSize="limit"
      layout="total,prev,pager,next"
      @current-change="handleCurrentChange"
      >
    </el-pagination>
  </div>
</template>

<style>
/* .red{
  color: red;
} */
.center{
  text-align: center;
}
</style>
<script>
import  Axios from  'axios'
export default {
  data() {
    return {
      page: 1,
      total:  100,
      limit:  20, //每页
      listLoading: true,//加载数据中
      list: [
      ]
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.listLoading = false
    // }, 1000)
    Axios.post('/api/orders', {
      params: {

      }
    })
    .then(res => {
      this.list = res.data.orders;
      setTimeout(() => {
        this.listLoading = false
      }, 1000)
    })
  },
  methods:{
    handleCurrentChange(page) {
      console.log(page)
    }
  }
}
</script>