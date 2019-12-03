import React from "react";
import GitHubCalendar from "github-calendar";

const Card = props => {
  if (props.user !== null) {
    const {
      avatar_url,
      login,
      name,
      location,
      html_url,
      followers,
      following,
      bio,
      username
    } = props.user;
    // console.log("calendar", `.card[data-id="${props.user.login}"] .calendar`);
    // GitHubCalendar(`.card[data-id="${props.user.login}"] .calendar`, username, {
    //   responsive: true
    // });
    // const toggleChart = e => {
    //   e.target.parentElement.classList.toggle("showMore");
    // };
    return (
      <div className="card" data-id={login}>
        <img src={avatar_url} alt={name} />
        <div className="card-info">
          <h3 className="name">{name}</h3>
          <p className="username">{login}</p>
          <p>Location: {location}</p>
          <p>
            Profile:
            <a href={html_url}>{html_url}</a>
          </p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Bio: {bio}</p>
        </div>
        <div className="calendar"></div>
        {/* <button onClick={toggleChart}>Show more</button> */}
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-info">
          <h3 className="name">Loading...</h3>
        </div>
      </div>
    );
  }
};

export default Card;
