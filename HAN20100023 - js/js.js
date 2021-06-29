var total = 0;
var list= "";
var all = 0;
var f = "";
var f1 = 0;
var listf="";
document.getElementById("favlist").style.display = "none";
document.getElementById("favor").style.display = "none";
document.getElementById("addtocart").style.display = "none";
document.getElementById("cart").style.display = "none";
document.getElementById("espressotype").style.display = "none";
document.getElementById("coffeesize").style.display = "none";
document.getElementById("orderf").style.display = "none";
document.getElementById("favourite").style.display = "none";

document.getElementById('btn').onclick = function(){
  document.getElementById("espressotype").style.display = "none";
  document.getElementById("coffeesize").style.display = "none";
  document.getElementById("singleorigin").disabled = false;
  document.getElementById("houseblend").disabled = false;
  document.getElementById("houseespresso").disabled = false;
  document.getElementById("guestespresso").disabled = false;
    
    var size = document.getElementsByName('size');
    var result1 = ""; 
    var total1 = 0;    

    for (var i = 0; i < size.length; i++){
        if (size[i].checked){
            result1 += size[i].id + ' ';
            total1 += size[i].value;    
        }
    }
    
    var type = document.getElementsByName('type');
    var result2 = "";
    var total2 = 0;   
    for (var i = 0; i < type.length; i++){
      if (type[i].checked){
          result2 += type[i].id;
          total2 += type[i].value;
          
      }
    }

    var etype = document.getElementsByName('etype');
    var resulte = "";
    var totale = 0;
    for (var i = 0; i < etype.length; i++){
      if (etype[i].checked){
          resulte += etype[i].id;
          totale += etype[i].value;
      }
    }  

    var coffee = document.getElementsByName('coffee'); 
    var result3 = "";     
    for (var i = 0; i < coffee.length; i++){
      if (coffee[i].checked){
            result3 += coffee[i].value ;
        }
      }      

      var extras = document.getElementsByName('extras'); 
      var result4 = "";
      var noextras = "no extras";
      var extrastotal=0;
      for (var i = 0; i < extras.length; i++){
        if (extras[i].checked === true){
              result4 += '[' + extras[i].id + '] ';
              noextras="";
              extrastotal += parseInt(extras[i].value);
          }
        }
    document.getElementById("cold milk").checked = false;
    document.getElementById("hot milk").checked = false;
    document.getElementById("chocolate dusting").checked = false;
    document.getElementById("marsh mallows").checked = false;
    document.getElementById("whipped cream").checked = false;
     
     result = result1 + resulte +" " + result2 + ', '+ result3 + ': '+ result4 + noextras;
     total = total1 * total2 + (total2 * totale) + extrastotal;
    
      
  if(total2==0){
    result = "";
    total = 0;
    document.getElementById("drink").innerHTML = "please choose valid drinks";
    document.getElementById("price").innerHTML = "";
    document.getElementById("favor").style.display = "none";
    document.getElementById("addtocart").style.display = "none";
  }

  else{
    document.getElementById("drink").innerHTML = "Current drink : " +result;
    document.getElementById("price").innerHTML = "Price = đ"+total;
    document.getElementById("favor").style.display = "block";
    document.getElementById("addtocart").style.display = "block";
  }

    var radio = document.querySelector('input[type=radio][name=type]:checked');
    radio.checked = false;    
    var radio = document.querySelector('input[type=radio][name=coffee]:checked');
    radio.checked = false; 
    document.getElementById("houseespresso").checked = true;
    
  }

function choosecoffee1() {	
  document.getElementById("singleorigin").disabled = true;
  document.getElementById("houseblend").disabled = true;
  document.getElementById("houseespresso").disabled = false;
  document.getElementById("guestespresso").disabled = false;   
  document.getElementById("Small").checked = false;
  document.getElementById("Medium").checked = false;
  document.getElementById("Large").checked = false;
  document.getElementById("Single").checked = true;
  document.getElementById("espressotype").style.display = "block";
  document.getElementById("coffeesize").style.display = "none";   
  var radio = document.querySelector('input[type=radio][name=coffee]:checked');
  radio.checked = false; 
  document.getElementById("houseespresso").checked = true;
  document.getElementById("favor").style.display = "none";
  document.getElementById("drink").innerHTML = "";
  document.getElementById("price").innerHTML = "";
  document.getElementById("addtocart").style.display = "none";
}


function choosecoffee2() {	
  document.getElementById("coffeesize").style.display = "block";
  document.getElementById("singleorigin").disabled = false;
  document.getElementById("houseblend").disabled = false;
  document.getElementById("houseespresso").disabled = true;
  document.getElementById("guestespresso").disabled = true;
  document.getElementById("Small").disabled = false;
  document.getElementById("Large").disabled = false;
  document.getElementById("Medium").disabled = false;
  document.getElementById("Single").checked = false;
  document.getElementById("Double").checked = false;
  document.getElementById("espressotype").style.display = "none";    
  document.getElementById("Medium").checked = true;
  var radio = document.querySelector('input[type=radio][name=coffee]:checked');
  radio.checked = false; 
  document.getElementById("houseblend").checked = true;
  document.getElementById("favor").style.display = "none";
  document.getElementById("drink").innerHTML = "";
  document.getElementById("price").innerHTML = "";
  document.getElementById("addtocart").style.display = "none";
}

function choosecoffee3() {	
  document.getElementById("coffeesize").style.display = "block";
  document.getElementById("singleorigin").disabled = false;
  document.getElementById("houseblend").disabled = false;
  document.getElementById("houseespresso").disabled = true;
  document.getElementById("guestespresso").disabled = true;
  document.getElementById("Small").disabled = true;
  document.getElementById("Large").disabled = true;
  document.getElementById("Medium").disabled = false;
  document.getElementById("Single").checked = false;
  document.getElementById("Double").checked = false;
  document.getElementById("Medium").checked = true;
  document.getElementById("espressotype").style.display = "none";
  var radio = document.querySelector('input[type=radio][name=coffee]:checked');
  radio.checked = false; 
  document.getElementById("houseblend").checked = true;
  document.getElementById("favor").style.display = "none";
  document.getElementById("drink").innerHTML = "";
  document.getElementById("price").innerHTML = "";
  document.getElementById("addtocart").style.display = "none";
}

document.getElementById('seecart').onclick = function(){
  document.getElementById("cart").style.display = "block";   
}

document.getElementById('addtocart').onclick = function(){
  all = all + total;
  list = result + "("+ "đ" + total+")" ; 
  const drink = document.createElement("p");
  const display = document.createTextNode(list);
  drink.appendChild(display);
  const element = document.getElementById("cartlist");
  element.appendChild(drink);
  document.getElementById("order").innerHTML = "Total = " + " đ" + all ;
}

document.getElementById('clearorder').onclick = function(){
  all = 0;
  list = "";
  document.getElementById("cartlist").innerHTML = list;
  document.getElementById("order").innerHTML = "Total = 0";
  document.getElementById("favlist").innerHTML = "";
  document.getElementById("favlist").style.display = "none";
}

document.getElementById('placeorder').onclick = function(){
  location.reload();
  alert("The order have been received");
}

document.getElementById('closecart').onclick = function(){
  document.getElementById("cart").style.display = "none";
}

document.getElementById('favorcart').onclick = function(){
  document.getElementById("favourite").style.display = "block";
}

document.getElementById('favor').onclick = function(){
  f = result;
  f1 = total;
    document.getElementById("orderf").style.display = "block";
    document.getElementById("favordrink").innerHTML = f + "(" + "đ" + f1 +")";     
}

document.getElementById('orderf').onclick = function(){
  all = all + f1;
  listf = f + "("+ "đ" + f1+")";
  document.getElementById("order").innerHTML = "Total : " + " đ" + all ;
  document.getElementById("favlist").style.display = "block";
  const drinkf = document.createElement("p");
  const displayf = document.createTextNode(listf);
  drinkf.appendChild(displayf);
  const element = document.getElementById("favlist");
  element.appendChild(drinkf);
}

document.getElementById('closef').onclick = function(){
  document.getElementById("favourite").style.display = "none";
}