const listRoomMsg = [
{
    id: 1,
    isMe: false,
    content: 'Di choi khong'
},
{
    id: 2,
    isMe: true,
    content: 'Okay'
},
{
    id: 3,
    isMe: true,
    content: 'Qua don t'
},
{
    id: 4,
    isMe: false,
    content: 'Oke'
},
]

const chatBody1 = document.querySelector('#chatbody-01')

function renderMsg(msgData) {
    return `<div class="msg ${msgData.isMe ? 'my-msg' : 'partner-msg'}">
                ${msgData.content}
            </div>`
}

function renderListData() {
    let str = '';
    listRoomMsg.forEach(item => {
        str += renderMsg(item)
    })
    chatBody1.innerHTML = str;
}

renderListData();

const sendMsg = document.querySelector('#sendMsg')
const messageContent = document.querySelector('#my-msg')
sendMsg.addEventListener('submit', (event)=> {
    event.preventDefault();
    if(messageContent.value.trim()) {
        const temp = messageContent.value;
        messageContent.value = '';
        const p = {id: listRoomMsg.length + 1, isMe: true, content: temp};
        listRoomMsg.push(p)
        renderListData();
    }
})





function storage() {
    const x = localStorage
    console.log(x);
}