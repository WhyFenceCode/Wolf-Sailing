console.log("Main Function Exec");

const urlParams = new URLSearchParams(window.location.search);
const sid = urlParams.get('sid');

const sidData = await fetch(`products/sid/sid_${sid}.json`);
const parsedData = await sidData.json();
const feat = parsedData.feat;
const type = parsedData.type;
const seri = parsedData.seri;
const pids = parsedData.pids;

topImg(parsedData.img);

if (feat.length > 0) {
  addDiv("content", "sidcol")
  
  if (feat.length > 0) {
    addDiv("sidcol", "featcol")
    feat.forEach(featFunc);
  }

  if (type.length > 0) {
    addDiv("sidcol", "typecol")
    type.forEach(typeFunc);
  }

  if (seri.length > 0) {
    addDiv("sidcol", "sericol")
    seri.forEach(seriFunc);
  }
} else if (type.length > 0) {
  addDiv("content", "sidcol")
  
  if (feat.length > 0) {
    addDiv("sidcol", "featcol")
    feat.forEach(featFunc);
  }

  if (type.length > 0) {
    addDiv("sidcol", "typecol")
    type.forEach(typeFunc);
  }

  if (seri.length > 0) {
    addDiv("sidcol", "sericol")
    seri.forEach(seriFunc);
  }
} else if (seri.length > 0) {
  addDiv("content", "sidcol")
  
  if (feat.length > 0) {
    addDiv("sidcol", "featcol")
    feat.forEach(featFunc);
  }

  if (type.length > 0) {
    addDiv("sidcol", "typecol")
    type.forEach(typeFunc);
  }

  if (seri.length > 0) {
    addDiv("sidcol", "sericol")
    seri.forEach(seriFunc);
  }
}

pids.forEach(addProduct);


function addDiv(parent, name){
  // Get the parent element by class
  var parent = document.querySelector("." + parent);
  
  // Create a new div element
  var child = document.createElement("div");
  
  // Set the class attribute of the child element
  child.setAttribute("class", name);
  
  // Append the child element to the parent element
  parent.appendChild(child);

  console.log(parent + name);
}

function topImg(url){

  addDiv("content", "topImage");
  var img = document.createElement("img");

  // set the src attribute of the image to the url
  img.src = url;
  

  var imgParent = document.querySelector(".topImage");
  
  // append the image to the body of the document
  imgParent.appendChild(img);
}

function featFunc(item, index){
  
}

function typeFunc(item, index){
  
}

function seriFunc(item, index){
  
}

function addProduct(item, index){
  
}

