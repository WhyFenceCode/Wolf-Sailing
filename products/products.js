function main(){
  const urlParams = new URLSearchParams(window.location.search);
  const sid = urlParams.get('sid');

  import data from 'products/sid/sid_'+ sid +'.json?type=module';
  console.log(data);  
}
