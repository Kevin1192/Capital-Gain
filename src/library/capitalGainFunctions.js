
import rates from '../constants/rates';
import standardDeduction from '../constants/standardDeduction';

const calcuLong = (states) => {
    const capitalGain = states.saleAmount - states.purchaseAmount;
    if (capitalGain <= 0) return 0;
}

const calcuLongSingle =  (states) => {
    const { zeroPercent, fifteenPercent } = rates.single.longTerm;
    const capitalGain = states.saleAmount - states.purchaseAmount;
    const incomeAfterDeduction = states.taxableIncome - standardDeduction.single;
    if (incomeAfterDeduction <= zeroPercent) {
        const  capitalGainWithIncome = capitalGain + incomeAfterDeduction;

        //
      if (capitalGainWithIncome <= zeroPercent) return 0;
      else if (capitalGainWithIncome > zeroPercent && capitalGainWithIncome <= fifteenPercent ) return (capitalGainWithIncome - zeroPercent) * 0.15;
      else return (capitalGainWithIncome - fifteenPercent) * 0.2 + (fifteenPercent - zeroPercent) * 0.15;

      //
    } else if (incomeAfterDeduction > zeroPercent && incomeAfterDeduction <= fifteenPercent) {
        const capitalGainWithIncome = capitalGain + incomeAfterDeduction;
        if (capitalGainWithIncome <= fifteenPercent) return capitalGain * 0.15;
        else return (fifteenPercent - incomeAfterDeduction) * 0.15 + (capitalGainWithIncome - fifteenPercent) * 0.2;
    } else return capitalGain * 0.2;
}

const calcuLongHead = (states) => {

}


const calcuLongMarriedJointly = (states) => {

}
const calcuLongMarriedSeparately = (states) => {
    
}


const calcuShortHead = (states) => {};

const calcuShortMarriedJointly = (states) => {};
const calcuShortMarriedSeparately = (states) => {};
const states = {
  filingStatus: "Single",
  taxableIncome: 30000,
  stateTaxRate: 0,
  selectedPurchaseDate: new Date(),
  selectedSaleDate: new Date(),
  purchaseAmount: 10000,
  saleAmount: 50000,
};


export {
    calcuLong,
    calcuLongSingle
}