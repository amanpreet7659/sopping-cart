$(document).ready(function () {
  $("#backbutn").click(function () {
    window.close(this);
    window.open("/home/rexweb/Aman/10-02-2021/welcome.html");
  });
  cart11();
});

function cart11() {
  var tiger = JSON.parse(localStorage.getItem("cart"));
  //   alert("call");
  if (tiger.length == "") {
    $("#fmp").show();
    $("#fmp").text("cart is Empty");
  }
  var divv = $("#cartdivchild");
  divv.empty();
  var items = "";
  for (let o = 0; o < tiger.length; o++) {
    console.log(tiger[o].filepath);
    items += `<div><img src="${tiger[o].filepath}" id="cartimg">
                   <p id="pa2">${tiger[o].filename}</p>
                   <p id="ppa2"><b id="b2">${tiger[o].fileprice}</b></p>
                   <p id="ppa3"><b>Quantity Added is : </b>${tiger[o].fileqty}</p>
                   <input type="button" name="" id="cartbuttonsbnow" value="Buy Now" onclick="bNow(${o}),event.preventDefault()" />
                   <input type="button" name="" id="cartbuttonsbnow1" value="Remove" onclick="remo(${o})" />
            </div><br>`;
  }
  divv.append(items);
}
function remo(p) {
  var data = JSON.parse(localStorage.getItem("cart"));
  data.splice(p, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  cart11();
}
function bNow(d) {
  var getdata = JSON.parse(localStorage.getItem("cart"));
  if (
    confirm(
      "Are you sure to Buy Item " +
        getdata[d].filename +
        " quantity is : " +
        getdata[d].fileqty +
        getdata[d].fileprice
    )
  ) {
    alert("Item Successfully purchased");
    getdata.splice(d, 1);
    localStorage.setItem("cart", JSON.stringify(getdata));
    cart11();
  } else {
  }
}
