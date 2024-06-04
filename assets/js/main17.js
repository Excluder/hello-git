const formContainer = document.querySelector('#formContainer')
const fullName = document.querySelector('#fullname')
const phone = document.querySelector('#phone')
const comment = document.querySelector('#comments')



formContainer.addEventListener('submit', function(event) {
    event.preventDefault();
    const fullNameVal = fullName.value
    const dtVal = phone.value
    const commentVal = comment.value
    const fail = [];
    if(!fullNameVal.trim()) {
        fail.push('#fullname')
    }
    if(!dtVal.trim() || dtVal.trim().includes(" ") || dtVal.trim().length < 9) {
        fail.push('#phone')
    }
    if(!commentVal.trim() || commentVal.trim().length < 50 || commentVal.trim().length > 200) {
        fail.push('#comments')
    }
    if(fail.length) {
        alert('Vui long dien day du thong tin truoc khi tiep tuc')
        fail.forEach((item)=> {
            document.querySelector(item).classList.add('failed')
        })
    }
    else {
        alert('Gui y kien thanh cong, cam on ban')
    }
})





















