
  const dropdown = document.querySelector("#dropdown");
  const option1 = document.querySelector("#option1");
  const option2 = document.querySelector("#option2");

  dropdown.addEventListener("change", function() {
    if (dropdown.value === "1") {
      option1.style.display = "none";
      option2.style.display = "none";
    } else if (dropdown.value === "2") {
      option1.style.display = "none";
      option2.style.display = "block";
    }
  });


  const dropdown2 = document.querySelector(".dropdown-two");
  const brazil = document.querySelector("#brazil");
  const northkorea = document.querySelector("#northkorea");

  dropdown2.addEventListener("change", function(event) {
    if (event.target.value === "brazil") {
      brazil.style.display = "block";
      northkorea.style.display = "none";
    } else if (event.target.value === "northkorea") {
      brazil.style.display = "none";
      northkorea.style.display = "block";
    } else {
      brazil.style.display = "none";
      northkorea.style.display = "none";
    }
  });


function addRow() {
var table = document.getElementById("myTable");
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);

cell1.innerHTML = "<select><option>Networking Equipment (Routers, Switches)</option><option>Storage Equipment (Servers, Arrays)</option><option>End User Tech (Laptops, Desktops)</option><optionAccessories (Cables, SFPs)</option></select>";
cell2.innerHTML = "<input type='number'placeholder='$500.00'/>";
cell3.innerHTML = "<input type='number' placeholder='3' />";
cell4.innerHTML = "<select><option>New</option><option>Used</option></select>";
cell5.innerHTML = "<button onclick='deleteRow(this)'>Delete Row</button>";
}

function deleteRow(btn) {
var row = btn.parentNode.parentNode;
row.parentNode.removeChild(row);
}


const revealButton = document.getElementById("reveal-button");
const hiddenDiv = document.getElementById("hidden-div");

revealButton.addEventListener("click", function() {
  hiddenDiv.style.display = "grid";
  hiddenDiv.scrollIntoView({ behavior: "smooth" });
});

