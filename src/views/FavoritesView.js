import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardText, Row } from "reactstrap";
import { Context } from "../Store/Context";

import "../css/FavoritesView.css";

export const FavoritesView = () => {
  const { state, dispatch } = useContext(Context);

  const favoriteCard = favorite => {
    return (
      <Card key={favorite.id}>
        <a href={favorite.url} target="_blank">
          <CardBody>
            <CardImg src={favorite.imageUrl} style={{ maxHeight: "14rem" }} />
            <CardText className="overlay">{favorite.name}</CardText>
          </CardBody>
        </a>
      </Card>
    );
  };

  const emptyPlaceholder = () => {
    return (
      <Card>
        <CardBody style={{ padding: "20px" }}>
          <CardTitle>Uh Oh</CardTitle>
          <CardText>You have no favorites</CardText>
        </CardBody>
      </Card>
    );
  };

  return (
    <div className="user-favorites">
      <h3>Favorites:</h3>
      <Card>
        <Row className="user-favorite-card">
          {state.favorites.length === 0
            ? emptyPlaceholder()
            : state.favorites
                .reverse()
                .slice(0, 4)
                .map(favorite => favoriteCard(favorite))}
        </Row>
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
