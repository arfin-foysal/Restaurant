import React from 'react'
import { Card, CardImg,CardBody,CardTitle,CardImgOverlay } from'reactstrap';

export default function MenuItems(props) {
    console.log(props);
    return (
        <div className="">
            <Card className="mt-5 text-light" >
            <CardBody>
                <CardImg With="80%" height="30%" alt={props.Dishes.name} src={props.Dishes.image}  />
                <CardImgOverlay>
                    <CardTitle>
                        {props.Dishes.name}
                    </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}
