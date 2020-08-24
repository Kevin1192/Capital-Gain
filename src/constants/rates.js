const longTermRatesSingle = {
    0: 40000,
    0.15: 441450,

}

const longTermRatesHead = {
  0: 53600,
  0.15: 469050,
};

const longTermRatesMarriedJointly = {
  0: 80000,
  0.15: 496600,
};

const longTermRatesMarriedSeparately = {
  0: 40000,
  0.15: 248300,
};

const shortTermRatesSingle = {
  0.10: 9875,
  0.12: 40125,
  0.22: 85525,
  0.24: 163300,
  0.32: 207350,
  0.35: 518400,
};

const shortTermRatesHead = {
  0.10: 14100,
  0.12: 53700,
  0.22: 85500,
  0.24: 163300,
  0.32: 207350,
  0.35: 518400,
};


const shortTermRatesMarriedJointly = {
  0.10: 19750,
  0.12: 80250,
  0.22: 171050,
  0.24: 326600,
  0.32: 414700,
  0.35: 622050,
};

const shortTermRatesMarriedSeparately = {
  0.10: 9875,
  0.12: 40125,
  0.22: 85525,
  0.24: 163300,
  0.32: 207350,
  0.35: 311025,
};

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