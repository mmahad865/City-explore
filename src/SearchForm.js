
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SearchForm extends React.Component {
    render() {
        return(
            <>
            <h1>Explore  and have fun</h1>
            <Form onSubmit={this.props.handleInput}>
                <Form.Label id='searchQuery'></Form.Label>
                <Form.Control type="text" id='searchQuery' placeholder="Enter the city..." /><br/>

                <Button variant="primary" type="submit">submit</Button>

            </Form>
            </>
        )
    }

}

export default SearchForm;