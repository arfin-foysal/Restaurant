import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItems'
import DishDetail from './DishDetail'

export default class Menu extends Component {
    state ={
        Dishes: DISHES,
        selectedDish:null
    }

    onDishSelect=dish =>{
      
         this.setState({selectedDish :dish});
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
                    <div className=" col-6">
                       {Menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div >

                </div>
                
            </div>
        )
    }
}
