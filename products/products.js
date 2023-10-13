console.log("Main Function Exec");
let prodcol = 1;

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
    addH3("featcol", "Featured")
    colcount ++;
    feat.forEach(featFunc);
  }

  if (type.length > 0) {
    addDiv("sidcol", "typecol")
    addH3("typecol", "Type")
    colcount ++;
    type.forEach(typeFunc);
  }

  if (seri.length > 0) {
    addDiv("sidcol", "sericol")
    addH3("sericol", "Series")
    colcount ++;
    seri.forEach(seriFunc);
  }
  changeWidth(['sericol', 'featcol', 'typecol'], 100 / (colcount + "%"));
} else if (type.length > 0) {
  addDiv("content", "sidcol")
  
  if (feat.length > 0) {
    addDiv("sidcol", "featcol")
    addH3("featcol", "Featured")
    colcount ++;
    feat.forEach(featFunc);
  }

  if (type.length > 0) {
    addDiv("sidcol", "typecol")
    addH3("typecol", "Type")
    colcount ++;
    type.forEach(typeFunc);
  }

  if (seri.length > 0) {
    addDiv("sidcol", "sericol")
    addH3("sericol", "Series")
    colcount ++;
    seri.forEach(seriFunc);
  }
  changeWidth(['sericol', 'featcol', 'typecol'], 100 / (colcount + "%"));
} else if (seri.length > 0) {
  addDiv("content", "sidcol")
  
  if (feat.length > 0) {
    addDiv("sidcol", "featcol")
    addH3("featcol", "Featured")
    colcount ++;
    feat.forEach(featFunc);
  }

  if (type.length > 0) {
    addDiv("sidcol", "typecol")
    addH3("typecol", "Type")
    colcount ++;
    type.forEach(typeFunc);
  }

  if (seri.length > 0) {
    addDiv("sidcol", "sericol")
    addH3("sericol", "Series")
    colcount ++;
    seri.forEach(seriFunc);
  }
  changeWidth(['sericol', 'featcol', 'typecol'], 100 / (colcount + "%"));
}

addprodcolums()
pids.forEach(addProduct);


function addDiv(parent, name){
  var parent = document.querySelector("." + parent);
  var child = document.createElement("div");
  child.setAttribute("class", name);
  parent.appendChild(child);
  console.log(parent + name);
}

function add2Div(parent, name, classname){
  var parent = document.querySelector("." + parent);
  var child = document.createElement("div");
  child.classList.add(name);
  child.classList.add(classname);
  parent.appendChild(child);
  console.log(parent + name);
}

function add3Div(parent, name){
  var parent = document.querySelector("." + parent);
  var child = document.createElement("div");
  child.setAttribute("class", name);
  parent.appendChild(child);
  console.log(parent + name);
}

function addprodcolums(){
  addDiv("content", "products");
  addDiv("products", "col1");
  addDiv("products", "col2");
  addDiv("products", "col3");
  
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

function addH3(parent, text){
  var addedh3 = document.createElement("h3");
  addedh3.textContent = text;
  var h3parent = document.querySelector("." + parent);
  h3parent.appendChild(addedh3);
}

async function featFunc(item, index){
  const featsidData = await fetch(`products/sid/sid_${item}.json`);
  const featparsedData = await featsidData.json();
  
  addLink("featcol", "https://whyfencecode.github.io/Wolf-Sailing/products.html?sid=" + item, featparsedData.name);
  addBr("featcol");
}

async function typeFunc(item, index){
  const typesidData = await fetch(`products/sid/sid_${item}.json`);
  const typeparsedData = await typesidData.json();
  
  addLink("typecol", "https://whyfencecode.github.io/Wolf-Sailing/products.html?sid=" + item, typeparsedData.name);
  addBr("typecol");
}

async function seriFunc(item, index){
  const serisidData = await fetch(`products/sid/sid_${item}.json`);
  const seriparsedData = await serisidData.json();
  
  addLink("sericol", "https://whyfencecode.github.io/Wolf-Sailing/products.html?sid=" + item, seriparsedData.name);
  addBr("sericol");
}

function addProduct(item, index){
  item = numtoa(item);
  add2Div("col" + prodcol, "product", item);
  add3Div(item, "prodimg");
  add3Div(item, "prodname");
  add3Div(item, "prodcolors");
  add3Div(item, "prodbuy");
  if (prodcol < 3){
    prodcol ++;
  }else{
    prodcol = 1;
  }
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

function addBr(parent){
  var brParent = document.querySelector("." + parent);
  var br = document.createElement('br');
  brParent.appendChild(br);
}

function replaceAt(origString, index, replacement) {
   let arr = origString.split('');
   arr[index] = replaceChar;
   return arr.join('');
}

function numtoa(numb){
  for (let i = 0; i < numb.length; i++) {
    if (numb.charAt(i) == "1"){
      numb = replaceAt(numb, i, "a")
    }
    if (numb.charAt(i) == "2"){
      item.charAt(i) = "b";
    }
    if (numb.charAt(i) == "3"){
      item.charAt(i) = "c";
    }
    if (numb.charAt(i) == "4"){
      item.charAt(i) = "d";
    }
    if (numb.charAt(i) == "5"){
      item.charAt(i) = "e";
    }
    if (numb.charAt(i) == "6"){
      item.charAt(i) = "f";
    }
    if (numb.charAt(i) == "7"){
      item.charAt(i) = "g";
    }
    if (numb.charAt(i) == "8"){
      item.charAt(i) = "h";
    }
    if (numb.charAt(i) == "9"){
      item.charAt(i) = "i";
    }
  }
}
