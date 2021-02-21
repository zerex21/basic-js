module.exports = function countCats(backyard) {
 // throw 'Not implemented';
  // remove line with error and write your code here
   let res = 0;
  backyard.forEach(item => {
    item.forEach(item2 => {
      if (item2 === '^^') {
        res++;
      }
    })    
  });
  return res; 

};

