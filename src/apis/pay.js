import request from '@/utils/http'

export const getOrderAIP=(id)=>{
    return request({
        url:`/member/order/${id}`
    })
}