const longTermRatesSingle = {
    zeroPercent: 40000,
    fifteenPercent: 441450,

}

const longTermRatesHead = {
  zeroPercent: 53600,
  fifteenPercent: 469050,
};

const longTermRatesMarriedJointly = {
  zeroPercent: 80000,
  fifteenPercent: 496600,
};

const longTermRatesMarriedSeparately = {
  zeroPercent: 40000,
  fifteenPercent: 248300,
};

const shortTermRatesSingle = {
  tenPercent: 9875,
  twelvePercent: 40125,
  twentyTwoPercent: 85525,
  twentyFourPercent: 163300,
  thirtyTwoPercent: 207350,
  thirtyFivePercent: 518400,
};

const shortTermRatesHead = {
  tenPercent: 14100,
  twelvePercent: 53700,
  twentyTwoPercent: 85500,
  twentyFourPercent: 163300,
  thirtyTwoPercent: 207350,
  thirtyFivePercent: 518400,
};


const shortTermRatesMarriedJointly = {
  tenPercent: 19750,
  twelvePercent: 80250,
  twentyTwoPercent: 171050,
  twentyFourPercent: 326600,
  thirtyTwoPercent: 414700,
  thirtyFivePercent: 622050,
};

const shortTermRatesMarriedSeparately = {
  tenPercent: 9875,
  twelvePercent: 40125,
  twentyTwoPercent: 85525,
  twentyFourPercent: 163300,
  thirtyTwoPercent: 207350,
  thirtyFivePercent: 311025,
};

const rates = {
    single: {
        longTerm: longTermRatesSingle,
        shortTerm: shortTermRatesSingle,
    },
    headOfHousehold: {
        longTerm: longTermRatesHead,
        shortTerm: shortTermRatesHead,
    },
    marriedJointly: {
        longTerm: longTermRatesMarriedJointly,
        shortTerm: shortTermRatesMarriedJointly,
    },
    marriedSeparately: {
        longTerm: longTermRatesMarriedSeparately,
        shortTerm: shortTermRatesMarriedSeparately,
    }

}


export default rates;