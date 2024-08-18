<script setup>
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
const userStore=useUserStore()
const router=useRouter()
const confirm=()=>{
    // console.log("用户要退出登录了");
    //1清除用户信息，触发action函数
    userStore.clearUserInfo()
    //
    //2跳转登录页面
    router.push('/login')
}
</script>

<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="userStore.userInfo.token">
                    <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ userStore.userInfo.account }}</a></li>
                    <li>
                        <el-popconfirm @confirm="confirm" title="是否退出"
                        confirm-button-text="Yes"
                        cancel-button-text="No">
                            <template #reference>
                                <el-button>退出登录</el-button>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><a href="javascript:;">我的订单</a></li>
                    <li><a href="javascript:;">会员中心</a></li>
                </template>
                <template v-else>
                    <li><a href="javascript:;">请先登录</a></li>
                    <li><a href="javascript:;">帮助中心</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.app-topnav{
    background-color: #333;
    ul{
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;
        li{
            a{
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;

                i{
                    font-size: 14px;
                    margin-right: 2px;
                }
                &:hover{
                    color: $xtxColor;
                }
            }
        }
        ~li{
            a{
                border-left: 2px solid #666;
            }
        }
    }
}
</style>