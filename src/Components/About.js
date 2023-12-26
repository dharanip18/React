import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    return (
      <div className="container">
        {console.log("Parent Render")}
        <h1>About</h1>
        {/* <User name={"Dharani"} /> */}

        <UserClass name={"Child1"} location={"Chennai"} />
        <UserClass name={"Child2"} location={"Chennai"} />
        <UserClass name={"Child3"} location={"Chennai"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <User name={"Dharani"} />

//       <UserClass name={"First"} location={"Chennai"} />
//       <UserClass name={"Child1"} location={"Chennai"} />
//       <UserClass name={"Child2"} location={"Chennai"} />
//     </div>
//   );
// };

export default About;
