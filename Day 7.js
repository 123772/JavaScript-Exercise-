//Questions on built in JavaScript methods 
//Question: 9 remove the last number and add 32
let sampleArray = [ 5,6,99,8,76,4,68,44 ];
function update(sampleArray){
   sampleArray.pop();
   sampleArray.push(32);
   console.log(sampleArray);
}
update(sampleArray);

//Question :10 Ascending order
function sortAscending(sampleArray){
	sampleArray.sort(function(a, b) {return(a-b)});
	console.log(sampleArray)
}
sortAscending(sampleArray);


	
	
