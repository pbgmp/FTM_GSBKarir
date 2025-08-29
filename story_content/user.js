function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gpMRKxABr3":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var name = player.GetVar("studentName");
var email = player.GetVar("studentEmail");

// Send data to Google Apps Script Web App
fetch("1ZzdrpX0b_GAIyABwvTm9q0yOJiWrto9btDIwMpdEwvk", {
    method: "POST",
    body: JSON.stringify({ name: name, email: email }),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error(error));
}

