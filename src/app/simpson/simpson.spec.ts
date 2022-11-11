import { simpson } from './simpson';

describe('regrecion', () =>{

    
        it('Should return p = 16 if f(x)=2x, x0 = 0, x1 = 4 y num_seg = 4',()=>{
         const result = simpson(0,4,4,'m',);
         expect(result).toBe(16);
     })  
        it('Should return p = 0.33333 if f(x)=x*x, x0 = 0, x1 = 1 y num_seg = 4',()=>{
        const result = simpson(0,1,4,'p');
        expect(result).toBe(0.33333);
    })  
     it('Should return p = 1.3877 if f(x)=1/x, x0 = 1, x1 = 4 y num_seg = 6',()=>{
        const result = simpson(1,4,6,'d');
        expect(result).toBe(1.3877);
    })  
})