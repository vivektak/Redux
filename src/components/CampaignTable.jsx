import React from 'react';
import MaterialTable from "material-table";

const CampaignTable = ({ getUserName, getStatus, users, showFilterData, campaigns, filteredCompaign }) => {
    console.log(showFilterData);
    console.log(filteredCompaign);
    return (
        <MaterialTable
            columns={[
                { title: 'Name', field: "name" },
                { title: 'Username', field: "username", render: row => <span>{getUserName(row.userId, users)}</span> },
                { title: 'Start Date', field: "startDate" },
                { title: 'End Date', field: "endDate" },
                { title: 'Active', field: "isActive", render: row => <span className={getStatus(row.startDate, row.endDate) === 'Active' ? 'active' : 'inactive'}>{getStatus(row.startDate, row.endDate)}</span> },
                { title: 'Budget', field: "Budget" }
            ]}
            title='Campaigns'
            data={showFilterData ? filteredCompaign : campaigns}
            options={{
                actionsColumnIndex: -1,
                pageSize: 5
            }}
        />
    );
}

export default CampaignTable;