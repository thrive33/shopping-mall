//封装倒计时逻辑函数
import {ref,computed,onUnmounted} from 'vue'
import dayjs from 'dayjs'
export const useCountDown=()=>{
    //响应式数据
    let timer=null
    const time =ref(0)
    //格式化时间为xx分xx秒
    const formatTime=computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
    //开启倒计时的函数
    const start=(currentTime)=>{
        //开始倒计时的逻辑
        formatTime.value=currentTime
        timer=setInterval(() => {
            formatTime.value--
        }, 1000);
    }
    onUnmounted(()=>{
        timer&&clearInterval(timer)
    })
    return {
        formatTime,
        start
    }
}