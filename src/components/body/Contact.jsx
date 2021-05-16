import React, { Component } from 'react'
import{Button,Form,FormGroup,Label,Input,Col}from 'reactstrap'

export default class Contact extends Component {
            constructor(props){
            super(props)

            this.state={
                fastname:"",
                lastname:"",
                telnum:"",
                email:"",
                agree:false,
                contactype:'Tel.',
                message:""
            }

 this.handelInputChange=this.handelInputChange.bind(this);
 this.handelSubmit=this.handelSubmit.bind(this)
}
handelInputChange=(event)=>{
const value=event.target.type==='checkbox'? event.target.checked:event.target.value;
const name=event.target.name;
this.setState({
    [name]:value
})
}
handelSubmit=(event)=>{
    console.log(this.state);
    event.preventDefault()
}

    render() {
        return (
            document.title="Contact",
            <div className="container">
                <div className="row row-content" style={{paddingLeft:"20px", textAlign:'left'}}>
                    <div className="col-12">
                        <h3>Send as your Feedback!</h3>

                    </div>
                    <div className="col-12 col-md-7">
                    <Form onSubmit={this.handelSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname"md={2} >Fast Name </Label>
                            <Col md={10}>
                                <Input type="text" 
                                name="fastName" 
                                placeholder="Fast Name" 
                                valu ={this.state.fastname}
                                onChange={this.handelInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="firstname"md={2} >Last Name </Label>
                            <Col md={10}>
                                <Input type="text" 
                                name="lastName"
                                 placeholder="last Name" 
                                valu ={this.state.lastname}
                                onChange={this.handelInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum"md={2} >Contact </Label>
                            <Col md={10}>
                                <Input type="tel" 
                                name="telnum" 
                                placeholder="Contact" 
                                valu ={this.state.telnum}
                                onChange={this.handelInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email"md={2} >Email </Label>
                            <Col md={10}>
                                <Input type="email" 
                                name="email" 
                                placeholder="Email" 
                                valu ={this.state.email}
                                onChange={this.handelInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:6,offset:2}}>
                                <FormGroup check>
                                    <label check>
                                        <Input type="checkbox" 
                                        name="agree" 
                                        checked={this.state.agree}
                                        onChange={this.handelInputChange}/>
                                        <strong>
                                            May We Contact You?
                                        </strong>
                                    </label>
                                        </FormGroup>
                                        </Col>
                                        <Col md={{size:3,offset:1}}>
                                         <Input type="select" 
                                         name="contactype" 
                                         value={this.state.contactype}
                                         onChange={this.handelInputChange}>
                                       <option>Tel.</option>
                                       <option>Email</option>
                                         </Input>
                                          </Col>
                                    </FormGroup>
                                     <FormGroup row>
                                     <Label htmlFor="message"md={2} >Your feedback </Label>
                                    <Col md={10}>
                                    <Input type="textarea"
                                    name="message"
                                    valu ={this.state.message}
                                    onChange={this.handelInputChange}>
                                    </Input>
                                    </Col>
                                    </FormGroup>
                                    <FormGroup>
                                    <Col md={{size:10,offset:2}}>
                                        <Button type="submit" color="primary">
                                            Send FeedBack
                                        </Button>
                                    </Col>
                                    </FormGroup>
                                 </Form>
                    </div>
                </div>
            </div>
        )
    }
}
