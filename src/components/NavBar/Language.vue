<template>
    <div class="navbar-item language-navbar-item is-paddingless">
        <div class="dropdown" :class="{'is-active':isLanguage}">
            <div class="dropdown-trigger is-hidden-mobile">
                <div class="navbar-button" :class="{'navbar-button-active':isLanguage,'other-navbar-button':!type}" @click="isLanguage=!isLanguage">{{getLanguage}}</div>
            </div>
            <div class="dropdown-trigger is-hidden-tablet">
                <div class="navbar-button" :class="{'navbar-button-active':isLanguage,'other-navbar-button':!type}" @click="isLanguage=!isLanguage">{{getLanguage}}</div>
            </div>

            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content is-6">
                    <a class="dropdown-item" @click="setLanguage(key)" v-for="(item,key) in 3" :key="key">
                        <template v-if="key == 0">简体中文</template>
                        <template v-else-if="key == 1">繁體中文</template>
                        <template v-else-if="key == 2">English</template>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props:['type'],
    data() {
		return {
            isLanguage:0
		}
    },
    computed:{
        getLanguage(){
            // switch

            let language;



            switch(this.$store.state.language) {
                case 'cn':
                    language = '简体中文'
                    break;
                case 'zh':
                    language = '繁体中文'
                    break;
                case 'en':
                    language = 'English'
                    break
            }

            return language
        }
    },
	methods: {
		setLanguage(key) {

			let language = ["cn", "zh", "en"];
            localStorage.setItem('language',language[key]);  

            window.location.reload();
		}
	}
}
</script>

<style lang="scss">
    .navbar-button {
        width: 80px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        font-size: 14px;
        cursor: pointer;
        color: white;
        border: 1px solid white;
        border-radius: 35px;
        transition: all 0.5s;
    }
    .navbar-button-active,.other-navbar-button {
        border: 1px solid #D71735;
        color: #D71735;
    }

    #app {
        .language-navbar-item {
            margin-left: 30px;
        }
        .language-item {
            cursor: pointer;
            transition: all 0.5s;
            &:hover {
                color: #D71735;
            }
        }
        .dropdown-menu {
            width: 120%;
            min-width: inherit;
        }
    }
</style>
