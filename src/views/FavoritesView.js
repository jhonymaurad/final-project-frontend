import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardText } from "reactstrap";

import "../css/FavoritesView.css";

export const FavoritesView = () => {
  const favoriteCard = () => {
    return (
      <Card>
        <CardBody>
          <CardImg
            src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45029637/1/?bust=1561037208&width=300"
            style={{ width: "100%", height: "50%" }}
          />
          <CardText className="overlay">My Name is John</CardText>
        </CardBody>
      </Card>
    );
  };

  return (
    <div className="user-favorites">
      <h3>Favorites:</h3>
      <Card>
        <div className="user-favorite-card">
          {favoriteCard()}
          {favoriteCard()}
        </div>
      </Card>
      <Link
        to="#"
        style={{
          float: "right"
        }}
      >
        All favorites
      </Link>
    </div>
  );
};
