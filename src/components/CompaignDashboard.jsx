import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import moment from 'moment';
import Header from './Header';
import { getStatus, getUserName } from '../helper';
import CampaignTable from './CampaignTable';


const mapStateToProps = state => {
    return { campaigns: state.campaigns, users: state.users };
};

const CampaignDashboard = ({ campaigns, getData, users }) => {

    const [selectedStartDate, setSelectedStartDate] = useState(moment());
    const [selectedEndDate, setSelectedEndDate] = useState(moment());
    const [filteredCompaign, setFilteredCompaign] = useState([]);
    const [showFilterData, setShowFilterData] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const addCompaigns = (data) => {
        campaigns = [...campaigns, ...data];
    };

    window.addCompaigns = addCompaigns;

    const handleStartDateChange = date => {
        setSelectedStartDate(date);
        filterCompaignData(moment(date), moment(selectedEndDate));
    };

    const filterCompaignData = (startDate, endDate) => {
        setShowFilterData(true);
        const filteredCompaign = campaigns.filter(compaign => {
            if (moment(compaign.startDate) >= startDate && moment(compaign.endDate) <= endDate) {
                return compaign;
            };
            return [];
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
            <CampaignTable getUserName={getUserName} getStatus={getStatus} users={users} showFilterData={showFilterData} campaigns={campaigns} filteredCompaign={filteredCompaign} />
        </div >
    );
};

export default connect(mapStateToProps, { getData })(CampaignDashboard);