import React from "react";
import Card from 'react-bootstrap/Card';

class DisplayData extends React.Component {
    render() {
        return(
            <>
            <Card style={{ width: '18rem' }}  >
              <Card.Body>
                <Card.Title>{this.props.cityInformation.showName} </Card.Title>
                <Card.Text>The Lat: {this.props.cityInformation.latitude}</Card.Text>
                <Card.Text>The Long: {this.props.cityInformation.longitude} </Card.Text>
              </Card.Body>
            </Card>

            </>
        )
    }
}

export default DisplayData;