function handleInput(e) {
    console.log(this)
    console.log('input：', e.target.value)
}

function debounce(func, wait) {
    let timer = null

    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(func.bind(this, ...args), wait)
    }
}

let keyword = document.getElementById('keyword')
keyword.addEventListener('input', debounce(handleInput, 500))
