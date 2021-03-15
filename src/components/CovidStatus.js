import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import './CovidStatus.css';

import * as actions from '../store/actions/appActions';

const CovidStatus = ({ fetchResult, covidDetails, covidDetailsStates, loading }) => {
  const [details, setDetails] = useState();


  const fetchCovidDetails = async () => {
    await fetchResult();
  };

  useEffect(() => {
    fetchCovidDetails();
    //eslint-disable-next-line
  }, []);

  //set details into state
  useEffect(() => {
    if (covidDetailsStates !== undefined || covidDetailsStates !== []) {
      setDetails(covidDetailsStates);

    }
    console.log(covidDetails);

  }, [covidDetails]);

  const renderDetails = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className={'background'}>
        <h1>COVID STATUS IN NIGERIA 2021</h1>
        <h2>Total figures Recorded so far</h2>
        <p>Total Samples tested: {covidDetails.totalSamplesTested}</p>
        <p>Total Active Cases: {covidDetails.totalActiveCases}</p>
        <p>Total Confirmed Cases: {covidDetails.totalConfirmedCases}</p>
        <p>Discharged: {covidDetails.discharged}</p>
        <p>Deaths: {covidDetails.death}</p>

        {details &&
          details.map((item) => (
            <div className={'container'} key={item._id}>
              <h3>{item.state}</h3>
              <div className={'item'}>
                <p>Confirmed Cases: {item.confirmedCases}</p>
                <p>Cases on Admission: {item.casesOnAdmission}</p>
                <p>Discharged: {item.discharged}</p>
                <p>Deaths: {item.death}</p>
              </div>
            </div>
          ))}
      </div>
    );
  };
  return <div>{renderDetails()}</div>;
};

const mapStateToProps = ({ app }) => ({
  covidDetails: app.fetchResult.data,
  covidDetailsStates: app.fetchResult.data.states,
  loading: app.fetchResult.loading,
  error: app.fetchResult.error,
});

const mapDispatchToProps = {
  fetchResult: actions.fetchResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(CovidStatus);
