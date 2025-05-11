export const fibonacciCheck: (N: any) => string = (N: any) => {
  if (N == 0 || N == 1) {
    return 'lightgreen';
  }

  let a = 0,
    b = 1,
    c;

  while (true) {
    c = a + b;
    a = b;
    b = c;

    if (c == N) {
      return 'lightgreen';
    } else if (c >= N) {
      return '';
    }
  }
};
