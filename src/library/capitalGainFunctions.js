import rates from "../constants/rates";
import standardDeduction from "../constants/standardDeduction";

const calcuCapitalGain = (states) => {
  const capitalGain = states.saleAmount - states.purchaseAmount;
  console.log("capital gain " + capitalGain);
  if (capitalGain <= 0) return 0;
  const [rate, sd] = determineTermAndSd(states);
    finalCalcu(rate, sd);
};

const determineTermAndSd = (states) => {
     const {
       selectedPurchaseDate,
       selectedSaleDate,
       filingStatus,
       taxableIncome,
     } = states;
 let rate, sd, term;
 selectedPurchaseDate.setFullYear(selectedPurchaseDate.getFullYear() + 1);
 if (selectedPurchaseDate <= selectedSaleDate) {
     term = 'long';
 } else {
     term = 'short';
 }
 rate = determineTerm(filingStatus, term);
 sd = determineStandardDeduction(filingStatus);
 return [rate, sd, taxableIncome];
}

const determineTerm = (filingStatus, term) => {
    let rate;
    if (term === 'long') {
        switch (filingStatus) {
            case 'Single':
                rate = rates.longTerm.single;
            break;
            case 'Head of Household':
                rate = rates.longTerm.headOfHousehold;
            break;
            case 'Married jointly':
                rate = rates.longTerm.marriedJointly;
            break;
            case 'Married separately':
                rate = rates.longTerm.marriedSeparately;
                break;
            default:
                return null;
        }
    } else {
       switch (filingStatus) {
            case 'Single':
                rate = rates.shortTerm.single;
            break;
            case 'Head of Household':
                rate = rates.shortTerm.headOfHousehold;
            break;
            case 'Married jointly':
                rate = rates.shortTerm.marriedJointly;
            break;
            case 'Married separately':
                rate = rates.shortTerm.marriedSeparately;
                break;
            default:
                return null;
        } 
    }
    return rate;
}

const determineStandardDeduction = (filingStatus) => {
    let sd;
   switch (filingStatus) {
            case 'Single':
                sd = standardDeduction.single;
            break;
            case 'Head of Household':
                sd = standardDeduction.headOfHousehold;
            break;
            case 'Married jointly':
                sd = standardDeduction.marriedJointly;
            break;
            case 'Married separately':
                sd = standardDeduction.marriedSeparately;
                break;
            default:
                return null;
        }
        return sd;
}


const finalCalcu = (rate, sd, taxableIncome) => {
    const incomeAfterDeduction = taxableIncome - sd;
    for (const [key,value] of Object.entries(rate)) {
        console.log(key, value);
    }
}

const calcuLongSingle = (states) => {
  const { zeroPercent, fifteenPercent } = rates.single.longTerm;
  const capitalGain = states.saleAmount - states.purchaseAmount;
  const incomeAfterDeduction = states.taxableIncome - standardDeduction.single;
  if (incomeAfterDeduction <= zeroPercent) {
    const capitalGainWithIncome = capitalGain + incomeAfterDeduction;

    //
    if (capitalGainWithIncome <= zeroPercent) return 0;
    else if (
      capitalGainWithIncome <= fifteenPercent
    )
      return (capitalGainWithIncome - zeroPercent) * 0.15;
    else
      return (
        (capitalGainWithIncome - fifteenPercent) * 0.2 +
        (fifteenPercent - zeroPercent) * 0.15
      );

    //
  } else if (
    incomeAfterDeduction > zeroPercent &&
    incomeAfterDeduction <= fifteenPercent
  ) {
    const capitalGainWithIncome = capitalGain + incomeAfterDeduction;
    if (capitalGainWithIncome <= fifteenPercent) return capitalGain * 0.15;
    else
      return (
        (fifteenPercent - incomeAfterDeduction) * 0.15 +
        (capitalGainWithIncome - fifteenPercent) * 0.2
      );
  } else return capitalGain * 0.2;
};

const calcuLongHead = (states) => {};

const calcuLongMarriedJointly = (states) => {};
const calcuLongMarriedSeparately = (states) => {};

const calcuShortSingle = (state) => {};

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

export { calcuCapitalGain, calcuLongSingle, finalCalcu };
