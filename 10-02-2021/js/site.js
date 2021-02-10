$(document).ready(function () {
  var userData = [];
  //---------Sign-up-Button-----------------//
  $("#Signup").click(function () {
    var inp1 = $("#username").val(),
      inp2 = $("#password1").val(),
      inp3 = $("#password2").val();
    var data = {
      username: inp1,
      pass: inp2,
      conpass: inp3,
    };
    if (inp1 == "" && inp2 == "" && inp3 == "") {
      alert("All Details required");
    } else if (inp2 == inp3) {
      if (userData.push(data)) {
        alert("Registered Successfully");
        localStorage.setItem("Aman", JSON.stringify(userData));
        console.log(userData);
        $("#username").val("");
        $("#password1").val("");
        $("#password2").val("");
        $("#span2").hide();
      }
    } else {
      $("#span2").show();
      $("#username").val("");
      $("#password1").val("");
      $("#password2").val("");
    }
  });
  //--------------Corner-Login-Button-------------------//
  $("#btn1").click(function () {
    $("#hh").html("Login Form");
    $("#login1").show();
    $("#Signup").hide();
    $("#btn1").hide();
    $("#labl3").hide();
    $("#password2").hide();
    $("#hr3").hide();
    $("#span1").hide();
    $("#back").show();
    $("#username").val("");
    $("#password1").val("");
    $("#password2").val("");
  });
  //-----------Back Button----------------//
  $("#back").click(function () {
    $("#hh").html("Sign-up");
    $("#login1").hide();
    $("#Signup").show();
    $("#btn1").show();
    $("#labl3").show();
    $("#password2").show();
    $("#hr3").show();
    $("#span1").show();
    $("#back").hide();
    $("#username").val("");
    $("#password1").val("");
    $("#password2").val("");
  });
  //-------------Login-Button--------------//
  $("#login1").click(function () {
    var inp1 = $("#username").val(),
      inp2 = $("#password1").val();

    var data = JSON.parse(localStorage.getItem("Aman"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].username == inp1) {
        if (data[i].pass == inp2) {
          alert("Login Successfully");
          window.close(this);
          window.open("/home/rexweb/Aman/10-02-2021/welcome.html");
          $("#span3").hide();
          $("#span4").hide();
        } else {
          $("#span4").show();
          $("#span4").html("Entered Password is Wrong");
          $("#span3").hide();
        }
      } else {
        $("#span3").show();
        $("#span3").html("User name not Exist");
        $("#span4").hide();
      }
    }
  });
  //-------------Cart-Increement-----------//
  $("#btn1div").click(function () {
    var c = parseInt($("#countbtn").val());
    $("#countbtn").val(c + 1);
  });
  $("#btn1div1").click(function () {
    var c = parseInt($("#countbtn1").val());
    $("#countbtn1").val(c + 1);
  });
  $("#btn1div2").click(function () {
    var c = parseInt($("#countbtn2").val());
    $("#countbtn2").val(c + 1);
  });
  $("#btn1div3").click(function () {
    var c = parseInt($("#countbtn3").val());
    $("#countbtn3").val(c + 1);
  });
  $("#btn1div4").click(function () {
    var c = parseInt($("#countbtn4").val());
    $("#countbtn4").val(c + 1);
  });
  $("#btn1div5").click(function () {
    var c = parseInt($("#countbtn5").val());
    $("#countbtn5").val(c + 1);
  });
  //------------Cart-Decreement---------------//
  $("#btndiv").click(function () {
    var c = parseInt($("#countbtn").val());
    if (c == 1) {
    } else {
      $("#countbtn").val(c - 1);
    }
  });
  $("#btndiv1").click(function () {
    var c = parseInt($("#countbtn1").val());
    if (c == 1) {
    } else {
      $("#countbtn1").val(c - 1);
    }
  });
  $("#btndiv2").click(function () {
    var c = parseInt($("#countbtn2").val());
    if (c == 1) {
    } else {
      $("#countbtn2").val(c - 1);
    }
  });
  $("#btndiv3").click(function () {
    var c = parseInt($("#countbtn3").val());
    if (c == 1) {
    } else {
      $("#countbtn3").val(c - 1);
    }
  });
  $("#btndiv4").click(function () {
    var c = parseInt($("#countbtn4").val());
    if (c == 1) {
    } else {
      $("#countbtn4").val(c - 1);
    }
  });
  $("#btndiv5").click(function () {
    var c = parseInt($("#countbtn5").val());
    if (c == 1) {
    } else {
      $("#countbtn5").val(c - 1);
    }
  });
  //------------------Add-To-Cart-------------------//
  var cart = [];
  $("#buttonsac").click(function () {
    var c = parseInt($("#sup1").text());
    $("#sup1").show();
    c = c + 1;
    $("#sup1").text(c);
    console.log(c);
    //------------------------------------------------------------------------------------------------//

    var f = $("#image1").prop("src"),
      d = $("#p1").text(),
      e = $("#pp1").text(),
      g = $("#countbtn").val();
    console.log("filename : " + d);
    console.log("price is : " + e);

    var obj = {
      filepath: f,
      filename: d,
      fileprice: e,
      fileqty: g,
    };
    cart.push(obj);
    console.log("Value is : " + f);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  $("#buttonsac1").click(function () {
    var c = parseInt($("#sup1").text());
    $("#sup1").show();
    c = c + 1;
    $("#sup1").text(c);
    console.log(c);
    //--------------------------------------------------------//
    var f = $("#image2").prop("src"),
      d = $("#p2").text(),
      e = $("#pp2").text(),
      g = $("#countbtn1").val();
    console.log("filename : " + d);
    console.log("price is : " + e);

    var obj = {
      filepath: f,
      filename: d,
      fileprice: e,
      fileqty: g,
    };
    cart.push(obj);
    console.log("Value is : " + f);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  $("#buttonsac2").click(function () {
    var c = parseInt($("#sup1").text());
    $("#sup1").show();
    c = c + 1;
    $("#sup1").text(c);
    console.log(c);
    //-------------------------------------------------------------------//
    var f = $("#image3").prop("src"),
      d = $("#p3").text(),
      e = $("#pp3").text(),
      g = $("#countbtn2").val();
    console.log("filename : " + d);
    console.log("price is : " + e);

    var obj = {
      filepath: f,
      filename: d,
      fileprice: e,
      fileqty: g,
    };
    cart.push(obj);
    console.log("Value is : " + f);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  $("#buttonsac3").click(function () {
    var c = parseInt($("#sup1").text());
    $("#sup1").show();
    c = c + 1;
    $("#sup1").text(c);
    console.log(c);
    //----------------------------------------------------------------------//

    var f = $("#image4").prop("src"),
      d = $("#p4").text(),
      e = $("#pp4").text(),
      g = $("#countbtn3").val();
    console.log("filename : " + d);
    console.log("price is : " + e);

    var obj = {
      filepath: f,
      filename: d,
      fileprice: e,
      fileqty: g,
    };
    cart.push(obj);
    console.log("Value is : " + f);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  $("#buttonsac4").click(function () {
    var c = parseInt($("#sup1").text());
    $("#sup1").show();
    c = c + 1;
    $("#sup1").text(c);
    console.log(c);
    //---------------------------------------------------------------------//
    var f = $("#image5").prop("src"),
      d = $("#p5").text(),
      e = $("#pp5").text(),
      g = $("#countbtn4").val();
    console.log("filename : " + d);
    console.log("price is : " + e);

    var obj = {
      filepath: f,
      filename: d,
      fileprice: e,
      fileqty: g,
    };
    cart.push(obj);
    console.log("Value is : " + f);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  $("#buttonsac5").click(function () {
    var c = parseInt($("#sup1").text());
    $("#sup1").show();
    c = c + 1;
    $("#sup1").text(c);
    console.log(c);
    //----------------------------------------------------------------------//

    var f = $("#image6").prop("src"),
      d = $("#p6").text(),
      e = $("#pp6").text(),
      g = $("#countbtn5").val();
    console.log("filename : " + d);
    console.log("price is : " + e);

    var obj = {
      filepath: f,
      filename: d,
      fileprice: e,
      fileqty: g,
    };
    cart.push(obj);
    console.log("Value is : " + f);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  //------------Buy-Now----------------//
  $("#buttonsbnow").click(function () {
    console.log("clicked");
    var c = parseInt($("#countbtn").val());
    var t = $("#p1").text();
    if (confirm("Are you sure to buy " + t + " Quantity " + c)) {
      alert("Successfully Purchased " + t + " Quantity " + c);
    }
  });
  $("#buttonsbnow1").click(function () {
    console.log("clicked");
    var c = parseInt($("#countbtn1").val());
    var t = $("#p2").text();
    if (confirm("Are you sure to buy " + t + " Quantity " + c)) {
      alert("Successfully Purchased " + t + " Quantity " + c);
    }
  });
  $("#buttonsbnow2").click(function () {
    console.log("clicked");
    var c = parseInt($("#countbtn2").val());
    var t = $("#p3").text();
    if (confirm("Are you sure to buy " + t + " Quantity " + c)) {
      alert("Successfully Purchased " + t + " Quantity " + c);
    }
  });
  $("#buttonsbnow3").click(function () {
    console.log("clicked");
    var c = parseInt($("#countbtn3").val());
    var t = $("#p4").text();
    if (confirm("Are you sure to buy " + t + " Quantity " + c)) {
      alert("Successfully Purchased " + t + " Quantity " + c);
    }
  });
  $("#buttonsbnow4").click(function () {
    console.log("clicked");
    var c = parseInt($("#countbtn4").val());
    var t = $("#p5").text();
    if (confirm("Are you sure to buy " + t + " Quantity " + c)) {
      alert("Successfully Purchased " + t + " Quantity " + c);
    }
  });
  $("#buttonsbnow5").click(function () {
    console.log("clicked");
    var c = parseInt($("#countbtn5").val());
    var t = $("#p6").text();
    if (confirm("Are you sure to buy " + t + " Quantity " + c)) {
      alert("Successfully Purchased " + t + " Quantity " + c);
    }
  });
});
