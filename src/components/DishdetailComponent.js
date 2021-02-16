import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Card, Row, CardBody, Col, CardImg, CardText, CardTitle, Button, Modal, ModalHeader, ModalBody, Label, } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export default class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false
        };


    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.toggleModal()
    }


    renderDish(dish, comments) {
        if (dish != null)
            return (
                <>

                    <div className="col-12 col-md-5 m-1">
                        <Card >
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>

                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments.map(a => (
                            <div key={a.id}>
                                <p>{a.comment}</p>
                                <p>--{a.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(a.date)))}</p>
                            </div>
                        ))}
                        <Button outline onClick={this.toggleModal}><i className="fa fa-edit fa-lg"></i> Submit Comment</Button>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" name="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="firstname">Your Name</Label>
                                        <Control.text model=".firstname" id="firstname" name="firstname"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }} />
                                        <Errors
                                            className="text-danger"
                                            model=".firstname"
                                            show="touched"
                                            messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="comment">Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            rows="6"
                                            className="form-control"></Control.textarea>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col >
                                        <Button type="submit" value="submit" color="primary">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </>
            )
        else
            return (
                <div></div>
            )


    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {this.renderDish(this.props.dish, this.props.comments)}
                </div>
            </div>

        )
    }
}
