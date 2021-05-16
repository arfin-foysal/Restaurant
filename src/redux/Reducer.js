
import DISHES from '../data/dishes'
import COMMENTS from '../data/Comments'

const initialState ={
    dishes :DISHES,
    comments:COMMENTS
    
}

export const reducer= (state=initialState,action)=>{
    return state;
}