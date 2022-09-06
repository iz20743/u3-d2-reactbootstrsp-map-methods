import { Component } from "react";
import{Card, Button, Row, Container, Col,} from 'react-bootstrap';
import arrayOfBooks from '../data/books/fantasy.json'


class BookCards extends Component{
    render(){
        console.log(arrayOfBooks)
        return(
            <Container fluid className="mt-5 position-relative">
                <h1 className="">Fantasy Books</h1>
                <div>
                    <Row>
                    <Col sm={6} md={3} lg={4}>
                    {arrayOfBooks.map((book, ) =>(
                            <Card  style={{ width: '13rem', height:'20rem'}}>
                                <Card.Img variant="top" src={book.img} style={{width:'200px', height:'200px'}} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>{book.category}</Card.Text>
                                    <Card.Text>{book.price}</Card.Text>
                                    <Button variant="primary">BUY</Button>
                                </Card.Body>
                            </Card>
                            ))}
                            
                        </Col>
                    </Row>
            </div> 
                
            </Container>

        );
    }

}

export default BookCards