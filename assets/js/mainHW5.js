const navList = document.querySelectorAll('.nav-link')

if (navList.length) {
    navList.forEach(function(item) {
        item.addEventListener('click', function() {
            const x = document.querySelectorAll('.active')
            x.forEach(function(items) {
                items.classList.remove('active')
            })
            item.classList.add('active')
        })
    })
}

const exist = document.querySelector('#sidebar')
const mini = document.querySelector('#clicked-button')
if(mini && exist) {
    mini.addEventListener('click', ()=> {
        const z = document.querySelector('#sidebar')     
        z.classList.toggle('mini-size')
    })
}