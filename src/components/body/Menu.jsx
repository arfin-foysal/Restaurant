import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItems'
import DishDetail from './DishDetail'
import { CardColumns,Modal,ModalBody,ModalBodyProps,Button, ModalFooter} from 'reactstrap'

export default class Menu extends Component {
    state ={
        Dishes: DISHES,
        selectedDish:null,
        modalOpen:false
    }

    onDishSelect=dish =>{
      
         this.setState({selectedDish :dish,
            modalOpen: !this.state.modalOpen
        });
        
    }

    toggleModal=()=>{
        this.setState({
            modalOpen:!this.state.modalOpen
        })
    }

    render() {
        const Menu =this.state.Dishes.map((item)=>{
            return <MenuItem 
            Dishes={item} 
            key ={item.id}
           DishSelect={()=>this.onDishSelect(item )}/>
        })

        let dishDetail=null;
        if(this.state.selectedDish != null){
            dishDetail=<DishDetail dish={this.state.selectedDish}/>   
           
        }


        return (
            <div className=" container">
                <div className="row mt-5 ">
                   <CardColumns>
                       {Menu }
                   </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dishDetail}

                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                
            </div>
        )
    }
}
