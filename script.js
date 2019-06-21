function sortByCharacter (text) {
  // Your code here
  var arr = text.split('')
  var result = []
  
  for(var i = 0; i < arr.length; i++ ){
    for(var j = 0; j < arr.length; j ++){
     
    if(arr[i] < arr[j]){
      var s = arr[i]
      arr[i] = arr[j]
      arr[j] = s
  }
}
}
    
  return arr.join('')
}

// TEST CASES
console.log(sortByCharacter('hello')); // 'ehllo'
console.log(sortByCharacter('truncate')); // 'acenrttu'
console.log(sortByCharacter('developer')); // 'deeeloprv'
console.log(sortByCharacter('software')); // 'aeforstw'
console.log(sortByCharacter('aegis')); // 'aegis'