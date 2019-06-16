# hypergeo

A hypergeometric calculator implemented in Javascript.

## Install

`npm install hypergeo`
or
`yarn add hypergeo`

## Usage

To calculate the PMF: 

```javascript
const hypergeo = require('hypergeo');

hypergeo.pmf(N,k,n,x)
```

Where N = total population size, k = number of possible successes, n = number of draws (sample size), x = number of successes in sample

