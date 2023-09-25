var allproducts = document.querySelectorAll(".popular-items")
var prodshow = document.querySelector("#name")
var price = document.querySelector("#price")
var box = document.querySelector("#totall-price")
var btn = document.querySelector("#btn")
var totall = 0


allproducts.forEach(function (item){
    item.onclick = function(){
        prodshow.innerHTML += item.textContent +" <br> <br>" 
        price.innerHTML += +item.getAttribute("price") + " LE<br> <br>"
        totall += +item.getAttribute("price") 


        if(prodshow.innerHTML != ""){
            btn.style.display = "block"
        }
    }
})

btn.onclick = function (){
    box.innerHTML = " LE  " + totall +" EGP"
}