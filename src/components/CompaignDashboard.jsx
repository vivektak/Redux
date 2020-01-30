import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import moment from 'moment';
import Header from './Header';
import { getStatus, getUserName } from '../helper';
import CompaignTable from './CompaignTable';


const mapStateToProps = state => {
    return { compaigns: state.compaigns, users: state.users };
};

const CompaignDashboard = ({ compaigns, getData, users }) => {

    const [selectedStartDate, setSelectedStartDate] = useState(moment());
    const [selectedEndDate, setSelectedEndDate] = useState(moment());
    const [filteredCompaign, setFilteredCompaign] = useState([]);
    const [showFilterData, setShowFilterData] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const addCompaigns = (data) => {
        compaigns = [...compaigns, ...data];
    };

    window.addCompaigns = addCompaigns;

    const handleStartDateChange = date => {
        setSelectedStartDate(date);
        filterCompaignData(moment(date), moment(selectedEndDate));
    };

    const filterCompaignData = (startDate, endDate) => {
        setShowFilterData(true);
        const filteredCompaign = compaigns.filter(compaign => {
            if (moment(compaign.startDate) >= startDate && moment(compaign.endDate) <= endDate) {
                return compaign;
            };
        });
        setFilteredCompaign(filteredCompaign);

    };
    const handleReset = () => {
        setSelectedStartDate(moment());
        setSelectedEndDate(moment());
        setShowFilterData(false);
    };

    const handleEndDateChange = date => {
        setSelectedEndDate(date);
        filterCompaignData(moment(selectedStartDate), moment(date));
    };

    return (
        <div className="container-fluid compaign-dashboard" >
            <Header selectedEndDate={selectedEndDate} selectedStartDate={selectedStartDate} handleEndDateChange={handleEndDateChange} handleStartDateChange={handleStartDateChange} handleReset={handleReset} />
            <CompaignTable getUserName={getUserName} getStatus={getStatus} users={users} showFilterData={showFilterData} compaigns={compaigns} filteredCompaign={filteredCompaign} />
        </div >
    );
};

export default connect(mapStateToProps, { getData })(CompaignDashboard);