import { t} from './t';

describe('t', () =>{

    
        it('Should return p = 0.35006 if X = 1.1, num_seg = 10 and Dof = 9',()=>{
         const result = t(9,10,1.1);
         expect(result).toBe(0.35006);
     })  
        it('Should return p = 0.36757 if X = 1.1812, num_seg = 10 and Dof = 10',()=>{
        const result = t(10,10, 1.18120);
        expect(result).toBe(0.36757);
    })  
     it('Should return p = 0.49500 if X = 2.750, num_seg = 10 and Dof = 30',()=>{
        const result = t(30,10, 2.750);
        expect(result).toBe(0.49500);
    })  
})