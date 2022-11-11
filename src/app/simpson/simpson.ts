import { func2x } from "./func2x";
import { funcx2 } from "./funcx2";
import { func1x } from "./func1x";

export function simpson(x0:number, x1:number, num_seg:number,op:string){

let w = (x1-x0)/num_seg;
let wDiv3 = w/3;
let x = 1, i = 0, y = 0, integral = 0;
let area;
if(op != 'd'){
    x = 0;
}
 
    do{
  
        if(i == 0 || i == num_seg){
            if(op == 'm'){
                y = func2x(x) * 1;
            }else if(op == 'd'){
                y = func1x(x) * 1;
            }else{
                y = funcx2(x) * 1;
            }            
            area = y * wDiv3;

        }else if(i%2 == 0){
            if(op == 'm'){
                y = func2x(x) * 2;
            }else if(op == 'd'){
                y = func1x(x) * 2;
            }else{
                y = funcx2(x) * 2;
            }
            area = y * wDiv3;

        }else{
            if(op == 'm'){
                y = func2x(x) * 4;
            }else if(op == 'd'){
                y = func1x(x) * 4;
            }else{
                y = funcx2(x) * 4;
            }
            area = y * wDiv3;
        }

        x = x+w;
        integral = integral + area;
        i++;
    }while(i<=num_seg);

    let p = Number((integral).toFixed(5));

    return p;

}