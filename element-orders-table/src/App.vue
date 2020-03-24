<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <div>根据标题查询:
      <el-input v-model="listQuery.title" placeholder="Title"
      style="width:200px;" class="filter-item"
      @change="getList"
      ></el-input>
      根据作者查询:
      <el-input v-model="listQuery.author" placeholder="Author"
      style="width:200px;" class="filter-item"
      @change="getList"
      ></el-input>
      <el-button type="primary" plain @click="sort">倒序排序</el-button>
    </div>
    <el-table :data="list">
      <el-table-column label="ID" prop="id" 
      align="center" width="80">
      </el-table-column>
      <el-table-column label="Title" prop="title" 
      align="center" width="500">
        <template slot-scope="{row}">
          <span class="link-type">{{row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Author" prop="author" 
      align="center" width="100">
      </el-table-column>
      <el-table-column label="Reviewer" prop="reviewer" 
      align="center" width="100">
      </el-table-column>
      <el-table-column label="Content_short" prop="content_short" 
      align="center" width="150">
      </el-table-column>
      <el-table-column label="type" prop="type" 
      align="center" width="100">
      </el-table-column>
      <el-table-column label="Status" prop="status" 
      align="center" width="100">
      </el-table-column>
      <el-table-column label="display_time" prop="display_time" 
      align="center" width="160">
      </el-table-column>
      <el-table-column label="pageviews" prop="pageviews" 
      align="center" width="100">
      </el-table-column>
      <el-table-column label="platforms" prop="platforms" 
      align="center" width="100">
      </el-table-column>
      <el-table-column label="timestamp" prop="timestamp" 
      align="center" width="200">
      </el-table-column>
    </el-table>
    <el-pagination  
      @current-change="getList" 
      :total="total" 
      :page-size="listQuery.limit"
      layout="total, prev, pager, next"
      :current-page.sync="listQuery.page"
    />
  </div>
</template>

<style>
</style>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      list: [],
      total: 0,
      listLoading: false,
      // ?
      listQuery: {
        limit: 20,
        page:1,
        title: '',
        author:'',
        id: ''
      }
    }
  },
  created() {
    this.getList();
    this.sort()
  },
  methods: {
    getList() {
      Axios.get('/vue-element-admin/article/list', {
        params: this.listQuery // 查询对象  发过去
      })
      .then(response => {
        console.log(response);
        this.list = response.data.list
        this.total = response.data.total
      })
    },
    sort(){
      Axios.get('/vue-element-admin/article/list')
      .then(response => {
        console.log(response);
        // this.list = response.data.list.split(',').reverse().join(","); 
        // this.total = response.data.total
        for(let i = 100;i>0;i--){
          this.list[100-i] = response.data.list[i]
        }
      })
      // list1 = this.list.split(',').reverse().join(","); 
      // this.list = list1
    }
  }
}
</script>