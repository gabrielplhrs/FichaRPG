function jogar()
  {
    var resp = document.getElementById('resp');
    resp.innerHTML = Math.floor( 1 + 20*Math.random() );
}

var modal = document.getElementById("myModal");
var modalD20 = document.getElementById("modalD20")

var btn = document.getElementById("myBtn");
var btnD20 = document.getElementById("playerPicAndDice")

var cancelar = document.getElementById("botaoCancelar");
var cancelarD20 = document.getElementById("botaoCancelarD20")

btn.onclick = function() {
  modal.style.display = "block";
}

btnD20.onclick = function() {
  modalD20.style.display = "block";
}

cancelar.onclick = function() {
  modal.style.display = "none"
}

cancelarD20.onclick = function() {
  modalD20.style.display = "none";
}
