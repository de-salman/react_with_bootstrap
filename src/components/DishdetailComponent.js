import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, } from 'reactstrap';

export default class DishdetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


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
                                <p>--{a.author} , {a.date}</p>
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
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
            </div>

        )
    }
}
