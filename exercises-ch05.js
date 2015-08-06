function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
};

var arrays = [[2, 4, 6], [8], [10, 12]];
var concatFunction=function(a,b){return a.concat(b);}

console.log(arrays.reduce(concatFunction));

// check to see if every element in the array is divisible by 3
var every= function(array, divisible){
	for(var i=0; i<array.length; i++){
		if(array[i]%3===0){return true;}
		else{return false;}
	}
}

console.log("Running every " + every([9, 48, 204, 528942],3));

//check to see if some of the functions has a length of 9 
var some=function(array,length){
	for(var i=0; i<array.length;i++){
		if(array[i].length===9){
			return true;
		}
		else return false;
	}
}

console.log("Running some " + some(['aardvark', 'abbreviate', 'abacuses', 'abandoners', 'abalones'],9));