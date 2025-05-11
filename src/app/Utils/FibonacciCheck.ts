export const fibonacciCheck: (N: any) => string = (N: any) => {
  if (N == 0 || N == 1) {
    return 'green';
  }

  let a = 0,
    b = 1,
    c;

  while (true) {
    c = a + b;
    a = b;
    b = c;

    if (c == N) {
      return 'green';
    } else if (c >= N) {
      return '';
    }
  }
};
