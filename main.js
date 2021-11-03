function listen(){
    word = document.getElementById("txt_speaked").value;
pups = document.getElementById("pups");
    if (word == "chase"){
        pups.src="chase.jfif";
    }
    else if(word=="marshall"){
        pups.src="marshall.jpg";
    }
    else if(word=="rocky"){
        pups.src="rocky.jpg";
    }
    else if(word=="rubble"){
        pups.src="rubble.jpg";
    }
    else if(word=="skye"){
        pups.src="skye.jfif";
    }
    else if(word=="zuma"){
        pups.src="zuma.jpg";
    }
    else if(word=="everest"){
        pups.src="everest.png";
    }
    else if(word=="tracker"){
        pups.src="tracker.png";
    }
    else if(word=="tuck and ella"){
        pups.src="tuck.jpg";
    }
    else if(word=="rex"){
        pups.src="rex.jpg";
    }
    else{
        pups.src="ppp.jpg";
    }
}
