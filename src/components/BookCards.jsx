import { Component } from "react";
import{Card, Button, Row, Container, Col,} from 'react-bootstrap';
import arrayOfBooks from '../data/books/fantasy.json'


class BookCards extends Component{
    render(){
        return(
            <Container fluid className="mt-5">
                <h1 className="">Fantasy Books</h1>
                <div>
                    <Row>
                        <Col sm={6} md={3} lg={4}>
                            <Card  style={{ width: '18rem'}}>
                                <Card.Img variant="top" src= "http://placekitten.com/200/300" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">BUY</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </div>
                
            </Container>

        );
    }

}

export default BookCards