import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { src: null };
    this.onAddAvatar = this.onAddAvatar.bind(this);
  }
  onAddAvatar(e) {
    this.setState({ src: e.target.value });
  }

  render() {
    const { src } = this.state;
    const { username } = this.props.userInfo;
    console.log(username);
    return (
      <div className="user-list">
        <div className="user-avatar">
          <div className="user-avatar-name">
            <p>UserName: {username}</p>
          </div>
          <div className="user-avatar-icon">
            Add user avatar
            <img src={src} />
            <input
              className="user-avatar-add"
              type="file"
              value={this.state.src}
              onChange={this.onAddAvatar}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
