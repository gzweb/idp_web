<template>
  <div id="app" :style="{paddingTop:getTop+'px'}">
    <!-- <router-view/> -->

    <keep-alive :include="includeList">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
        paddingTop:'0'
    }
  },
	computed:{
		includeList(){
			return this.$store.state.includeList
    },
    getTop(){
			return this.$store.state.appTop
		}
	}
};
</script>

<style lang="scss">
@import '~nprogress/nprogress.css';
body,
html {
  // height: 100%;
  background-color: white;
  .van-overlay {
    background: none;
  }
}
#app {
  height: 100%;
  font-family: "Arial", "Microsoft YaHei", "思源黑体", "SimHei", "Avenir",
    Helvetica, sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .application-tips {
    font-size: 14px;
    color: #9AA8B3;
  }
  .application-page .input,.application-page .textarea,.capital-input  {
    text-transform:uppercase;
  }.input {
    height: 3rem;
    box-shadow: none;
    color: #242c32;
    
    border-color: #aab3bb;
  }
 
  .file-cta,.file-name {
    border-color: #aab3bb;
  }
  ::-webkit-input-placeholder,::-webkit-textarea-placeholder {
    color: #697782;
    text-transform:none;
  }
  
  .select select {
    height: 3rem;
    border-color: #aab3bb;
  }
  .select {
    &::after {
      margin-top: 0;
      border-color:#d81734;
    }
  }
  .button {
    height: 3rem;
    border: none;
    transition: all 0.5s;
  }
  .button-style {
    color: white;
    background-color: #d81734;
  }
  .title-style-1 {
    position: relative;
    width: 100%;
    text-align: center;
    color: white;
    padding-bottom: 16px;
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 60px;
      height: 4px;
      content: "";
      background: #e31b38;
    }
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.fadeIn {
  animation-name: fadeIn;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 3.25rem, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  animation-name: fadeInUp;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@media screen and (max-width: 768px) {
  #app {
    .application-view .application-ctx,.application-view .application-title {
        padding: 0 20px;
    }
    
    .rellax-pic {
      height: 250px;
    }
    .notifications-view {
      margin-top: 20px;
    }
    .contact-us-view {
      img {
        margin: 0 auto;
      }
    }
    .faq-wrap {
      width: 90%;
      margin: 0 auto;
    }
    .contact-us-item {
      margin-top: 0 !important;
    }
    .slide-button {
      width: 240px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
    }
    .home-ctx {
        color: white;
        p {
            font-size: 20px;
            text-align: center;
        }
        ul {
            width: 60%;
            margin: 30px auto 0;
            font-size: 14px;
        }
        li {
            margin-top: 10px;
            &::before {
              top: 8px;
            }
        }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 1087px) {
  #app {
    .rellax-pic {
      height: 350px;
    }
    .contact-us-view {
      img {
        margin: 0 auto;
      }
    }
  }
}

@media screen and (min-width: 1921px) {
  #app .parent-slide .slide-img {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    transform: scale(2);
  }
}

@media screen and (max-width: 1087px) {
}

@media screen and (min-width: 1088px) {
}

@media screen and (min-width: 1088px) and (max-width: 1279px) {
}

@media screen and (min-width: 1280px) {
}

@media screen and (min-width: 1280px) and (max-width: 1471px) {
}

@media screen and (min-width: 1472px) {
}
</style>
