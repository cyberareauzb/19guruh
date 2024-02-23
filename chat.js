let inp = document.querySelector('input')
let btn = document.querySelector('button')

let ws = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/')
let mess = [];

function chatRender(mess) {
    document.querySelector('.messages').innerHTML = ''
    mess.forEach(element => {
        let d = document.createElement('div')
        d.classList.add(element.me ? 'my' : 'other')
        d.innerText = element.message
        document.querySelector('.messages').append(d)
    });
}
chatRender(mess)

ws.onopen = () => {
    console.log('Ulandi');
}

ws.onmessage = (e) => {
    if (e.data[0] === '{') {
        let f = JSON.parse(e.data);
        let messdata = {
            message: f.message,
            me: false
        }
        mess.push(messdata)
    }else{
        let messdata = {
            message: e.data,
            me: false
        }
        mess.push(messdata)
    }

    // console.info(e.data)
    chatRender(mess)
}

btn.addEventListener('click', () => {
    let sendMess = {
        message: inp.value,
        me: true
    }
    mess.push(sendMess)
    ws.send(JSON.stringify(sendMess))
    chatRender(mess)
})

ws.onerror = () => {
    console.log('Ulanishda hatolik');
}

ws.onclose = () => {
    console.warn('Ulanishda uzilish yuzaga keldi')
}