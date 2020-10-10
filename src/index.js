import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
    this.getUser = this.getUser.bind(this);
  }

  getUser(id) {
    axios.get(`http://localhost:4002/users/${id}`)
      .then(response => {
        const users = response.data.data;
        this.setState({
          users
        });
      });
  }

  componentDidMount() {
    this.getUser(1);
  }

  render() {

    return (
      <div className="container">
        {
          this.state.users.map(user =>
              <div>{user.user_name} from {user.location}</div>
          )
        }
      </div>
    );
  }

};

ReactDOM.render(<App />, document.querySelector("#users"));