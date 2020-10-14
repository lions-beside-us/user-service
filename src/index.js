import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import styled from 'styled-components';

const TolyUserImage = styled.img`
  border-radius: 50%;
  max-width: 7%;
  height: auto;
`;

const TolyUserComment = styled.span`
  border: none;
  color: #C0C0C0;
`;

let placeHolderImage = 'https://yt3.ggpht.com/a/AATXAJycfNAroKweTFE4WgBWSK4Gq3Q7_cpPu4WUl0p_wg=s900-c-k-c0xffffffff-no-rj-mo';

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
            <React.Fragment key={user.user_id}>
              <div>
                <TolyUserImage src={(user.profile_image_url) ? user.profile_image_url : placeHolderImage}></TolyUserImage>
                <TolyUserComment>{user.user_name}</TolyUserComment>
              </div>
            </React.Fragment>
          )
        }
      </div>
    );
  }

};

ReactDOM.render(<App />, document.querySelector("#users"));