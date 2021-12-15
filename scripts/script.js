function jogar()
  {
    var resp = document.getElementById('resp');
    resp.innerHTML = Math.floor( 1 + 20*Math.random() );
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// funcao remove uma linha da tabela
function removeLinhaCombate(linha) {
  var i=linha.parentNode.parentNode.rowIndex;
  document.getElementById('combatTable').deleteRow(i);
}

// funcao remove uma linha da tabela
function removeLinhaEquipamento(linha) {
  var i=linha.parentNode.parentNode.rowIndex;
  document.getElementById('equipamentTable').deleteRow(i);
}

// function addAula() {
//   var table = document.getElementById("tbl");
//   var row = table.insertRow(-1);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   var cell4 = row.insertCell(3);
//   var cell5 = row.insertCell(4);
//   var cell6 = row.insertCell(5);
//   var cell7 = row.insertCell(6);
//   var cell8 = row.insertCell(7);
//   cell1.innerHTML = document.getElementById('turma').value;
//   cell2.innerHTML = document.getElementById('professor').value;
//   cell3.innerHTML = document.getElementById('local').value;
//   cell4.innerHTML = document.getElementById('disciplina').value;
//   cell5.innerHTML = document.getElementById('dataInicio').value;
//   cell6.innerHTML = document.getElementById('horarioInicio' + 'horarioFim').value;
//   cell8.innerHTML = `<button class="crud" id="botaoEditar"><img src="img/edit.png"  width="16px" height="16px"></button> `+` <button class="crud" id="botaoApagar" onclick='removeLinha(this)'><img src="img/delete.png" width="17px" height="17px"></button>`;
// }