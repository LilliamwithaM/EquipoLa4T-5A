const compute_fx = (
    x0: number,
    x1: number,
    w: number,
    func: Function
  ): number[] => {
    let xValuesSet: number[] = [];
    let fxValuesSet: number[] = [];
    let x: number = x0;
    while (x <= x1) {
      xValuesSet.push(x);
      fxValuesSet.push(func(x));
      x = x + w;
    }
    return fxValuesSet;
  };
  
  const simpson = (
    x0: number,
    x1: number,
    num_seg: number,
    func: Function,
    E: number
  ) => {
    let error;
    let perror = 0;
    do {
      let w = (x1 - x0) / num_seg;
      let fxValuesSet = compute_fx(x0, x1, w, func);
      let sumFX: number[] = [];
      // multiplicar f(x) * multiplicador
      fxValuesSet.forEach((value, index) => {
        if (index === 0 || index === fxValuesSet.length - 1) {
          sumFX.push(value * 1);
        } else if (index % 2 === 0) {
          sumFX.push(value * 2);
        } else {
          sumFX.push(value * 4);
        }
      });
      // sumar f(x)*mult
      let sumFX_mult = 0;
      sumFX.forEach((val) => {
        sumFX_mult += val;
      });
      // obtener p
      var p = (sumFX_mult * w) / 3;
      // obtener error
      error = p - perror;
      num_seg = num_seg * 2;
      perror = p;
    } while (error > E);
    return p;
  };
  
  export { simpson };


f(x) = 1ex.ts
export function fx_1eX(x : number) {
  return 1/x
}

f(x) = 2x.ts
export function fx_2x (x: number) {
  return x*2
}

f(x) = XxX.ts
export function fx_XxX (x: number) {
  return x*x
}

//comentario de prueba