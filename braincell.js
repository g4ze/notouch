const btn = document.querySelector('button');
let timeoutId;
happi=['happi1.png','happi2.png','happi3.png'];
sad=['sed1.png','sed2.png'];
var counter=0;
var counter2=0;
btn.addEventListener('click', func);
btn.addEventListener('mouseover', func);
const img1 = document.getElementById('sehaj');


function func(e) {
    clearTimeout(timeoutId); // Clear previous timeout if any
    if (counter==2){
      counter=0;
    }
    newimg=sad[counter];
    imgurl="images/"+newimg;
    console.log(imgurl);
    img1.style.backgroundImage = "url('"+imgurl+"')";
    console.log(e.target);
    e.target.style.background = 'red';
    counter++;


    if (Math.random() > 0.5) {
        e.target.innerHTML = 'Nooooooooooooo!!!!!!';
    } else {
        e.target.innerHTML = 'DONT TOUCHYYYY!!!!!!';
    }

    e.target.style.color = 'white';
    e.target.style.fontSize = '1rem';

    btn.style.transform = 'translate(-50%, -50%) rotate(' + Math.random() * 360 + 'deg)';
    btn.style.transition = 'all 0.5s ease';
    btn.style.borderRadius = Math.random() * 50 + '%';
    btn.style.boxShadow = '0 0 50px blue';
    btn.style.top = Math.random() * 100 + '%';
    btn.style.left = Math.random() * 100 + '%';
    btn.style.position = 'absolute';
    btn.style.fontWeight = 'bold';
    btn.style.scale = '1.5';

    // Set a timeout for reset after 3 seconds (adjust the time as needed)
    timeoutId = setTimeout(() => {
        resetStyles();
    }, 4000);
}

function resetStyles() {
    btn.style = ''; // Reset all styles to their default values
    btn.innerHTML = 'Hmmmm good';
    btn.style.background = 'green';
    btn.style.color = 'white';
    btn.style.fontSize = '1rem';
    if (counter2==3){
      counter2=0;
    }
    newimg=happi[counter2++];
    imgurl="images/"+newimg;
    console.log(imgurl);
    img1.style.backgroundImage = "url('"+imgurl+"')";

}

const textCursorDataURL = getTextCursorDataURL("NILAY😚");

document.body.style.cursor = `url('${textCursorDataURL}'), auto`;

function getTextCursorDataURL(text) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = 60; // Adjust the width of the canvas as needed
    canvas.height = 30; // Adjust the height of the canvas as needed

    context.font = "bold 14px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL();
}
