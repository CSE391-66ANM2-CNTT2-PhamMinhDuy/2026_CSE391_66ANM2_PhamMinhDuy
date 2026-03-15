let students=[]

const nameInput=document.getElementById("name")
const scoreInput=document.getElementById("score")
const addBtn=document.getElementById("addBtn")
const searchInput=document.getElementById("search")
const filterSelect=document.getElementById("filter")
const tbody=document.getElementById("tbody")
const stats=document.getElementById("stats")

function getRank(score){

if(score>=8.5) return "Giỏi"
if(score>=7) return "Khá"
if(score>=5) return "Trung bình"
return "Yếu"

}

addBtn.addEventListener("click",addStudent)
searchInput.addEventListener("input",applyFilter)
filterSelect.addEventListener("change",applyFilter)

function addStudent(){

let name=nameInput.value.trim()
let score=parseFloat(scoreInput.value)

if(name=="" || isNaN(score) || score<0 || score>10){
alert("Dữ liệu sai")
return
}

students.push({
name:name,
score:score,
rank:getRank(score)
})

nameInput.value=""
scoreInput.value=""
nameInput.focus()

applyFilter()

}

function render(list){

tbody.innerHTML=""

list.forEach((s,i)=>{

let tr=document.createElement("tr")

if(s.score<5) tr.classList.add("low")

tr.innerHTML=`
<td>${i+1}</td>
<td>${s.name}</td>
<td>${s.score}</td>
<td>${s.rank}</td>
<td><button onclick="deleteStudent(${i})">Xóa</button></td>
`

tbody.appendChild(tr)

})

updateStats()

}

function deleteStudent(index){

students.splice(index,1)

applyFilter()

}

function applyFilter(){

let keyword=searchInput.value.toLowerCase()
let type=filterSelect.value

let list=students.filter(s =>
s.name.toLowerCase().includes(keyword)
)

if(type!="all"){
list=list.filter(s => s.rank==type)
}

render(list)

}

function updateStats(){

let sum=0

students.forEach(s=>{
sum+=s.score
})

let avg= students.length ? (sum/students.length).toFixed(2) : 0

stats.innerText=`Tổng SV: ${students.length} | Điểm TB: ${avg}`

}