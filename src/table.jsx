import React from 'react'
//import {} from 'react-bootstrap'
import { Badge, Button, Table, Card, Modal, Container } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'


export default function createTable (){
    // import data from state or api call
    // filter data based on drop

    // GET THE URL 
    const { search } = useLocation()
    // GET THE PARAMETERS FROM THE URL
    const query = new URLSearchParams(search)
    // GET THE boolean 'EMPLOYED' pARAMETER SPECIFICALLY
    const q = query.get('employed')
    const employeeRows = props.employees
    .filter(employee => (q?String(employee.currentlyEmployed)===q:true))//check employee value from query. Does it match current employed value in data
    .map(employee => 
        <EmployeeRow 
            key={employee._id} 
            employee={employee} 
            deleteEmployee={props.deleteEmployee} />)

    return (
        <Card>
            <Card.Header as="h5">
                All Employees <Badge bg='secondary'>{employeeRows.length}</Badge>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <Table striped size='sm'/*table className="bordered-table"*/>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Extension</th>
                                <th>Email</th>
                                <th>Title</th>
                                <th>Date Hired</th>
                                <th>Currently Employed?</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeRows}
                        </tbody>
                    </Table>
                </Card.Text>
            </Card.Body>
        </Card> 
    )
}