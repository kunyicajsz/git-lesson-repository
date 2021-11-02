'use strict';
export {}

export function drawPyramid() {
    let lineCount: number = 4;

    for (let i: number = 0; i < lineCount; i++) {
        let rowCount: number = 4;
        let csillagok: string = "";
        for (let l: number = 0; l < rowCount - i; l++)
            csillagok = csillagok + " ";
        for (let m: number = 1; m <= i; m++)
            csillagok = csillagok + "*";
        for (let j: number = 0; j <= rowCount; j++) {
            if (j <= i) {
                csillagok = csillagok + "*";
            }
        }
        console.log(csillagok);
    }  }
    drawPyramid();