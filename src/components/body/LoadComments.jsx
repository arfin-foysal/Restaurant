import React from 'react'
import dateFormat from 'dateformat'

export default function LoadComments(props) {
    return (
        props.comments.map(comment=>{
            return (
                <div key ={comment.id}>
                    <h4>{comment.author}</h4>
                    <hr/>
                    <p>{comment.comment}</p>
                    <hr/>
                    <p>{comment.date}</p>
                </div>
            );
        })
        
    )
}
