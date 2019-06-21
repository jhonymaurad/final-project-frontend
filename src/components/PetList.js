import React, { useContext } from "react";
import "../css/DogsforAdoption.css";
import dogAvatar from "../assets/dog-avatar.png";
import { Button, Icon } from "antd";

import { Context } from "../Store/Context";

const PetList = props => {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <ul className="dog-list-container">
        {props.animals.map(dog => (
          <div key={dog.id} className="dog-card">
            <a target="_blank" rel="noopener noreferrer" href={dog.url}>
              {dog.photos.length !== 0 ? (
                <img
                  src={dog.photos[0].medium}
                  alt={dog.type}
                  className="dog-image"
                />
              ) : (
                <img
                  style={{ width: "150px", height: "150px" }}
                  src={dogAvatar}
                  alt="dog avatar"
                />
              )}
            </a>
            <h4>Name: {dog.name}</h4>
            <h4>Age: {dog.age}</h4>
            <h5>Description</h5>
            <p>{dog.description}</p>
            <Button
              type="primary"
              size="large"
              icon="heart"
              onClick={() => {
                if (state.isSignedIn) {
                  dispatch({
                    type: "ADD_USER_FAVORITES",
                    payload: {
                      id: dog.id,
                      name: dog.name,
                      imageUrl:
                        dog.photos.length !== 0
                          ? dog.photos[0].medium
                          : dogAvatar,
                      url: dog.url
                    }
                  });
                } else {
                  alert("You must be signed in");
                }
              }}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
