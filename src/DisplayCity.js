
import React from "react";
import Card from 'react-bootstrap/Card';

class DisplayCity extends React.Component {
    render() {
        return(
            <>
            <Card style={{ width: '18rem' }}  >
              <Card.Img variant="top" src={this.props.mapLink} />
              <Card.Body>
                <Card.Title>{this.props.cityInformation.showName} </Card.Title>
                 <Card.Text>The Latitude: {this.props.cityInformation.latitude}</Card.Text>
                 <Card.Text>The Longitude: {this.props.cityInformation.longitude} </Card.Text>
              </Card.Body>
            </Card>

            </>
        )
    }
}

export default DisplayCity;