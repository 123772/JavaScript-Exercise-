//Questions on functions 

// define function and call function
function myFirst() {	
    console. log("hellow" );
}
myFirst();
// print parameter 
function mySecond(a){
	console. log(a);
}
mySecond("cat" );
//print mySecond using parameter myThird
function myThird(Muslim){
    console. log(Muslim);
}
mySecond("Muslim");
//print first number using function delegate
function myNewest(number){
	console.log(number[0]);
}
function myFourth(num){
	
	myNewest(num);
}
myFourth([34,54,67,32]);
// print sum number of parameter
function sum([x, y]){
	console.log([x + y]);
}
//Questions on functions from edabit (https://edabit.com) 
sum([22,37]);
//convert minute to second
function minute(g){
	console.log(g * 60 + " seconds" );
}
minute(6);
//increments the number by 1
function number(n){
	return n + 1;
}
console.log(number(6));
//calculate the area
function area(height, base){
	return base * height ;
}
console.log(area(30,40));
//calculate the total leg of all animal
function total(chicken, cow, pig){
    return chicken *2 + cow * 4 + pig * 4;
}
console.log(total(2,4,4) + " legs" );
//3 multiple of first number
function arr([h, d]){
	return 3*h;
}
console.log(arr([12,5]));

	