(function(){
    var houses = document.getElementById("houses");
    var house = document.getElementById("house");

    var j = 0;

    for (var i = 1; i <= 30; i++) {
        var x = i % 5;
        var newhouse = house.cloneNode(true);
        newhouse.setAttribute("translation", (x*15)+" 0 " + (j*15));
        houses.appendChild(newhouse);
        if (i % 5 === 0) {
            j++;
        }   
    }

    var directLight = document.getElementById("directLight");
    var reflectLight1 = document.getElementById("reflectLight1");
    var reflectLight2 = document.getElementById("reflectLight2");
    var movingLight = document.getElementById("movingLight");

    var directionalLight = document.getElementById("directionalLight");
    var spotLight1 = document.getElementById("spotLight1");
    var spotLight2 = document.getElementById("spotLight2");
    var pointLight = document.getElementById("pointLight");

    directLight.addEventListener("click", function(){
        var status = directionalLight.getAttribute("on");
        directionalLight.setAttribute("on", (status==="true"?"false":"true"));
    });

    reflectLight1.addEventListener("click", function(){
        var status = spotLight1.getAttribute("on");
        spotLight1.setAttribute("on", (status==="true"?"false":"true"));
    });

    reflectLight2.addEventListener("click", function(){
        var status = spotLight2.getAttribute("on");
        spotLight2.setAttribute("on", (status==="true"?"false":"true"));
    });

    movingLight.addEventListener("click", function(){
        var status = pointLight.getAttribute("on");
        pointLight.setAttribute("on", (status==="true"?"false":"true"));
    });

    var pl = 0, r = 50;

    setInterval(function() {
        pl += 0.05;
        var circleX = -10 + Math.cos(pl)*r;
        var circleY = -10 + Math.sin(pl)*r;
        pointLight.setAttribute("location", circleX + " 15 " + circleY);
        if (pl > 360) {
          pl = 0;
        }
      }, 100);

    document.addEventListener("keydown", move);
    var viewpoint1 = document.getElementById("viewPoint1");
    var vx = 0, vy = 30, vz = 100;

    function move(e) {
        console.log(e.keyCode);
        var step = 5;
        if (e.keyCode === 39) {
        vx += step;
        } else if (e.keyCode === 37) {
        vx -= step;
        }
        if (e.keyCode === 40) {
        vz += step;
        } else if (e.keyCode === 38) {
        vz -= step;
        }
        viewpoint1.setAttribute("position", vx + " " + vy + " " + vz);
        viewpoint1.setAttribute("centerofrotation", vx + " " + vy + " " + vz);
    }

})();