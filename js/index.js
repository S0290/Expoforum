'use strict'


document.addEventListener('click', (event) => {
    const input = document.getElementById('search-input')
    if (event.target === input) {
        return
    }
    if (event.target.id === 'search-btn') {
        event.target.style.display = 'none'
        input.style.display = 'block'
        input.focus()
    } else {
        input.style.display = 'none'
        document.getElementById('search-btn').style.display = 'block'


    }
})
