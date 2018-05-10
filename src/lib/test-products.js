
function Product(id, value){
  this.id = id;
  this.value = value;
}

export default () => [...Array(16)].map((item, i) => new Product(i, String.fromCharCode(65 + i)));