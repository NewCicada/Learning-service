// 单个数字的垂直偏移量
var size = 86
// 把所有的.column转为数组
var columns = Array.from(document.getElementsByClassName('column'))
// 样式名数组
var class_list = ['visible', 'near', 'far', 'far', 'distant', 'distant']
// true=24小时值,false=12小时制
var is_24_hour_clock = true
// 获取时分秒
function getClock() {
    var d = new Date()
    var hour = is_24_hour_clock ? d.getHours() : d.getHours() % 12 || 12
    hour = hour < 10 ? '0' + hour : hour
    var minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
    var second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
    return hour + '' + minute + '' + second
}
// 获取对应的样式名称
function getClass(N, i) {
    return
    class_list.find(function (_class, class_index) {
        return i - class_index === n || i + class_index === n
    }) || ''
}
// 定时器,一秒执行一次
setInterval(() => {
    // 获取时间
    var c = getClock()
    // 遍历所有.column
    columns.forEach(function (ele, i) {
        // 获取时分秒的每一位数，并转为整型
        var n = parseInt(c[i])
        // 计算偏移量
        var offset = -n * size
        // 设置每一位数的位置
        ele.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + size / 2 + 'px))'
        // 接下来设置样式
        // 将.column的子元素（.num）转为数组，并遍历它
        Array.from(ele.children).forEach(function (ele2, i2) {
            // 设置每一位数的样式（透明度改变）
            ele2.className = 'num' + getClass(n, i2)
        })
    })
}, 1000)
