var obj = {
    fivecent:0,
    tencent:0,
    twentyfivecent:0,
    one:0,
    two:0,
    five:0,
    ten:0,
    fifty:0,
    hundred:0,
}
$("#fivecent").change(function(){
    $("#fivecentr").val($("#fivecent").val()*0.05);
    settotal();
});

$("#tencent").change(function(){
    $("#tencentr").val($("#tencent").val()*0.10);
    settotal();
});

$("#twentyfivecent").change(function(){
    $("#twentyfivecentr").val($("#twentyfivecent").val()*0.25);
    settotal();
});

$("#one").change(function(){
    $("#oner").val($("#one").val()*1);
    settotal();
});

$("#two").change(function(){
    $("#twor").val($("#two").val()*2);
    settotal();
});

$("#five").change(function(){
    $("#fiver").val($("#five").val()*5);
    settotal();
});

$("#ten").change(function(){
    $("#tenr").val($("#ten").val()*10);
    settotal();
});

$("#twenty").change(function(){
    $("#twentyr").val($("#twenty").val()*20);
    settotal();
});

$("#fifty").change(function(){
    $("#fiftyr").val($("#fifty").val()*50);
    settotal();
});

$("#hundred").change(function(){
    $("#hundredr").val($("#hundred").val()*100);
    settotal();
});



function settotal(){
    $("#total").val(
  $("#fivecentr").val()*1+$("#tencentr").val()*1+$("#twentyfivecentr").val()*1+$("#oner").val()*1+$("#twor").val()*1+$("#fiver").val()*1+$("#tenr").val()*1+$("#twentyr").val()*1+
        $("#fiftyr").val()*1+$("#hundredr").val()*1

    );
}

//service worker addition
if("serviceWorker" in navigator){  //checks if serverworker is available in navigator object
  try{navigator.serviceWorker.register("sw.js");
  console.log("Service worker registerd");
}
//service worker can only handle the requests for folder where service worker file is stored and subfolders,
  //it is best to put service worker in root folder of your applciation for this reason.
  catch(error){
    console.log("sevice worker failed to register");
  }
}
