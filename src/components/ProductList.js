import React from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';

const Products = props => (
    <Grid>
        <Row>
            <Col md={4}>
                <ListGroup>
                    <ListGroupItem onClick={props.triggerModal}>Item 1</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 2</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 3</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 4</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 5</ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={4}>
                <ListGroup>
                    <ListGroupItem onClick={props.triggerModal}>Item 6</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 7</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 8</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 9</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 10</ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={4}>
                <ListGroup>
                    <ListGroupItem onClick={props.triggerModal}>Item 11</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 12</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 13</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 14</ListGroupItem>
                    <ListGroupItem onClick={props.triggerModal}>Item 15</ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
    </Grid>
);

export default Products;

