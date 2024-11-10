"use strict";
// cuncurrency with callbacks
// with oprations of motercycle
function start(func) {
    console.log("start a motercycle");
    setTimeout(() => {
        console.log("motercycle is starts now !!! ...");
        func();
    }, 5000);
}
function shift(func1) {
    console.log("press the cluch");
    setTimeout(() => {
        console.log("shift first gear .....");
        func1();
    }, 6000);
}
function shifts(func2) {
    console.log("again press the cluch");
    setTimeout(() => {
        console.log("shift secound gear .....");
        func2();
    }, 5000);
}
function shifting(func3) {
    console.log("again press the cluch");
    setTimeout(() => {
        console.log("shift third gear .....");
        func3();
    }, 5000);
}
function shiftes(func4) {
    console.log("again press the cluch");
    setTimeout(() => {
        console.log("shift forth gear ......");
        func4();
    }, 5000);
}
function breaks(func5) {
    console.log("agin press the cluch !");
    setTimeout(() => {
        console.log("neutral the bike ......!");
        func5;
    }, 5000);
}
// invoked all the functions 
start(() => {
    shift(() => {
        shifts(() => {
            shifting(() => {
                shiftes(() => {
                    breaks(() => {
                    });
                });
            });
        });
    });
});
