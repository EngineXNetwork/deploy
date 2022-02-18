window.addEventListener('load', function() {
var input = document.getElementById("input");
input.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
        go()
    }
});
})

function go() {
  var url = document.getElementById("input").value
  if (url !== "") {
  window.location.href = "/service/gateway?url=" + url
  }
}
