function main(){
  const urlParams = new URLSearchParams(window.location.search);
  const sid = urlParams.get('sid');

  import data from 'products/sid/sid_'+ sid +'.json?type=module';
  var feat = obj.feat.fields;
  var feat = obj.type.fields;
  var feat = obj.seri.fields;
  var feat = obj.pids.fields;

  if (feat.length > 0) {
    if (feat.length > 0) {
      feat.forEach(featFunc);
    }
  
    if (type.length > 0) {
      type.forEach(typeFunc);
    }
  
    if (seri.length > 0) {
      seri.forEach(seriFunc);
    }
  } else if (type.length > 0) {
    if (feat.length > 0) {
      feat.forEach(featFunc);
    }
  
    if (type.length > 0) {
      type.forEach(typeFunc);
    }
  
    if (seri.length > 0) {
      seri.forEach(seriFunc);
    }
  } else if (seri.length > 0) {
    if (feat.length > 0) {
      feat.forEach(featFunc);
    }
  
    if (type.length > 0) {
      type.forEach(typeFunc);
    }
  
    if (seri.length > 0) {
      seri.forEach(seriFunc);
    }
  }

  pids.forEach(addProduct);
  
}

function featFunc(item, index){
  
}

function typeFunc(item, index){
  
}

function seriFunc(item, index){
  
}

function addProduct(item, index){
  
}

