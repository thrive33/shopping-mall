<script setup>
import {useCategoryStore} from '@/stores/category.js'
const categoryStore=useCategoryStore()
</script>

<template>
    <header class="app-header">
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">小</RouterLink>
            </h1>
            <ul class="app-header-nav">
                <li class="home"><RouterLink to="/">首页</RouterLink></li>
                <li v-for="item in categoryStore.categoryList" :key="item.id"><RouterLink to="/">{{ item.name }}</RouterLink></li>
             
            </ul>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜索">
            </div> 
        </div>
    </header>
</template>

<style scoped lang="scss">
.app-header{
    background-color: #fff;
    .container{
        display: flex;
        align-items: center;
    }
    .logo{
        width: 200px;
        a{
            display: block;
            height: 132px;
            width: 100%;
            text-indent: 11000px;
            background:url('@/assets/images/logo.png') no-repeat center 16px / contain;
        }
    }
    .app-header-nav{
        width: 1100px;
        display: flex;
        padding-left: 5%;
        position: relative;
        z-index: 998;
        li{
            margin-right: 15px;
            width: 70px;
            text-align: center;
            a{
                font-size: 16px;
                line-height: 32px;
                height: 32px;
                display: inline-block;
                &:hover{
                    color: $xtxColor;
                    border-bottom: 1px solid $xtxColor;
                }
            }
            .active{
                color: $xtxColor;
                border-bottom: 1px solid $xtxColor;
            }
        }
    }

}
.search{
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    .icon-search{
        font-size: 18px;
        margin-left: 5px;
    }
    input{
        width: 140px;
        padding-left: 5px;
        color: #666;
    }
}
</style>