console.log("Main Function Exec");

const urlParams = new URLSearchParams(window.location.search);
const sid = urlParams.get('sid');

const sidData = await fetch(`products/sid/sid_${sid}.json`);
const parsedData = await sidData.json();
const feat = parsedData.feat;
const type = parsedData.type;
const seri = parsedData.seri;
const pids = parsedData.pids;

topImg(parsedData.img, parsedData.name);

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
  var parent = document.querySelector("." + parent);
  var child = document.createElement("div");
  child.setAttribute("class", name);
  parent.appendChild(child);
  console.log(parent + name);
}

function topImg(url, text){

  addDiv("content", "topImage");
  var img = document.createElement("img");
  img.src = url;
  var addedh1 = document.createElement("h1");
  h1.textContent = text;
  var imgParent = document.querySelector(".topImage");
  imgParent.appendChild(img);
  imgParent..appendChild(addedh1);
}

function featFunc(item, index){
  
}

function typeFunc(item, index){
  
}

function seriFunc(item, index){
  
}

function addProduct(item, index){
  
}

