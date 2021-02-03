import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, } from 'reactstrap';

export default class DishDetail extends Component {



    renderDish(dish) {
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
                        {dish.comments.map(a => (
                            <div key={a.id}>
                                <p>{a.comment}</p>
                                <p>--{a.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric',month: 'short',day:'2-digit'}).format(new Date(Date.parse(a.date)))}</p>
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
                {this.renderDish(this.props.dish)}
            </div>
            </div>

        )
    }
}
