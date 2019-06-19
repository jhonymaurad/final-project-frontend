import React from 'react';
import {login, getDogs } from '../components/petFinderServices';
import dogAvatar from '../assets/dog-avatar.png';


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
            <div className='adoption-container'>
                <h1>Type of Animal: </h1>
                <button onClick={this.getAllDogs}>get dogs</button>

                <div className='dog-list-container'>
                    <ul>
                        {this.state.dogs.map(dog =>(
                            <div key={dog.id}>
                                {
                                    dog.photos.length !== 0 ? <img src={dog.photos[0].medium} alt={dog.type}></img> : 
                                    <img style={{width: '150px', height: '150px'}} src={dogAvatar} alt='dog avatar'></img>
                                }
                                
                                {/* {console.log(dog.photos[0])} */}
                                <h3>{dog.name}</h3>
                            </div>
                        ))}
                    </ul>


                </div>
            </div>
        )  
    }


}