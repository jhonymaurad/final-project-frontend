import React from 'react';
import '../css/DogsforAdoption.css';
import dogAvatar from '../assets/dog-avatar.png';

const PetList = (props) => {
    return(
        <div >
             <ul className='dog-list-container'>
                {props.animals.map(dog =>(
                    <div key={dog.id} className='dog-card'>
                        <a target="_blank" rel="noopener noreferrer" href={dog.url}>
                            {
                                dog.photos.length !== 0 ? <img src={dog.photos[0].medium} alt={dog.type} className='dog-image'></img> : 
                                <img style={{width: '150px', height: '150px'}} src={dogAvatar} alt='dog avatar'></img>
                            }
                        </a>
                        <h4>Name: {dog.name}</h4>
                        <h4>Age: {dog.age}</h4>
                        <h5>Description</h5>
                        <p>{dog.description}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default PetList;