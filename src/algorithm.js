const algorithm = {
  args: {
    baseNumber: 1000,
  },
  exec: {
    calc: function(log) {
      const iteratees = {
        three: 3,
        five: 5,
      }
      let sum = 0;

      const iterate = (iteratee) => {
        let n = 0;
        log(`${iteratee}: ${n}`);
        for (let i = iteratees[iteratee]; i < algorithm.args.baseNumber; i += iteratees[iteratee]) {
          n++;
        }

        //let's use the symmetric sum approach of schoolboy Gauss
        let base = (n * iteratees[iteratee]) + iteratees[iteratee];
        let odd = (n % 2 !== 0);

        return (odd) ?
          (base * Math.floor(n / 2)) + (Math.ceil(n / 2) * iteratees[iteratee]) :
          (base * n / 2);
      };

      for (let iteratee of Object.keys(iteratees)) {
        sum += iterate(iteratee);
      }

      return sum;
    },
  },
}
export default algorithm;
