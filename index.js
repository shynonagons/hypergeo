(
  function() {
    /*
      *	Evaluates the probability mass function (PMF) for a Hypergeometric distribution
      *
      * @param {Number} N - total population size
      * @param {Number} k - number of possible successes
      * @param {Number} n - number of draws (sample size)
      * @param {Number} x - number of successes in sample
      * @returns {Number} evaluated PMF
      */
      const f = [];
      const fac = (n) => {
        if (n < 0) return;
        if (n == 0 || n == 1)
          return 1;
        if (f[n] > 0)
          return f[n];
        return f[n] = fac(n-1) * n;
      }
      exports.pmf = function(N,k,n,x) {
        if (isNaN(x) || isNaN(k)) return;
        if (!N || !k || !n) return 0;
      	const lnum = (fac(k) / (fac(x) * fac(k-x))) * (fac(N-k) / (fac(n-x) * fac((N-k) - (n-x))));
      	const ldenom = fac(N) / (fac(n) * fac(N-n));
      	const lpmf = lnum / ldenom;
      	return lpmf;
      }
  }()
)