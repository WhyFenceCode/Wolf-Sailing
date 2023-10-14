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
}

function add2Div(parent, name, classname){
  var parent = document.querySelector("." + parent);
  var child = document.createElement("div");
  child.setAttribute("class", name + " " + classname);
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

async function addProduct(item, index){
  const pidData = await fetch(`products/pid/pid_${item}.json`);
  const parsedpidData = await pidData.json();
  
  let p1 = document.querySelector(".col" + prodcol);
  let c1 = document.createElement("div");
  c1.setAttribute("class", "product");
  let p2 = p1.appendChild(c1);
  let c2 = document.createElement("div");
  c2.setAttribute("class", "prodimg");
  p2.appendChild(c2);
  let c3 = document.createElement("div");
  c3.setAttribute("class", "prodname");
  let namep = p2.appendChild(c3);
  let c4 = document.createElement("div");
  c4.setAttribute("class", "prodcolors");
  p2.appendChild(c4);
  
  addColorBox(c4, parsedpidData.colors);
  
  let c5 = document.createElement("div");
  c5.setAttribute("class", "prodbuy");
  let buyp = p2.appendChild(c5);

  c2.style.backgroundImage = 'url("' + parsedpidData.img + '")';
  let nameh3 = document.createElement('h3');
  nameh3.textContent = parsedpidData.name;
  namep.appendChild(nameh3);

  let buyh3 = document.createElement('h3');
  buyh3.textContent = "Check It Out";

  buyh3.onclick = function() {
    // Your code here
    window.location = "product.html?pid=" + item;
  };

  buyp.appendChild(buyh3);
  
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

function addColorBox(parent, colors){
  
  for (let i = 1; i <= 10; i++) {
    let colorbox = document.createElement("div");
    colorbox.setAttribute("class", "color" + i);
    let colorparent = parent.appendChild(colorbox);
    if (colors[i - 1] != "undefined"){
      console.log(colors[i -1]);
      let colordiv = document.createElement("div");
      colordiv.setAttribute("class", "color");
      let colordivchange = colorparent.appendChild(colordiv);
      colordivchange.style.backgroundColor = colors[i - 1];
    }
  }
}
