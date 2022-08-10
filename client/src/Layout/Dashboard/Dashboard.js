import React from 'react'
import {Card,Container} from 'react-bootstrap'
import Calendars from '../../Components/Calendars/Calendars'

const Dashboard = () => {
  return (
    <div>
           <Container>
             <Card>
                <Card.Header>Welcome to Dashboard</Card.Header>
             </Card>
             <Calendars/>
           </Container>
    </div>
  )
}

export default Dashboard
