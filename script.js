const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
//linhas a cima registam na memoria

button.addEventListener('click', add)//regista com click
form.addEventListener("change", save)//

function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists==true){
    alert("O dia ja existe na lista de Habitos")
  }else{
    nlwSetup.addDay(today)
  }
}

function save(){
  localStorage.setItem('NLESetup', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLESetup")) || {}
nlwSetup.setData(data)
nlwSetup.load() 