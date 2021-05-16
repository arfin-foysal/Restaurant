import {createStore}from 'redux'
import {reducer, Reducer}from './Reducer'

const myStore =createStore(reducer);
export default myStore