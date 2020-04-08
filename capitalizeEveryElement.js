var foundingAvengers = ['ant-man', 'wasp', 'hulk', 'thor', 'iron man', 'captain america'];

foundingAvengers = foundingAvengers.map(function (x) { return x.toUpperCase() })

toUpper = function (x) {
    return x.toUpperCase();
};
foundingAvengers = foundingAvengers.map(toUpper);

console.log(foundingAvengers);

/* function(){
    var assemble = foundingAvengers.map(function(x){console.log(assemble.toUpperCase)});
    } */

/* Assemble(); */




   /*  toUpper = function (x) {
        return x.toUpperCase();
    };
array2 = array2.map(toUpper); */

//Failed Code Attempts- these actually worked, but just didn't follow instructions
/* var avengersAssemble = [];
/* for (var i = 0; i < foundingAvengers.length; i++){
    avengersAssemble.push(foundingAvengers[i].toUpperCase());
} */

/* function toUpper(item) {
    return item.toUpperCase();
}

var stockUppercase = inStock.map(toUpper); */