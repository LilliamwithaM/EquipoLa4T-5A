*********simpson.ts*****************

    import { func2x } from "./func2x";
    import { funcx2 } from "./funcx2";
    import { func1x } from "./func1x";

    export function simpson(x0:number, x1:number, num_seg:number,op:string){

    let w = (x1-x0)/num_seg;
    let wDiv3 = w/3;
    let x = 0, i = 0, y = 0;
    let area;
    let integral = 0;
    console.log("esto vale i al inicio = "+i)
    do{
  
        if(i == 0 || i == num_seg){
            if(op == 'm'){
                y = func2x(x) * 1;
                console.log("func2x");
            }else if(op == 'd'){
                console.log("x = " + x);
                if(x == 0){
                    y = 0;
                }else{
                    y = func1x(x) * 1;
                }
                console.log("func1/x " + "y = "+y);
            }else{
                y = funcx2(x) * 1;
                console.log("funcxpow2");
            }
                        
            area = y * wDiv3;
            console.log("area = " + area + "multiplicador = 1 ");
        }else if(i%2 == 0){
            if(op == 'm'){
                y = func2x(x) * 2;
                console.log("func2x");
            }else if(op == 'd'){
                y = func1x(x) * 2;
                console.log("func1/x " + "y = "+y);
            }else{
                y = funcx2(x) * 2;
                console.log("funcxpow2");
            }
            area = y * wDiv3;
            console.log("area = " + area + "multiplicador = 2 ");

        }else{
            if(op == 'm'){
                y = func2x(x) * 4;
                console.log("func2x");
            }else if(op == 'd'){
                y = func1x(x) * 4;
                console.log("func1/x " + "y = "+y);
            }else{
                y = funcx2(x) * 4;
                console.log("funcxpow2");
            }
            area = y * wDiv3;
            console.log("area = " + area + "multiplicador = 4 ");
        }


        x = x+w;
        console.log("esto vale x ahora = "+x);
        integral = integral + area;
        i++;
        console.log("el numero de segmento es = "+ num_seg +" esto vale i ahora =" + i );
    }while(i<=num_seg);


    return integral;

    }

************func2x.ts********************

export function func2x(x:number){
    let result = x*2;
    return result;
}



************func1x.ts********************
export function func1x(x:number){
    let resultado = (1/x);
    return resultado;
}

************funcx2.ts********************

export function funcx2(x:number){
    let resultado = x*x;
    return resultado;
}