import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

import React from 'react'

const ProductScreen = () => {
    const { id : productId } = useParams();
    const product = products.find((product) => product._id === productId);
    
  return (
    <><Link className="btn btn-light my-3" to="/">
          Go Back
      </Link><Row>
              <Col md={6}>
                  <Image src={product.image} alt={product.name} fluid />
              </Col>
              <Col md={3}>
                  <ListGroup variant="flush">
                      <ListGroup.Item>
                          <h3>{product.name}</h3>
                      </ListGroup.Item>
                      <ListGroup.Item>
                          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                      </ListGroup.Item>
                      <ListGroup.Item>
                          Price: ${product.price}
                      </ListGroup.Item>
                      <ListGroup.Item>
                          Description: {product.description}
                      </ListGroup.Item>
                  </ListGroup>
              </Col>
              <Col md={3}>
                  <Card>
                      <ListGroup variant="flush">
                          <ListGroup.Item>
                              <Row>
                                  <Col>
                                      Price:
                                  </Col>
                                  <Col>
                                      <strong>${product.price}</strong>
                                  </Col>
                              </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <Row>
                                  <Col>
                                      Status:
                                  </Col>
                                  <Col>
                                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                  </Col>
                              </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <Button className="btn-block" disabled={product.countInStock === 0} type="button">
                                  Add to Cart
                              </Button>
                          </ListGroup.Item>
                      </ListGroup>
                  </Card>
              </Col>
          </Row></>
  );
}

export default ProductScreen