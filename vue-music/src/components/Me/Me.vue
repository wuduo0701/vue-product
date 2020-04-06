<template>
  <div class="container">
    <div class="setme" @click="SetMe">
      <div class="My">我的</div>
      <el-avatar shape="circle" :src="avatorURL" :size="80" class="avatar"></el-avatar>
      <div class="name">{{name}}</div>
      <div class="tag">{{tag}}</div>
			<i class="el-icon-arrow-right right-arrow"></i>
    </div>
		<div class="line"></div>	
		<div class="message" @click="Message">
			<i class="el-icon-chat-round icon"></i>
			<div class="content">消息</div>
		</div>
		<div class="line"></div>
		<div class="message" @click="like">
			<i class="el-icon-star-off icon"></i>
			<div class="content">我的喜欢</div>
		</div>
		<div class="line"></div>
		<div class="message" @click="Download">
			<i class="el-icon-download icon"></i>
			<div class="content">下载的音乐</div>
			<div class="musicNum">{{download}} 首</div>
		</div>
		<div class="line"></div>		
		<div class="message" @click="Likelist">
			<i class="el-icon-refresh-right icon"></i>
			<div class="content">最近播放</div>
			<div class="musicNum">{{Recent_music}} 首</div>
		</div>
		<div class="line"></div>	
  <!-- <router-view/> -->
	</div>
</template>
<script>
export default {
  data(){
    return{
      avatorURL:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "朵雾",
			tag:"❤",
			download: 20,		//下载的音乐
			Recent_music: 5		//最近播放
    }
  },
  computed:{
	},
	methods:{
		SetMe(){
			this.$router.push('/setme')
		},
		Message(){
			this.$router.push('/message')
		},
		like(){
			this.$router.push('/like')
		},
		Download(){
			this.$router.push('/download')
		},
		Likelist(){
			this.$router.push('/likelist')
		}
	}
}
</script>
<style lang="stylus" scoped>
.container
  width 100%
  background-color #000000
  height 100vh
  .setme
    height 150px
    .My
      margin-left 20px
      font-size 24px
      color #fff
    .avatar
      margin 20px
    .name
      position relative 
						top -100px
      left 120px
      color #fff
    .tag
      position relative 
      top -90px
      left 120px
			color #fff	
	.message
		height 80px
		.content
			font-size 15px
			position relative
			left 60px
		.musicNum
			position relative
			left 500px
			font-size 14px
			top -10px
			transform: translate(-50%, -50%)	
			color rgb(126,126,126)
	li
	list-style-type: none
.icon 
	position relative
	top 32px
	left 40px
	transform: translate(-50%, -50%)	
.right-arrow
	position relative
	top -130px
	left  340px
.line
  margin 0 auto
  margin-left 10px
  margin-right 10px
  height 2px
  background-color rgb(23,23,23)
</style>