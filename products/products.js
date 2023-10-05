function main(){
  const urlParams = new URLSearchParams(window.location.search);
  const sid = urlParams.get('sid');

  import data from './'+ sid +'.json?type=module';
  console.log(data);  
}
