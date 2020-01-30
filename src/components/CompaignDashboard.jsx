import React, { useEffect, useState } from 'react';
import MaterialTable from "material-table";
import { connect } from 'react-redux';
import { getData } from '../actions';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';
import {
    Button,
} from "@material-ui/core";


const mapStateToProps = state => {
    return { compaigns: state.compaigns, users: state.users };
};

const CompaignDashboard = ({ compaigns, getData, users }) => {

    const [selectedStartDate, setSelectedStartDate] = useState(moment());
    const [selectedEndDate, setSelectedEndDate] = useState(moment());
    const [filteredCompaign, setFilteredCompaign] = useState([]);
    const [showFilterData, setShowFilterData] = useState(false);

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
    }

    const handleEndDateChange = date => {
        setSelectedEndDate(date);
        filterCompaignData(moment(selectedStartDate), moment(date));
    };

    useEffect(() => {
        getData();
    }, []);

    const getUserName = (userId) => {
        const userFound = users.filter(user => {
            if (user.id === userId)
                return user;
        })
        if (userFound.length) {
            return userFound[0].username
        } else {
            return 'Unknown User'
        }

    }

    const getStatus = ({ startDate, endDate }) => {
        const currentDate = moment();
        if (currentDate < moment(endDate) && currentDate > moment(startDate)) {
            return 'Active';
        }
        return 'Ínactive';
    }


    return (
        <div className="container-fluid" style={{ margin: "30px 0 15px 0" }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="start-date-picker-dialog"
                        label="Start Date"
                        format="MM/dd/yyyy"
                        value={selectedStartDate}
                        onChange={handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="end-date-picker-dialog"
                        label="End Date"
                        format="MM/dd/yyyy"
                        value={selectedEndDate}
                        onChange={handleEndDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                </Grid>
            </MuiPickersUtilsProvider>
            <Button
                onClick={() => handleReset()}
                color="secondary"
                variant="contained"
            >Reset</Button>
            <MaterialTable
                columns={[
                    { title: 'Name', field: "name" },
                    { title: 'Username', field: "username", render: row => <span>{getUserName(row.userId)}</span> },
                    { title: 'Start Date', field: "startDate" },
                    { title: 'End Date', field: "endDate" },
                    { title: 'Active', field: "isActive", render: row => <span>{getStatus(row)}</span> },
                    { title: 'Budget', field: "Budget" }
                ]}
                title='Compaigns'
                data={showFilterData ? filteredCompaign : compaigns}
                options={{
                    actionsColumnIndex: -1,
                    pageSize: 5
                }}
            />
        </div >
    );
};

export default connect(mapStateToProps, { getData })(CompaignDashboard);