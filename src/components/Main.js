import React, { Component } from "react";
import BusinessCard from "./BusinessCard";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BusinessCard: [
        {
          name: "Oli Baptiste",
          email: "myfakeemail@gmail.com",
          tel: "012-345-678",
          photo:
            "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",
        },
        {
          name: "Miles morales",
          email: "morales@miles.com",
          tel: "756-8548-8292",
          photo:
            "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",
        },
        {
          name: "Thor Odinson",
          email: "odinson@thor.com",
          tel: "201-1121-0896",
          photo:
            "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",
        },
        {
          name: "Cristiano Ronaldo",
          email: "ronaldo@cristiano.com",
          tel: "007-0007-0007",
          photo:
            "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",
        },

        {
          name: "Lionel Messi",
          email: "messi@lionel.com",
          tel: "010-0010-0010",
          photo:
            "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",
        },
      ],
    };
  }

  handleRemoveCard = (index) => {
    const { businessCards } = this.state;
    const updatedCards = [...businessCards];
    updatedCards.splice(index, 1);
    this.setState({ businessCards: updatedCards });
  };

  render() {
    const { businessCards } = this.state;

    return (
      <main>
        <div className="business-cards">
          {businessCards.map((card, index) => (
            <BusinessCard
              key={index}
              name={card.name}
              email={card.email}
              tel={card.tel}
              photo={card.photo}
              onRemove={() => this.handleRemoveCard(index)}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
