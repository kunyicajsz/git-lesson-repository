'use strict';

let lineCount: number = 4;

    for (let i: number = 0; i <= lineCount; i++) {
            let rowCount: number = 4;
                let csillagok: string = "";
            for (let j: number = 0; j <= rowCount; j++) {
            if (j <= i) {
                csillagok = csillagok + "*";
                } 
            } 
        console.log(csillagok);
    }