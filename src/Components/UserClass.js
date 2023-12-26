import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //create state variables

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "https://dummy.com",
      },
    };

    console.log(this.props.name + " Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/dharanip18");
    const json = await data.json();
    console.log(this.props.name + " ComponentDidMount");
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    //clear everything before leaving the page
    console.log("ComponentWillUnmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;
    console.log(name + " Render");
    return (
      <div className="container user-card">
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count
        </button>
        <br />
        <img
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          src={avatar_url}
        />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:dharani.p@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
