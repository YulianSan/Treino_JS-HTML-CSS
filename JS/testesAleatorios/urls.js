function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;
  
    xhr.onload = function() {
      callback(xhr.response);
};

xhr.send();
}

function displayImage(blob) {
console.log(blob);
let objectURL = URL.createObjectURL(blob);

let image = document.createElement('img');
image.src = objectURL;
document.body.appendChild(image);
}

loadAsset(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_Ent2KWcAqdYH2RJoucWn-93kwJqMkaiDA&usqp=CAU`,'blob', displayImage);

fetch('coffee.jpg')
.then(response => response.blob())
.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});