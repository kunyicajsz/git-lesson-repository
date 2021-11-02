'use strict';
export { };

let shots: string [] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
let doubleShots = shots.map(function(e) {
    return e + e;

});
console.log(doubleShots);