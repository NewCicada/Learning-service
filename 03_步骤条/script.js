const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
let currentActive = 1
next.addEventListener('click', () => {
    currentActive++
    // 如果currentActive大于步骤条的数字 他直接等于当前步骤条的数字,也就是4
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})
prev.addEventListener('click', () => {
    currentActive--
    // 如果上一个一直点击小于1的话,值也只是1
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})
function update() {
    circles.forEach((circle, idx) => {
        // id 4 circle 4
        // 如果idx < currentActive 的时候 他就增加一个选中状态
        // else 就删除一个选中状态
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
    if (currentActive === 1) {
        prev.ariaDisabled = true
    } else if (currentActive === circles.length) {
        next.ariaDisabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
