
function Product(id, value, type){
  this.id = id;
  this.value = value;
  this.type = type;
}

export default () => {
  let consonants = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'].map(item => new Product(item.charCodeAt(0) - 65, item, 'consonant'));

  let vowels = ['A','E','I','O','U'].map(item => new Product(item.charCodeAt(0) - 65, item, 'vowel'));

  return [...vowels, ...consonants].sort((a,b) => a.id - b.id);
};