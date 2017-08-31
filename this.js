var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};
//Invokes getFullname as a function
console.log(obj.prop.getFullname())

// returns undefiend
// var test = obj.prop.getFullname;
// invokes getFullname as an object
// console.log(test());


// returns 'Aurelio De Rosa'
var test = obj.prop.fullname;
console.log(test)
