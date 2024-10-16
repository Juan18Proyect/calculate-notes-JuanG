  const username = document.getElementById('name')
  const data1 = document.getElementById('nota1')
  const data2 = document.getElementById('nota2')
  const data3 = document.getElementById('nota3')
  const btnCalculate = document.getElementById('btn-calculate')
  const predict= document.getElementById('btn-predict')
  const response = document.getElementById('Answer')
  
  btnCalculate.addEventListener('click', calculateNote )



  function calculateNote() {
    let user = username.value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let note3 = Number(data3.value)
    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4))
   
    if (result<3.5){
      response.textContent=`Hola ${user} su nota definitiva es: ${result}, perdio la materia`
      response.style.color='red';}
    else if (result>3.5 && result<4.5){
      response.textContent=`Hola ${user} su nota definitiva es: ${result},Gano la materia`
      response.style.color='orange';}
    else if (result>4.5 && result<5.0){
      response.textContent=`Hola ${user} su nota definitiva es: ${result},Su nota es sobresaliente`
      response.style.color='green';}
else
 response.textContent=`Hola ${user} alguna de sus notas es invalida,revise`
}
    

  predict.addEventListener('click',calculatepredict)

  function calculatepredict() {
    let user= username.value
    let note1 = Number(data1.value)        
    let note2 = Number(data2.value)        
    let resultpredict = (3.5-((note1 * 0.3) + (note2 * 0.3))) / 0.4 
    let resultpredict1= resultpredict.toFixed(2)
  
  
    response.textContent=`Hola ${user} para ganar la materia, en la nota 3 tiene que sacar:  ${resultpredict1}`
    response.style.color='black';
  } 