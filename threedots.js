const ages = [12, 14, 16, 13];
const age2 = [15, 16, 12];
// Old way
const allAges = ages.concat(age2);

// spread operatior ...
const allAges2 = [...ages, 5, ...age2];

const business = 650;
const minister = 450;
const sochib = 250;

const takaPoisa = [650, 450, 250]
// const maximum = Math.max(business, minister,sochib); 
const maximum = Math.max(...takaPoisa);
console.log(maximum);