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

var cancelar = document.getElementsByClassName("botaoCancelar")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

cancelar.onclick = function() {
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

function adicionarEquipamento() {
  var table = document.getElementById("tbl");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = document.getElementById('turma').value;
  cell2.innerHTML = document.getElementById('professor').value;
  cell8.innerHTML = `<td><button class="botaoApagar" onclick='removeLinhaEquipamento(this)'><img src="img/delete.png" width="17px" height="17px"></button></td>`;
}