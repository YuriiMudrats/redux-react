import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GoAway } from "../../store/actions";
import "./style.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    this.props.GoAway();
  }

  render() {
    const { isAuth } = this.props;
    console.log(isAuth);

    return (
      <nav class="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/">
              {/* <img
                className="icon-logo"
                src="https://image.freepik.com/free-icon/single-cube_318-36160.jpg"
              /> */}
              <a className="navbar-brand" href="#">
                Facecube
              </a>
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                {!isAuth ? (
                  <Link to="/login">
                    <a href="#">Login</a>
                  </Link>
                ) : (
                  <Link to="/">
                    <a href="#" onClick={this.handlerClick}>
                      LogOut
                    </a>
                  </Link>
                )}
              </li>
              <li>
                {!isAuth ? (
                  <Link to="/signup">
                    <a href="#"> Sing Up</a>
                  </Link>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToDispatch = {
  GoAway
};

function mapStateToProps(state) {
  return {
    isAuth: state.pageState.isAuth
  };
}

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(NavBar);
