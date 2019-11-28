import * as React from 'react';
import { Table, Alert} from 'react-bootstrap';


export class EmpDetailsTable extends React.Component {
  

   render() {
    const { showTable, empDetails, skillKeyWord, showError } = this.props;
    
    return (
      <>
      
          {showTable && skillKeyWord && empDetails &&
            (<Table responsive className="tableFields">
             <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              {empDetails.map((emp,index)=>
              emp.skillSet.includes(skillKeyWord.toUpperCase()) &&
              (
                <tr key={index}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.emailAddress}</td>
                <td>{emp.phNomber}</td>
                <td>{emp.skillSet}</td>
              </tr>
              ))}
              
            </tbody>
          </Table>)}
          {showError && <Alert variant="warning">
             No Match Found
          </Alert>}
          
  </>
    );
  }
}

