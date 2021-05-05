import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItems'

export default class Menu extends Component {
    state ={
        Dishes: DISHES
    }
    render() {
        const Menu =this.state.Dishes.map((item)=>{
            return <MenuItem Dishes={item} key ={item.id}/>
        })
        return (
            <div className="components">
                <div className="row">
                    <div className=" col-6">
                       {Menu}
                    </div>

                </div>
                
            </div>
        )
    }
}
