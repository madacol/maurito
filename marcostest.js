var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

  lienzo.beginPath();
  lienzo.strokeStyle = "black";
  lienzo.fillStyle = "gray";
  lienzo.moveTo(0, 0);
  lienzo.lineTo(0, 300);
  lienzo.lineTo(300, 300);
  lienzo.lineTo(300, 0);
  lienzo.lineTo(0, 0);
  lienzo.fill();
  lienzo.stroke();
  lienzo.closePath();

  lienzo.beginPath();
  lienzo.fillStyle = "red";
  lienzo.arc(150, 150, 90, 2* Math.PI, false);
  lienzo.fill();
  lienzo.stroke();
  lienzo.closePath();
