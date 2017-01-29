power function
var power= function(x,y){
var result = 1;
for(var count = 0; count<y; count ++)
result *=x;
return result;
};

console.log(power(2, 10))
