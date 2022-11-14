export function gam1(dof: number){
    let i = 0;
    let  mult
     = 1;
    let gam;
    do{
        dof = dof - 1;
        mult
         = dof * mult
        ;
        i++;
    }while(dof != 1);
        
    return gam = mult
    ;
}

export function gam2(dof:number){
    let i = 0;
    let  mult
     = 1;
    let div, gam;
    do{
        dof = dof - 2;
        div = dof/2;
        mult
         = div * mult
        ;
        i++;
    }while(dof != 1);
    return gam = mult
     * 1.77245;

}
