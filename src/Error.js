import React from "react";
import Alert from 'react-bootstrap/Alert';


class Error extends React.Component {
    render() {
        return(
            <>

            <Alert key={this.props.error} variant={this.props.error}>
              Uknown {this.props.error} , Please try again later
            </Alert>
            </>
        )
    }
}

export default Error;