console.log("Main Function Exec");

const urlParams = new URLSearchParams(window.location.search);
const sid = urlParams.get('sid');

let colcount = 0;

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
    colcount ++;
    feat.forEach(featFunc);
  }

  if (type.length > 0) {
    addDiv("sidcol", "typecol")
    colcount ++;
    type.forEach(typeFunc);
  }

  if (seri.length > 0) {
    addDiv("sidcol", "sericol")
    colcount ++;
    seri.forEach(seriFunc);
  }
  changeWidth(['sericol', 'featcol', 'typecol'], 100 / (colcount + "%"));
} else if (type.length > 0) {
  addDiv("content", "sidcol")
  
  if (feat.length > 0) {
    addDiv("sidcol", "featcol")
    colcount ++;
    feat.forEach(featFunc);
  }

  if (type.length > 0) {
    addDiv("sidcol", "typecol")
    colcount ++;
    type.forEach(typeFunc);
  }

  if (seri.length > 0) {
    addDiv("sidcol", "sericol")
    colcount ++;
    seri.forEach(seriFunc);
  }
  changeWidth(['sericol', 'featcol', 'typecol'], 100 / (colcount + "%"));
} else if (seri.length > 0) {
  addDiv("content", "sidcol")
  
  if (feat.length > 0) {
    addDiv("sidcol", "featcol")
    colcount ++;
    feat.forEach(featFunc);
  }

  if (type.length > 0) {
    addDiv("sidcol", "typecol")
    colcount ++;
    type.forEach(typeFunc);
  }

  if (seri.length > 0) {
    addDiv("sidcol", "sericol")
    colcount ++;
    seri.forEach(seriFunc);
  }
  changeWidth(['sericol', 'featcol', 'typecol'], 100 / (colcount + "%"));
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
  addedh1.textContent = text;
  var imgParent = document.querySelector(".topImage");
  imgParent.appendChild(img);
  imgParent.appendChild(addedh1);
}

async function featFunc(item, index){
  const featsidData = await fetch(`products/sid/sid_${item}.json`);
  const featparsedData = await featsidData.json();
  
  addLink("featcol", "https://whyfencecode.github.io/Wolf-Sailing/products.html?sid=${item}", featparsedData.name);
}

async function typeFunc(item, index){
  const typesidData = await fetch(`products/sid/sid_${item}.json`);
  const typeparsedData = await typesidData.json();
  
  addLink("typecol", "https://whyfencecode.github.io/Wolf-Sailing/products.html?sid=${item}", typeparsedData.name);
}

async function seriFunc(item, index){
  const serisidData = await fetch(`products/sid/sid_${item}.json`);
  const seriparsedData = await serisidData.json();
  
  addLink("sericol", "https://whyfencecode.github.io/Wolf-Sailing/products.html?sid=${item}", seriparsedData.name);
}

function addProduct(item, index){
  
}

function changeWidth(classNames, newWidth) {
    // Loop through each class name
    for (var j = 0; j < classNames.length; j++) {
        // Get all elements with the current class name
        var elements = document.getElementsByClassName(classNames[j]);

        // Loop through each element and change the width
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.width = newWidth;
        }
    }
}

function addLink(parent, url, text){
  var a = document.createElement("a");
  a.href = url;
  a.textContent = text;
  var linkParent = document.querySelector("." + parent);
  linkParent.appendChild(a);
}

