import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, subtitle, imageUrl, imageSize, history, match }) => (
  <div
    className={`${imageSize} menu-item`}
    onClick={() => history.push(`${match.url}${title}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
