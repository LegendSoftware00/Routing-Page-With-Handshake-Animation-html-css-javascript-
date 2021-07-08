function appStart() {
    var result = document.getElementById("result");
    var container = document.querySelector(".container");
    var counter = 11;
    var counterEl = document.createElement("span");
    var handEl = document.getElementById("handEl");
    counterTextNode = document.createTextNode(counter);
    resultTextNode = document.createTextNode(" saniye sonra yönlendirileceksiniz.");
    counterEl.appendChild(counterTextNode);
    function routingAnm(){
        container.style.animation = "containerRoutingAnm 1s";
        container.style.animationDelay = "1s";
        result.innerHTML = "";
    }
    function removeHand() {
        handEl.style.visibility = "hidden";
    }
    function handAnm() {
        handEl.style.animation = "handAnm 1s";
        setTimeout(removeHand, 800);
    }
    function routingPage() {
        window.location.href = "https://google.com";
    }
    function removeCounterElAnm() {
        counterEl.style.animation = "none";
    }
    function counterElAnm() {
        counterEl.style.animation = "counterElAnm 1s";
    }
    function counterFunction() {
        if(counter == 0){
            routingAnm();
            handAnm();
            setTimeout(routingPage, 1700);
        }
        else {
            counter -= 1;
            
            counterEl.innerHTML = counter;
            result.appendChild(resultTextNode);
            // result.appendChild(counterEl);
            result.insertBefore(counterEl, resultTextNode);
            counterElAnm();
        }
    }
    setInterval(counterFunction, 1000);
}
window.onload = appStart();