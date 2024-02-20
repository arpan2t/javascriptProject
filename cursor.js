
    let circle = document.getElementById("circle");
    document.addEventListener("mousemove",function (move){
        var x = move.pageX;
        var y = move.pageY;
        circle.style.left = x + "px";
        circle.style.top = y + "px";
    })