
var p =0;
var p2 =0;
var p3 =0;
var p4 =0;

//a function to calculate percentage P1
function calculatePercentage(){

    var box1= document.getElementById("box1").value;
    var secondbox1 = document.getElementById("secondbox1").value;

    p= Number(box1/secondbox1);
    
    var x =document.querySelector("#percentage");
    x.innerHTML =  p.toFixed(4) * 100 + " % ";
    return p;
}

//a function to calculate percentage P2
function calculatePercentage2(){

    var box2= document.getElementById("box2").value;
    var secondbox2 = document.getElementById("secondbox2").value;

    p2 = Number(box2/secondbox2);
    
    var x1 =document.querySelector("#percentage2");
    x1.innerHTML =  p2.toFixed(4) * 100 + " % ";
    return p2;
}

//a function to calculate percentage P3
function calculatePercentage3(){

    var box3= document.getElementById("box3").value;
    var secondbox3 = document.getElementById("secondbox3").value;

    p3 = Number(box3/secondbox3);

    var x2 =document.querySelector("#percentage3");
    x2.innerHTML = p3.toFixed(4) * 100 + " % ";
    return p3;
}

//a function to calculate percentage P4
function calculatePercentage4(){
    var box4= document.getElementById("box4").value;
    var secondbox4 = document.getElementById("secondbox4").value;

    p4= Number(box4/secondbox4);

    var x3 =document.querySelector("#percentage4");
    x3.innerHTML = p4.toFixed(4) * 100 + " % ";
    return p4;
}

//a fucntion to calculate mean
function calculateMean(){

     per1= calculatePercentage();
     if(isNaN(per1)){
     per1 = 0;
     var x =document.querySelector("#percentage");
     x.innerHTML =  0 + "/"+ 0;
     }

     per2= calculatePercentage2();
    if(isNaN(per2)){
    per2 = 0;
    var x =document.querySelector("#percentage2");
    x.innerHTML =  0 + "/"+ 0;
    }

    per3= calculatePercentage3();
    if(isNaN(per3)){
    per3 = 0;
    var x =document.querySelector("#percentage3");
    x.innerHTML =  0 + "/"+ 0;
    }

    per4= calculatePercentage4();
    if(isNaN(per4)){
    per4 = 0;
    var x =document.querySelector("#percentage4");
    x.innerHTML =  0 + "/"+ 0;
    }
    
    var mean = Number(per1 + per2 + per3 + per4)/ 4;
    var x = document.querySelector("#result");
    x.innerHTML = "Result: Mean Grades are " + mean.toFixed(2);

}

//a function to calculate weight
function calculateWeight(){

    per1= calculatePercentage();
    if(isNaN(per1)){
        per1 = 0;
        var x =document.querySelector("#percentage");
        x.innerHTML =  0 + "/"+ 0;
    }

    var w1 = Number(document.getElementById("weight1").value);
    if(isNaN(w1)){
        w1 =0;
    }

    var cal1 = Number(per1*w1);

    per2= calculatePercentage2();
    if(isNaN(per2)){
       per2 = 0;
       var x =document.querySelector("#percentage2");
       x.innerHTML =  0 + "/"+ 0;
    }

    var w2 = Number(document.getElementById("weight2").value);
    if(isNaN(w2)){
        w2 =0;
    }

    var cal2 = Number(per2 * w2);

    per3= calculatePercentage3();
    if(isNaN(per3)){
       per3 = 0;
       var x =document.querySelector("#percentage3");
       x.innerHTML =  0 + "/"+ 0;
    }

    var w3 = Number(document.getElementById("weight3").value);
    if(isNaN(w3)){
        w3 =0;
    }

    var cal3 = Number(per3 * w3);

    per4= calculatePercentage4();
    if(isNaN(per4)){
       per4 = 0;
       var x =document.querySelector("#percentage4");
       x.innerHTML =  0 + "/"+ 0;
    }

    var w4 = Number(document.getElementById("weight4").value);
    if(isNaN(w4)){
        w4 =0;
    }

    var cal4 = Number(per4 * w4);

    var w = Number(w1 + w2 + w3 + w4);
    var cal = Number((cal1 + cal2 + cal3 + cal4) / w);
   
    var x = document.querySelector("#result");
    x.innerHTML = "Result: weighted Grades are " + cal.toFixed(2);
    return cal;
}

//a fucntion to check result
function checkResult(){

    var result = Number(calculateWeight());
    var half = Number(0.50);

    if(!isNaN(result)){
    if(result < half){
        var x = document.querySelector("#checkResult");
        x.innerHTML = "You Failed";
    }
    else{
        var x = document.querySelector("#checkResult");
        x.innerHTML = "Congratulations You Passed";
    }
    }
}