function jogar()
  {
    var resp = document.getElementById('resp');
    resp.innerHTML = Math.floor( 1 + 20*Math.random() );
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var cancelar = document.getElementsByClassName("botaoCancelar")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

cancelar.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function removeLinhaCombate(linha) {
  var i=linha.parentNode.parentNode.rowIndex;
  document.getElementById('combatTable').deleteRow(i);
}

function removeLinhaEquipamento(linha) {
  var i=linha.parentNode.parentNode.rowIndex;
  document.getElementById('equipamentTable').deleteRow(i);
}

function adicionarEquipamento() {
  var table = document.getElementById("equipamentTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = document.getElementById('equipamento').value;
  cell2.innerHTML = document.getElementById('quantidade').value;
  cell3.innerHTML = `<td><button class="botaoApagar" onclick='removeLinhaEquipamento(this)'><img src="img/delete.png" width="17px" height="17px"></button></td>`;
}