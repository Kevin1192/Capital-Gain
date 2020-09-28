import rates from "../constants/rates";
import standardDeduction from "../constants/standardDeduction";

const calcuCapitalGainTax = (states) => {
  const capitalGain = states.saleAmount - states.purchaseAmount;
  console.log("capital gain " + capitalGain);
  if (capitalGain <= 0) return 0;
  const [rate, sd] = determineTermAndSd(states);
  const incomeAfterDeduction = states.taxableIncome > sd ? (states.taxableIncome - sd) : 0;
  return finalCalcu(rate, incomeAfterDeduction, capitalGain);
};

const determineTermAndSd = (states) => {
  const {
    selectedPurchaseDate,
    selectedSaleDate,
    filingStatus,
  } = states;
  let rate, sd, term, oneYearAfterPurchase;
  oneYearAfterPurchase = new Date(selectedPurchaseDate);
  oneYearAfterPurchase.setFullYear(selectedPurchaseDate.getFullYear() + 1);
  if (oneYearAfterPurchase <= selectedSaleDate) {
    term = "long";
  } else {
    term = "short";
  }
  rate = determineTerm(filingStatus, term);
  sd = determineStandardDeduction(filingStatus);
  return [rate, sd];
};

const determineTerm = (filingStatus, term) => {
  let rate;
  if (term === "long") {
    switch (filingStatus) {
      case "Single":
        rate = rates.longTerm.single;
        break;
      case "Head of Household":
        rate = rates.longTerm.headOfHousehold;
        break;
      case "Married jointly":
        rate = rates.longTerm.marriedJointly;
        break;
      case "Married separately":
        rate = rates.longTerm.marriedSeparately;
        break;
      default:
        return null;
    }
  } else {
    switch (filingStatus) {
      case "Single":
        rate = rates.shortTerm.single;
        break;
      case "Head of Household":
        rate = rates.shortTerm.headOfHousehold;
        break;
      case "Married jointly":
        rate = rates.shortTerm.marriedJointly;
        break;
      case "Married separately":
        rate = rates.shortTerm.marriedSeparately;
        break;
      default:
        return null;
    }
  }
  return rate;
};

const determineStandardDeduction = (filingStatus) => {
  let sd;
  switch (filingStatus) {
    case "Single":
      sd = standardDeduction.single;
      break;
    case "Head of Household":
      sd = standardDeduction.headOfHousehold;
      break;
    case "Married jointly":
      sd = standardDeduction.marriedJointly;
      break;
    case "Married separately":
      sd = standardDeduction.marriedSeparately;
      break;
    default:
      return null;
  }
  return sd;
};

const finalCalcu = (rate, incomeAfterDeduction, capitalGain) => {
    console.log(capitalGain, 'capitalgain');
    console.log('incomeAfterdeduc', incomeAfterDeduction);
    console.log(rate);
  const capitalGainWithIncome = capitalGain + incomeAfterDeduction;
  let incomeLimit, capitalGainLimit, totalCapitalGainTax;
  // find Limits for incomeAfterSD: [rate, Amount, index]
  for (let i = 0; i < rate.length; i++) {
      if (incomeAfterDeduction <= rate[i][1]) {
          incomeLimit = [rate[i][0], rate[i][1], i];
          break;
      }
  }


  // find Limits for CGAI
  for (let i = 0; i < rate.length; i++) {
    if (capitalGainWithIncome <= rate[i][1]) {
      capitalGainLimit = [rate[i][0], rate[i][1], i];
      break;
    }
  }

    console.log(capitalGainLimit);


  //if incomeLimit and capitalGainLimit are the same, CG * limit rate;
  if (incomeLimit[2] === capitalGainLimit[2])
    totalCapitalGainTax = capitalGain * capitalGainLimit[0];
  //if leap by 1,
  if (capitalGainLimit[2] - incomeLimit[2] === 1)
    totalCapitalGainTax =
      (incomeLimit[1] - incomeAfterDeduction) * incomeLimit[0] +
      (capitalGainWithIncome - incomeLimit[1]) * capitalGainLimit[0];
  // if leap by more than 1;
  if (capitalGainLimit[2] - incomeLimit[2] > 1) {
    let leapCapitalTax = 0;

    // calculate taxes for full leap tax brackets;
    for (let i = 0; i < capitalGainLimit[2] - incomeLimit[2] - 1; i++) {
      let rateIndex = incomeLimit[2],
        rateAndAmountAfter = rate[rateIndex + i + 1],
        rateAndAmountBefore = rate[rateIndex + i];
      leapCapitalTax +=
        (rateAndAmountAfter[1] - rateAndAmountBefore[1]) *
        rateAndAmountAfter[0];
    }

    // 
    totalCapitalGainTax =
      (incomeLimit[1] - incomeAfterDeduction) * incomeLimit[0] +
      leapCapitalTax +
      (capitalGainWithIncome - rate[capitalGainLimit[2] - 1][1]) *
        capitalGainLimit[0];
  }

  return totalCapitalGainTax;
};


export { calcuCapitalGainTax };
