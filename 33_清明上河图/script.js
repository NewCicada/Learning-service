const river = document.getElementById('river')

const store = {
    move: false,
}
// mousedown 鼠标按下
river.addEventListener('mousedown', (e) => {
    // 取消事件的默认动作。
    e.preventDefault()
    store.move = true
    store.startX = e.pageX + river.scrollLeft
})
// mousemove 移动鼠标
document.addEventListener('mousemove', (e) => {
    // 取消事件的默认动作。
    e.preventDefault()
    if (store.move) {
        river.scrollLeft = store.startX - e.pageX
    }
})
document.addEventListener('mouseup', (e) => {
    // 取消事件的默认动作。
    e.preventDefault()
    store.move = false
})
