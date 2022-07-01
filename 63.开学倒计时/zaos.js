// 开学日期
timer('2022-09-05 0:00:00', 'day')
;(now = new Date()), (hour = now.getHours())
;(now = new Date()), (hour = now.getHours())
if (hour < 6) {
    document.write(' 凌晨好！同学！')
} else if (hour < 9) {
    document.write('早上好，同学！')
} else if (hour < 12) {
    document.write('上午好，同学!')
} else if (hour < 14) {
    document.write('中午好，同学！')
} else if (hour < 17) {
    document.write('下午好！同学！')
} else if (hour < 19) {
    document.write('傍晚好！同学！')
} else if (hour < 22) {
    document.write('晚上好！同学！')
} else {
    document.write('夜深了，学习注意眼睛哦！')
}
/**
 * 入参第一个为时间字符串，第二个参数为模式选择，如果传入'day'，按天数倒计时到秒，不传值，按小时精确到秒
 * @param timeStr
 * @param item
 */
function timer(timeStr, item) {
    setInterval(function () {
        let nowTime = new Date(timeStr) - new Date()
        let minutes = parseInt((nowTime / 1000 / 60) % 60, 10) //计算剩余的分钟
        let seconds = parseInt((nowTime / 1000) % 60, 10) //计算剩余的秒数

        minutes = checkTime(minutes)
        seconds = checkTime(seconds)
        if (item === 'day') {
            let days = parseInt(nowTime / 1000 / 60 / 60 / 24, 10) //计算剩余的天数
            let hours = parseInt((nowTime / 1000 / 60 / 60) % 24, 10) //计算剩余的小时
            days = checkTime(days)
            hours = checkTime(hours)
            document.getElementById('timer').innerHTML = days + '天' + hours + '小时' + minutes + '分' + seconds + '秒'
        } else {
            let hours = parseInt(nowTime / (1000 * 60 * 60), 10) //计算剩余的小时
            hours = checkTime(hours)
            document.getElementById('timer').innerHTML = hours + '小时' + minutes + '分' + seconds + '秒'
        }
    }, 1000)
}
function checkTime(i) {
    //将0-9的数字前面加上0，例如1变为01
    if (i < 10) {
        i = '0' + i
    }
    return i
}
