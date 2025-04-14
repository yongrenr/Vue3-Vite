import request from '@/utils/request'
 
export function test1(data) {
    return request({
        url: '/test/test',
        method: 'post',
        data: data,
    })
}
 
export function test2(word) {
    return request({
        url: '/test/test1'+word,
        method: 'get',
    })
}
 