import React from 'react';
import {login, getDogs } from '../components/petFinderServices';


export default class DogsForAdoption extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dogs:[], 
            token: ''
        }
    }

    async componentDidMount(){
        let token =   await login();
        console.log('Pet Finders Auth token: ' + token);
        this.setState({token});
    }

    getAllDogs = async ()=>{
        const dogs = await getDogs(this.state.token);
        console.log(dogs.animals);
        this.setState({dogs: dogs.animals});
    }

    render(){
        return(
            <div>
                <h1>list of dogs</h1>
                <button onClick={this.getAllDogs}>get dogs</button>
            </div>
        )
        
    }


}