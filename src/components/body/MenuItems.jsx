import React from 'react'
import { Card, CardImg,CardBody,CardTitle,CardImgOverlay } from'reactstrap';

export default function MenuItems(props) {
   
    return (
        <div >
            <Card className=" text-light " >
            <CardBody>
            <CardImg With="100%"  alt={props.Dishes.name} src={props.Dishes.image}  />
                <CardImgOverlay >
                    <CardTitle style={{cursor:'pointer'}} onClick ={props.DishSelect}>
                   
                        {props.Dishes.name}
                    </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}
