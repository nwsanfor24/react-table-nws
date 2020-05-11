import React from 'react';
import MUIDataTable from "mui-datatables";

class EmployeeDirectory extends React.Component {

  render() {
    const columns = ["Name", "Title", "Department", "Supervisor"];

    const data = [
      ['Jim Halpert', 'Salesman', 'Sales', 'Michael Scott'],
      ['Pam Beesly', 'Receptionist', 'Assistant', 'Michael Scott'],
      ['Dwight Schrute', 'Salesman', 'Sales', 'Michael Scott'],
      ['Michael Scott', 'Manager', 'Manager', 'Jan Gould'],
      ['Ryan Howard', 'Temp', 'Sales', 'Everyone else'],
      ['Creed Bratton', 'Unknown', 'Unknown', 'Michael Scott']
    ];

    const options = {
      filter: true,
      pageLength: 5,
      filterType: 'dropdown',
      responsive: 'stacked',
    };

    return (
      <MUIDataTable 
        title={"Employee Database"} 
        data={data} 
        columns={columns} 
        options={options} 
      />
    );
  }
}
export default EmployeeDirectory;