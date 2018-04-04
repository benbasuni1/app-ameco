import React from 'react';
import { Button, Modal, Grid, Row, Col } from 'react-bootstrap';
import imgTemplate from '../img/olive-oil.jpg';

const PopupImage = props => (
    <Modal show={props.showModal} onHide={() => props.closeModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Item title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Grid>
                  <Row>
                      <Col md={3}>
                        <img className="product-img" src={imgTemplate} alt="olive-oil"/>
                      </Col>
                      <Col md={9}>
                        <p>Description of item</p>
                      </Col>
                  </Row>
              </Grid>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => props.closeModal()}>Close</Button>
          </Modal.Footer>
        </Modal>
);

export default PopupImage;
