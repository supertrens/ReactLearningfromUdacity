// function createArrayOfFunctions(y){
// 	var arr = [];
// 	for(var i = 0 ; i<y ; i++){
// 		arr[i] = function(x){
// 			return x+i ;
// 		}
// 	} 
// 	return arr ;
// }


// var arr = createArrayOfFunctions(5);
// console.log(arr);

/*==================== BUG ==========================*/
/*
 * If we run this following snipset the array will contains the function
 * n elements in the form of  [[function] , [function] , ...... , [function]]
 * starting from indices 0 to n-1.
 * Due to the fact that  we have a function expression of an anonymous function
 * assigned to the variable arr[i] // arr[i] = function(x){ return x +1 ;}
 * 
 */


// function createArrayOfFunctions(y){
// 	var arr = [];
// 	for(var i = 0 ; i<y ; i++){
// 		arr[i] = function(x){
// 			return x+i ;
// 		}
// 	} 
// 	return arr ;
// }


// var arr = createArrayOfFunctions(5);
// console.log(arr);
var x = function() {
   return 2 * 2;
};
console.log(x);