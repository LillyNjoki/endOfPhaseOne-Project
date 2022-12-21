const dash=  document.querySelector("#dashboard")
const reg=document.querySelector("#login")
const list=document.querySelector("#register")
const adm=document.querySelector("#admDashboard")
dash.addEventListener("click", (e)=>{
    alert("authorization required")
})
reg.addEventListener("click", (e)=>{
    alert("authorization required")
})
list.addEventListener("click", (e)=>{
    alert("authorization required")
})
adm.addEventListener("click", (e)=>{
    alert("authorization required")
})



fetch("https://lillian-production.up.railway.app/Delivery")
.then(response =>{
return response.json()
})
.then(data =>{
    console.log(data)
    // createList(data)
    looping(data)
})

fetch("https://lillian-production.up.railway.app/OrderPickup")
.then(response =>{
return response.json()
})
.then(data =>{
    console.log(data)
    // createList(data)
    loopy(data)
})

fetch("https://lillian-production.up.railway.app/CreateOrder")
.then(response =>{
return response.json()
})
.then(data =>{
    console.log(data)
    // createList(data)
    loop(data)
})




// let ol = document.querySelector("#delivery")
//         let li =document.createElement("li")
//         ol.appendChild(li)
// console.log(ol.appendChild(li))



function loop(items){
    for(let item of items){
        let lo = document.querySelector('#create')
let li = document.createElement('li')
li.textContent = item.description
lo.appendChild(li)
}
}

function loopy(items){
    for(let item of items){
        let lo = document.querySelector('#pick')
let li = document.createElement('li')
li.textContent = item.description
lo.appendChild(li)
}
}
function looping(items){
    for(let item of items){
        let lo = document.querySelector('#delivery')
let li = document.createElement('li')
li.textContent = item.description
lo.appendChild(li)
}
}







// fetch('https://lillian-production.up.railway.app/Delivery')
// .then(res=>{
//     return res.json()
// }).then(data=>{
//     //console.log(data[0].name);
//     loop(data)
// })

// function loop(items){
//     for(let item of items){
//         let ol = document.querySelector('#delivery')
// let li = document.createElement('li')
// li.textContent = item.description
// ol.appendChild(li)
//        // console.log(item.name);
//     }
// }
