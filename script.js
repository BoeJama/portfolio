function buy1() {
    var txt1;
    if (confirm("Confirm purchase")) {
        txt1 = "Purchase Confirmed";}
        else {
            txt1 = "Purchase Confirmed Anyways";
        }
        document.getElementById("buyP1").innerHTML = txt1;
};
function buy2() {
  var txt2;
  if (confirm("Confirm purchase")) {
      txt2 = "Purchase Confirmed";}
      else {
          txt2 = "Purchase Confirmed Anyways";
      }
      document.getElementById("buyP2").innerHTML = txt2;
};
var iteration = ["Normal Oxygen" , "Normal Oxygen Premium"];

let txt = ""

function products() {
for (var i = 0; i < iteration.length; i++) {
    console.log(iteration[i]);
};
iteration.forEach(myFunction);

function myFunction(value) {
    txt += value + "<br>"
};
document.getElementById("paragraph").innerHTML = txt;
};
