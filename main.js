
const btn=document.querySelector("#btn")
const tbody= document.querySelector("tbody")
const getdata=async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await response.json()
    data.forEach((item)=>{
     const tr=document.createElement("tr")
    tr.innerHTML=`<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.username}</td>
    <td>${item.address.city}</td>
    <td>${item.company.name}</td>
    <td>${item.email}</td>
    <td>${item.phone}</td>
  </tr>`
  tbody.appendChild(tr)
})
}
btn.addEventListener("click",getdata)