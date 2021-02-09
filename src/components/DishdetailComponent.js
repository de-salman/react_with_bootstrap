import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle, } from 'reactstrap';

export default class DishDetail extends Component {

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
                    </div>
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
