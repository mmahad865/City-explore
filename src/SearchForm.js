import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SearchForm extends React.Component {
    render() {
        return(
            <>
            <h1>Explore </h1>
            <Form onSubmit={this.props.handleInput}>
                <Form.Label id='searchQuery'></Form.Label>
                <Form.Control type="text" id='searchQuery' placeholder="Enter a city" /><br/>

                <Button variant="primary" type="submit">Explore!</Button>
            </Form>
            </>
        )
    }

}

export default SearchForm;