function sortByCharacter (text) {
// #1
// with built in function:
//return text.split('').sort().join('')

// #2
//without using .sort():
var arr= text.split('')
  for (var i = 0; i < arr.length; i++){

    for (var n = 0; n < arr.length; n++){

      if(arr[i] < arr[n]){
        var kosong = arr[i]
        arr[i] = arr[n]
        arr[n] = kosong
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