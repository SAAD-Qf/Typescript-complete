const start_bike = new Promise<void>((resolve, reject) => {
    setTimeout(() => {
        console.log("start a motorcycle ..... ");
        resolve();
    }, 1000);
});

const shift_1st = new Promise<void>((resolve, reject) => {
    setTimeout(() => {
        console.log("shift to first gear ...... ");
        resolve();
    }, 2000);
});

const shift_2nd = new Promise<void>((resolve, reject) => {
    setTimeout(() => {
        console.log("shift to second gear ...... ");
        resolve();
    }, 3000);
});

const shift_3rd = new Promise<void>((resolve, reject) => {
    setTimeout(() => {
        console.log("shift to third gear ...... ");
        resolve();
    }, 4000);
});

const shift_4th = new Promise<void>((resolve, reject) => {
    setTimeout(() => {
        console.log("shift to fourth gear ...... ");
        resolve();
    }, 5000);
});

start_bike
    .then(() => shift_1st)
    .then(() => shift_2nd)
    .then(() => shift_3rd)
    .then(() => shift_4th);

    // promises in function acchive cuncurency

    function s_b () {
        console.log("bike is standing on off position");
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve (' \n start a motercycle .... \n ');
            }, 1500);
        })
    }

    function s_1() {
        console.log("bike is start !");
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve ("\n shift first gear .... \n ");
            }, 2500 );
        })
    }

    function s_2() {
        console.log("bike is running ...");
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve("\n shift secound gear .....\n "); 
            }, 3500);
        })
    }

    function s_3() {
        console.log("bike is running ...");
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve("\n shift third gear ..... \n ");
            }, 4500);
        })
    }

    function s_4() {
        console.log("bike is running ...");
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve("\n shift forth gear .... \n ");
            }, 5500);
        })
    }

    // invocation of promises

    s_b()
    .catch((value)=>{
        console.log(value);
    })
    .then((value) => {
        console.log(value);
        return s_1();
        // its s_1 catch and then invocation
    }).catch((value)=>{
        console.log(value);
    })
    .then((value) => {
        console.log(value);
        return s_2();
        // its s_2 invocation
    }).catch((value)=> {
        console.log(value);
    })
    .then((value) => {
        console.log(value);
        return s_3();
        // its s_3 invocation
    }).catch((value)=>{
        console.log(value);
    })
    .then((value)=>{
        console.log(value);
        return s_4();
        // its s_4 invocation
    }).catch((value) => {
        console.log(value);
    })
    .then((value)=>{
        console.log(value);
    })
    



