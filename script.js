function HitungGaya() {
  let m = document.getElementById ("massa").value;
  let a = document.getElementById ("percepatan").value;
  if (m == "" || a == "") {
    alert("isi dlu angkanya");
    return;
  }
  let f = m * a;
  document.getElementById("hasil").innerHTML=f;
}