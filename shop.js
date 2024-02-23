let btns = document.querySelectorAll('.btn')
let tb = document.querySelector('tbody')


let cart = []
let c = 1
btns.forEach(el => {
    el.addEventListener('click', (e) => {

        let items = JSON.parse(localStorage.getItem('items'))
        let names = items.find(i => i.name == e.target.dataset.pr)
        if (names?.name) {
            let cart = items.filter(i => i.name !== e.target.dataset.pr)
            let s = items.find(i => i.name === e.target.dataset.pr)
            c++
            s.count = c
            console.log(s);
            cart.push(s)
            localStorage.setItem('items', JSON.stringify(cart))
        } else {
            cart.push({
                name: e.target.dataset.pr,
                count: 1
            })
            localStorage.setItem('items', JSON.stringify(cart))
        }
        render()
    })
})

function render() {

    let data = JSON.parse(localStorage.getItem('items'))
    tb.innerHTML = ''
    data.map(el => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${el.name}</td>
        <td>${el.count} ta</td>
        `
        tb.append(tr)
    })
}

render()