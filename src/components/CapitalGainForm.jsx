import 'date-fns';
import MomentUtils from "@date-io/date-fns";
import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { FormControl, OutlinedInput, InputLabel, InputAdornment, makeStyles, Button } from "@material-ui/core";
import { MuiPickersUtilsProvider , KeyboardDatePicker } from '@material-ui/pickers';


import {calcuLong,calcuLongSingle} from '../library/capitalGainFunctions';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: 'stretch',
    width: "300px",
    padding: "30px 10px",
    margin: "10px",
    border: "1px solid #87CEFA",
  },
  margin: {
      margin: theme.spacing(2),
  }
}));

function CapitalGainForm() {
    const classes = useStyles();
    
  const [values, setValues] = React.useState({
    filingStatus: "Single",
    taxableIncome: 0,
    stateTaxRate: 0,
    selectedPurchaseDate: new Date(),
    selectedSaleDate: new Date(),
    purchaseAmount: 0,
    saleAmount: 0,
  });


  const handleDateChange = (prop) => (date) => {
      setValues({...values, [prop]: date});
  }
  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };
  return (
    <Fragment>
      <form>
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
            <MenuItem value="Married separately">Married separately</MenuItem>
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
          <FormControl variant="outlined" className={classes.margin}>
            <InputLabel htmlFor="outlined-adornment-statetaxrate">
              State Tax Rate
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-statetaxrate"
              value={values.stateTaxRate}
              onChange={handleChange("stateTaxRate")}
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
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
          <Button type='submit' color='primary' variant='contained'>Submit</Button>
        </Paper>
      </form>

    </Fragment>
  );
}

 const states = {
   filingStatus: "Single",
   taxableIncome: 30000,
   stateTaxRate: 0,
   selectedPurchaseDate: new Date(),
   selectedSaleDate: new Date(),
   purchaseAmount: 10000,
   saleAmount: 50000,
 };

      console.log(calcuLongSingle(states));
export default CapitalGainForm;
