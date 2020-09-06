import 'date-fns';
import MomentUtils from "@date-io/date-fns";
import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { FormControl, OutlinedInput, InputLabel, InputAdornment, makeStyles, Button, Grid } from "@material-ui/core";
import { MuiPickersUtilsProvider , KeyboardDatePicker } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';
import {calcuCapitalGainTax} from '../library/capitalGainFunctions';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#02be6e",
    },
    contrastThreshold: 3,
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: "stretch",
    width: "300px",
    padding: "30px 10px",
    margin: "10px",
    border: "1px solid #02be6e",
  },
  margin: {
    margin: theme.spacing(2),
  },
  taxHighlight: {
    color: "#87CEEB",
  },
  report: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

function CapitalGainForm() {
    const classes = useStyles();
    
  const [values, setValues] = React.useState({
    id: 0,
    filingStatus: "Single",
    taxableIncome: 0,
    selectedPurchaseDate: new Date(),
    selectedSaleDate: new Date(),
    purchaseAmount: 0,
    saleAmount: 0,
    capitalGain: 0,
    totalCapitalGainTax: 0,
    records: [],
  });


  const handleSubmit = (evt) => {
    evt.preventDefault();
    let totalCGTax = calcuCapitalGainTax(values),
        CG = values.saleAmount - values.purchaseAmount;
        setValues((preState) => ({...preState, totalCapitalGainTax: totalCGTax, capitalGain: CG, id: ++preState.id}));
  }

  const initialRender = React.useRef(false);

    React.useEffect(() => {
        let record = {},
        notInclude = ["purchaseAmount", "saleAmount", "records"];

      if (!initialRender.current) {
        initialRender.current = true;
        return;
      }
      for (const [key, value] of Object.entries(values)) {
        if (!notInclude.includes(key)) record[key] = value;
        if (key === 'selectedPurchaseDate' || key === 'selectedSaleDate') record[key] = value.toLocaleDateString();
      }
      setValues((preState) => {
        let newRecords = preState.records.slice();
        newRecords.push(record);
        return {...preState, records: newRecords};
      })
    }, [values.id]);

  const handleDateChange = (prop) => (date) => {
      setValues({...values, [prop]: date});
  }
  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };


  const tableHeader = ['filingStatus', 'taxableIncome', 'PurchaseDate', 'PurchaseAmount', 'SaleDate', 'SaleAmount', 'CapitalGain', 'totalCapitalGainTax']

  const tableHeaderHtml = tableHeader.map((header, idx) => (<th key={idx}>{header}</th>))
  
  const tableBodyHtml = values.records.length === 0 ? [] : values.records.map(record => {
  const tbValues = Object.values(record).map((value, idx) => (<td key={idx}>{value}</td>));
    return (<tr>{tbValues}</tr>);
  });

  return (
    <Fragment>
    <ThemeProvider theme={theme}>
    <Container>
      <Grid container fluid spacing={3}>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit} id='calculator'>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h6">
                Personal Info
              </Typography>
              <TextField
                className={classes.margin}
                id="filing-status"
                select
                label="Filing Status"
                helperText="Please select your filing status"
                value={values.filingStatus}
                onChange={handleChange("filingStatus")}
                variant="outlined"
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Head of Household">Head of Household</MenuItem>
                <MenuItem value="Married jointly">Married jointly</MenuItem>
                <MenuItem value="Married separately">
                  Married separately
                </MenuItem>
              </TextField>

              <FormControl variant="outlined" className={classes.margin}>
                <InputLabel htmlFor="outlined-adornment-taxableIncome">
                  Taxable Income
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-taxableIncome"
                  value={values.taxableIncome}
                  onChange={handleChange("taxableIncome")}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={120}
                />
              </FormControl>
              <Typography variant="h4" component="h6">
                Capital Gain
              </Typography>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="purchase-date-dialog"
                  label="Purchase Date"
                  format="MM/dd/yyyy"
                  value={values.selectedPurchaseDate}
                  onChange={handleDateChange("selectedPurchaseDate")}
                />

                <FormControl variant="outlined" className={classes.margin}>
                  <InputLabel htmlFor="outlined-adornment-purchaseamount">
                    Purchase Amount
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-purchaseamount"
                    value={values.purchaseAmount}
                    onChange={handleChange("purchaseAmount")}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    labelWidth={120}
                  />
                </FormControl>

                <KeyboardDatePicker
                  margin="normal"
                  id="sale-date-dialog"
                  label="Sale Date"
                  format="MM/dd/yyyy"
                  value={values.selectedSaleDate}
                  onChange={handleDateChange("selectedSaleDate")}
                />

                <FormControl variant="outlined" className={classes.margin}>
                  <InputLabel htmlFor="outlined-adornment-saleAmount">
                    Sale Amount
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-saleAmount"
                    value={values.saleAmount}
                    onChange={handleChange("saleAmount")}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    labelWidth={120}
                  />
                </FormControl>
              </MuiPickersUtilsProvider>
              <button type="submit" className="btn btn-primary btn-pills">
                Submit
              </button>
            </Paper>
          </form>
        </Grid>
        <Grid item xs={6} className={classes.report}>
        <div class='tbl-header'>
        <table>
          <thead>
            <tr>
              {tableHeaderHtml}
            </tr>
          </thead>
        </table>
        </div>
        <div className="tbl-content">
          <table>
            <tbody>
                  {tableBodyHtml}
            </tbody>
          </table>
        </div>
          {values.totalCapitalGainTax === undefined || (
            <div>1</div>
          )}
        </Grid>
      </Grid>
      </Container>
      </ThemeProvider>
    </Fragment>
  );
}

export default CapitalGainForm;
