import avatar from "../../assets/avatar.png";
import "./about.css";

function About() {
  return (
    <div className="about">
      <img src={avatar} alt="author avatar" className="about__avatar" />
      <div className="about__description">
        <h2 className="about__description_title">About the author</h2>

        <p className="about__description_content">
          Welcome to this fun Place 😃 It was created by Jerry Liu who loves
          coding as much as art. From here, you can search fun news, save them
          and brag them to your friends.
          <br />
          <br />
          This app was powered by React, News API and Node.js and is
          open-sourced. Free feel to move to the GitHub Page👇for more
          information.
        </p>
        {/* <p className="about__description_content">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p> */}
      </div>
    </div>
  );
}

export default About;
