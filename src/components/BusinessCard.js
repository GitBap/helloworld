import React, { Component } from "react";

class BusinessCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      tel: "",
      photo: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.name !== prevState.name ||
      nextProps.email !== prevState.email ||
      nextProps.tel !== prevState.tel ||
      nextProps.photo !== prevState.photo
    ) {
      return {
        name: nextProps.name || "Not Specified",
        email: nextProps.email || "Not Specified",
        tel: nextProps.tel || "Not Specified",
        photo:
          nextProps.photo ||
          "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",
      };
    }
    return null;
  }

  render() {
    const { name, email, tel, photo } = this.state;
    return (
      <div className="business-card">
        <img src={photo} alt="Profile" />
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {tel}</p>
        <button onClick={onRemove}>Remove</button>
      </div>
    );
  }
}

export default BusinessCard;
