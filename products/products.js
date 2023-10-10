function main(){

  console.log("Main Function Exec");
  
  const urlParams = new URLSearchParams(window.location.search);
  const sid = urlParams.get('sid');

  import jsondata from 'products/sid/sid_'+ sid +'.json';
  var feat = jsondata.feat;
  var feat = jsondata.type;
  var feat = jsondata.seri;
  var feat = jsondata.pids;

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
  
}

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

function featFunc(item, index){
  
}

function typeFunc(item, index){
  
}

function seriFunc(item, index){
  
}

function addProduct(item, index){
  
}

