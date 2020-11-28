import 'date-fns';
import MomentUtils from "@date-io/date-fns";
import React, { Fragment, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { FormControl, OutlinedInput, InputLabel, InputAdornment, makeStyles, Grid } from "@material-ui/core";
import { MuiPickersUtilsProvider , KeyboardDatePicker } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';
import {calcuCapitalGainTax} from '../library/capitalGainFunctions';

// Redux
import { connect } from 'react-redux';
import { addRecordToDb, fetchRecords, removeRecordAndUpdate } from '../store/actions/records';
import { addError } from '../store/actions/errors';

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
    color: "#02be6e",
  },
  taxHighlightred: {
    color: 'red',
  },
  report: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width:  "95%",
  },
  mxauto: {
    margin: "auto",
  },
}));

function CapitalGainForm({ errors, currentUser, reduxRecords, fetchRecords, addRecordToDb, addError, removeRecordAndUpdate }) {
    const classes = useStyles();
    
  const [values, setValues] = useState({
    filingStatus: "Single",
    taxableIncome: 0,
    purchaseDate: new Date(),
    saleDate: new Date(),
    purchaseAmount: 0,
    saleAmount: 0,
    capitalGain: 0,
    totalCapitalGainTax: 0,
    capitalGainAfterTax: 0,
  });

  const [tableRecords, setTableRecords ] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!currentUser.user.id) {
      addError('Please sign in or sign up first');
      return;
    }
    let totalCGTax = calcuCapitalGainTax(values),
        CG = values.saleAmount - values.purchaseAmount;
    let newRecord = {...values, totalCapitalGainTax: totalCGTax, capitalGain: CG, capitalGainAfterTax: (CG - totalCGTax)};
    addRecordToDb(newRecord, currentUser.user.id);
    setValues(newRecord);
  }

  const handleDeleteClick = (id, recordId) => {
    removeRecordAndUpdate(id, recordId);
  }

    // load data on mount 
    useEffect(() => {
      let userId = currentUser.user.id;
      const fetchData = async (id) => {
       await fetchRecords(id);
      }
      fetchData(userId);
    },[currentUser.user.id])

    // update when reduxRecords update
    useEffect(() => {
      console.log(values.purchaseDate, 'date')
    })

    const tableHeader = ['id', 'filingStatus', 'taxableIncome', 'purchaseDate', 'saleDate', 'capitalGain', 'totalCapitalGainTax', 'capitalGainAfterTax']
    const tableHeaderHtml = tableHeader.map((header, idx) => (<th key={idx}>{header}</th>))
    useEffect(() => {
      let tableBodyHtml;
      console.log(reduxRecords, 'reduxrecord')
       tableBodyHtml = reduxRecords.length === 0 ? [] : reduxRecords.map((record, idx) => {
         const recordId = record.id;
       const tbValues = tableHeader.map((header, idx) => {
       if (header === 'saleDate' || header === 'purchaseDate') {
         const time = record[header];
       return <td key={idx}>{time.slice(0,10)}</td>
       }
      return <td key={idx}>{record[header]}</td>
      });
        return (<tr key={idx}>
          <td><button className='btn btn-danger' onClick={() => handleDeleteClick(currentUser.user.id, recordId)}>X</button></td>
          {tbValues}
          </tr>);
      });
      setTableRecords(tableBodyHtml);
    }, [reduxRecords])
     

  const handleDateChange = (prop) => (date) => {
      setValues({...values, [prop]: date});
  
  }


  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };


  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Container>
          <h4>{errors.message}</h4>
          <Grid container style={{ "backgroundColor": "#f8f9fc" }}>
            <Grid item lg={4} style={{ margin: "auto" }}>
              <form
                onSubmit={handleSubmit}
                id="calculator"
                style={{ padding: "20px 0" }}
              >
                <Paper className={classes.root} style={{ margin: "auto" }}>
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
                    <MenuItem value="Head of Household">
                      Head of Household
                    </MenuItem>
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
                      value={values.purchaseDate}
                      onChange={handleDateChange("purchaseDate")}
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
                      value={values.saleDate}
                      onChange={handleDateChange("saleDate")}
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
            <Grid item lg={8} className={classes.report}>

                <div className="tbl-content table-responsive">
                  <table>
                  <thead>
                    <tr>
                      <td></td>
                      {tableHeaderHtml}
                    </tr>
                  </thead>
                    <tbody>{tableRecords}</tbody>
                  </table>
                </div>
              <div style= {{"padding" : "40px 0px 60px 30px"}}>
              {values.totalCapitalGainTax === undefined || [
                <Typography variant="h4" component="h5" key='1'>
                  Your total Capital Gain Tax:{" "}
                  <span className={classes.taxHighlight}>
                    ${values.totalCapitalGainTax}
                  </span>
                </Typography>,
                <Typography variant="h4" component="h5" key='2'> 
                  Your total Capital Gain after tax:{" "}
                  <span
                    className={
                      values.capitalGainAfterTax >= 0
                        ? classes.taxHighlight
                        : classes.taxHighlightred
                    }
                  >
                    ${values.capitalGainAfterTax}
                  </span>
                </Typography>,
              ]}
              </div>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
}

const mapStateToProps = ({ records, currentUser, errors }) => ({
  reduxRecords: records,
  errors,
  currentUser
})

const mapDispatchToProps = dispatch => ({
  fetchRecords: (id) => dispatch(fetchRecords(id)),
  addRecordToDb: (record, id) => dispatch(addRecordToDb(record, id)),
  addError: (errMessage) => dispatch(addError(errMessage)),
  removeRecordAndUpdate: (id, recordId) => dispatch(removeRecordAndUpdate(id, recordId))
})
export default connect(mapStateToProps, mapDispatchToProps)(CapitalGainForm);
