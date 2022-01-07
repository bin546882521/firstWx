<template>
  <view class="login-container">
    <!-- 提示登录的图标 -->
    <uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
    <!-- 登录按钮 -->
    <!-- 可以从 @getuserinfo 事件处理函数的形参中，获取到用户的基本信息 -->
    <button type="primary" class="btn-login" open-type="getUserInfo" @getuserinfo="getUserInfo">一键登录</button>
    <!-- 登录提示 -->
    <view class="tips-text">登录后尽享更多权益</view>
  </view>
</template>

<script>
	import badgeMix from '@/mixins/tabbar-badge.js'
	// 1. 从 vuex 中按需导入 mapState 辅助函数
	import { mapState } from 'vuex'
	
	export default {
	  mixins: [badgeMix],
	  computed: {
	    // 2. 从 m_user 模块中导入需要的 token 字符串
	    ...mapState('m_user', ['token']),
	  },
	  data() {
	    return {}
	  },
	  methods: {
	    // 获取微信用户的基本信息
	    getUserInfo(e) {
	      // 判断是否获取用户信息成功
	      if (e.detail.errMsg === 'getUserInfo:fail auth deny') return uni.$showMsg('您取消了登录授权！')
	  
	      // 获取用户信息成功， e.detail.userInfo 就是用户的基本信息
	      console.log(e.detail.userInfo)
	    }
	  }
	}
</script>

<style lang="less">
.login-container {
  // 登录盒子的样式
  height: 750rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;

  // 绘制登录盒子底部的半椭圆造型
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    background-color: white;
    border-radius: 100%;
    transform: translateY(50%);
  }

  // 登录按钮的样式
  .btn-login {
    width: 90%;
    border-radius: 100px;
    margin: 15px 0;
    background-color: #c00000;
  }

  // 按钮下方提示消息的样式
  .tips-text {
    font-size: 12px;
    color: gray;
  }
}
</style>
