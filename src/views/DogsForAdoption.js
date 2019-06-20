import React from 'react';
import {login, getDogs, getCats } from '../components/petFinderServices';
import '../css/DogsforAdoption.css';
import PetList from '../components/PetList';
import { Button } from 'antd';


export default class DogsForAdoption extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dogs:[], 
            cats:[],
            view: '',
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
        this.setState({dogs: dogs.animals, view:'dogs'});
    }

    getAllCats = async ()=>{
        const cats = await getCats(this.state.token);
        this.setState({cats: cats.animals, view: 'cats'});
    }

    render(){
        return(
            <div className='adoption-container'>
                <h1>When You’re Ready, Start Here: </h1>
                <p>Welcoming a pet into your family is a big decision, but chances are good that 
                your life will be better than ever with the companionship of your new best friend. 
                </p>
                <div className='button-container'>
                    <Button type="primary" icon="search" size="large" onClick={this.getAllDogs}>
                    Find a Dog
                    </Button>
                    <Button type="primary" icon="search" size="large"onClick={this.getAllCats}>
                    Find a Cat
                    </Button>
                    <Button type="primary" icon="search" size="large" >
                    Find Other Pets
                    </Button>
                </div>

                {
                    this.state.view === 'dogs' ? <PetList animals={this.state.dogs}/> : <PetList animals={this.state.cats}/>
                }
            </div>
        )  
    }


}