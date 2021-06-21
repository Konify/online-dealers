
import { useEffect, useReducer, createContext } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios'


export const ContextApi = createContext()

// reducer initail state
const initialState = {
    loading:false,
    products:null,
    items:null,
    user:null,
    freelancers:null
}

// reducer function
function reducer(state, action){
    switch(action.type){
        case'store_product':{
            return{
                ...state,
                loading:false,
                products:action.payload
            }
        }
        case'store_items':{
            return{
                ...state,
                loading:false,
                items:action.payload
            }
        }
        
        case'store_user':{
            return{
                ...state,
                user:action.payload
            }
        }
        case'store_freelancers':{
            return{
                ...state,
                freelancers:action.payload
            }
        }
    }
}


function Contexts(props){

    const [state, dispatch] = useReducer(reducer, initialState)

    const ls = localStorage.getItem('user');

    useEffect(() => {
        if(ls){
            dispatch({type:'store_user', payload:JSON.parse(ls)});
        }
    }, [])

    async function fetchData(){
        try {
            const response = await Promise.all([axios('/freelancers'), axios('/items')])
            if(response[0].data){
                dispatch({type:'store_freelancers', payload:response[0].data})
            }
            if(response[1].data){
                dispatch({type:'store_items', payload:response[1].data})
            }
            // console.log(response)
            
        } catch (error) {
            
        }
    }



    useEffect(() => fetchData(), [])
    // console.log(state.products)

    return (
        <ContextApi.Provider value={{state, dispatch}}>
            {props.children}
        </ContextApi.Provider>
    )
}

export default withRouter(Contexts)

