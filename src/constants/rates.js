const longTermRatesSingle = [
  [0, 40000],
  [0.15, 441450],
  [0.2, Infinity],
];


const longTermRatesHead = [
  [0, 53600],
  [0.15, 469050],
  [0.2, Infinity],
];


const longTermRatesMarriedJointly = [
  [0, 80000],
  [0.15, 496600],
  [0.2, Infinity],
];

const longTermRatesMarriedSeparately = [
  [0, 40000],
  [0.15, 248300],
  [0.2, Infinity],
];


const shortTermRatesSingle = [
  [0.1, 9875],
  [0.12, 40125],
  [0.22, 85525],
  [0.24, 163300],
  [0.32, 207350],
  [0.35, 518400],
  [0.37, Infinity]
];

const shortTermRatesHead = [
  [0.1, 14100],
  [0.12, 53700],
  [0.22, 85500],
  [0.24, 163300],
  [0.32, 207350],
  [0.35, 518400],
  [0.37, Infinity]
];

const shortTermRatesMarriedJointly = [
  [0.1, 19750],
  [0.12, 80250],
  [0.22, 171050],
  [0.24, 326600],
  [0.32, 414700],
  [0.35, 622050],
  [0.37, Infinity]
];

const shortTermRatesMarriedSeparately = [
  [0.1, 9875],
  [0.12, 40125],
  [0.22, 85525],
  [0.24, 163300],
  [0.32, 207350],
  [0.35, 311025],
  [0.37, Infinity]
];

const rates = {
  longTerm: {
    single: longTermRatesSingle,
    headOfHousehold: longTermRatesHead,
    marriedJointly: longTermRatesMarriedJointly,
    marriedSeparately: longTermRatesMarriedSeparately,
  },
  shortTerm: {
    single: shortTermRatesSingle,
    headOfHousehold: shortTermRatesHead,
    marriedJointly: shortTermRatesMarriedJointly,
    marriedSeparately: shortTermRatesMarriedSeparately,
  },
};
export default rates;