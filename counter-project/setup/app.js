// set initial count
let count=0

const value=document.getElementById('value')
const btn=document.querySelectorAll('.btn')

btn.forEach(function(btn){
 btn.addEventListener('click', function(e){
  const number=e.currentTarget.classList
  if(number.contains('decrease')){
   count--
  }
  
  else if(number.contains('increase')){
   count++
  }else{
   count=0
  }
  if(count>0){
   value.style.color='green'
  }
  if (count<0){
   value.style.color='red'
  }
  if(count==0){
   value.style.color='#222'
  }
  value.textContent=count
 })
})