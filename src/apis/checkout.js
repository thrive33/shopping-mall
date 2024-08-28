import request from '@/utils/http'
// const token='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJuYW1lXCI6XCLmiJHmmK_lsI_lhZTpspxcIixcImlkXCI6XCIyOTZcIixcInVzZXJuYW1lXCI6XCJoZWltYTI5NVwifSIsImlhdCI6MTcyNDE2NzI2MSwiZXhwIjoxNzI0NDI2NDYxfQ.MfvjFMQIjm1VFia8VLj6OC16i3hMP-fbeZIZ79ZaeZc'
//生成订单
export const getCheckInfoAPI=()=>{
    return request({
        method: 'GET',
        url:'/member/order/pre',
        // headers:{
        //     Authorization: `Bearer ${token}`
        // }
    })
}
//创建订单
export const createOrderAPI=(data)=>{
    return request({
        method:'POST',
        url:'/member/order',
        data
    })
}