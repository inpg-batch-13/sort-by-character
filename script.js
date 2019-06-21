function swap(a, b) {
  var c = a
  a = b
  b = c
}

function sortByCharacter (text) {
  // Your code here

 var str = text.split('')
  for (var i = 0; i < str.length - 2; i++) {
    for (var j = 0; j < str.length - i; j++) {
      if (str[j] > str[j + 1]) {
        var temp = str[j]
        str[j] = str[j + 1]
        str[j + 1] = temp
      }
    }
  }

  return str.join('')
}

// TEST CASES
console.log(sortByCharacter('hello')); // 'ehllo'
console.log(sortByCharacter('truncate')); // 'acenrttu'
console.log(sortByCharacter('developer')); // 'deeeloprv'
console.log(sortByCharacter('software')); // 'aeforstw'
console.log(sortByCharacter('aegis')); // 'aegis'