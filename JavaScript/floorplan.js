function changeSrc() {
    if (document.getElementById("3rd").checked) {
    document.getElementById("floorplan-image").src = "../img/floorplans/1vp3rd.svg";
    document.getElementById("floor-number").innerHTML = "3rd Floor";
    document.getElementById("desk-number").innerHTML = "Up to 40 desks";
    document.getElementById("sq-ft").innerHTML = "3,278 sq ft";
    document.getElementById("space-id").innerHTML = "Fitted Space";
    document.getElementById("blank-tag").classList.remove('active');


    } else if (document.getElementById("4th").checked) { 
    document.getElementById("floorplan-image").src = "../img/floorplans/1valentine4th.png";
    document.getElementById("floor-number").innerHTML = "4th Floor";
    document.getElementById("desk-number").innerHTML = "Up to 40 desks";
    document.getElementById("sq-ft").innerHTML = "2,435 sq ft";
    document.getElementById("space-id").innerHTML = "CAT-A Space";
    document.getElementById("blank-tag").classList.add('active');
    
    } else if (document.getElementById("5th").checked) { 
    document.getElementById("floorplan-image").src = "../img/floorplans/1valentine5th.png";
    document.getElementById("floor-number").innerHTML = "5th Floor";
    document.getElementById("desk-number").innerHTML = "Up to 40 desks";
    document.getElementById("sq-ft").innerHTML = "2,434 sq ft";
    document.getElementById("space-id").innerHTML = "Fitted Space";
    document.getElementById("blank-tag").classList.remove('active');


    } else if (document.getElementById("6th").checked) { 
    document.getElementById("floorplan-image").src = "../img/floorplans/1valentine6th.png";
    document.getElementById("floor-number").innerHTML = "6th Floor";
    document.getElementById("desk-number").innerHTML = "Up to 40 desks";
    document.getElementById("sq-ft").innerHTML = "2,424 sq ft";
    document.getElementById("space-id").innerHTML = "CAT-A Space";
    document.getElementById("blank-tag").classList.add('active');


}
}




