import "./App.css";
import CardList from "./components/card-list/cardlist";
import SearchBar from "./components/searchbar/searchbar";
import { useState, useEffect } from "react";
import React from "react";

export const App = () => {
  const [searchField, setsearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div className="App">
      <h1 className="app-title">Monster Rollodex</h1>
      <SearchBar
        className="monsters-search"
        onChangeHandler={onSearchChange}
        placeholder="search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//

//   }
// }
export default App;
