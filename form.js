let tab = document.querySelector('tbody')
let frm = document.querySelector('form')

let users = [
    {
        fish: 'Xamidov Bobur',
        vil: 'Samarqand',
        year: '1989'
    }
]

function TableRender(users) {
    tab.innerHTML = ''
    users.map(user => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${user.fish}</td>  
        <td>${user.vil}</td>  
        <td>${user.year}</td>  
        `
        tab.append(tr)
    })
    searchYear()
}

TableRender(users)

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let userdata = {
        fish: frm.fish.value,
        vil: frm.vil.value,
        year: frm.year.value,
    }

    users.push(userdata)

    TableRender(users)

    console.log(userdata);
})


function searchYear(){
    let y = document.querySelector('#years')

    y.addEventListener('change', ()=>{
        let filtered = users.filter(item => Number(item.year) === Number(y.value))
        TableRender(filtered)
    })
}
