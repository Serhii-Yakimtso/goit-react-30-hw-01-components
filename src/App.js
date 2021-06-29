import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";

import "./App.css";

import profileUserData from "../src/db/user.json";
import statisticalData from "../src/db/statistical-data.json";

// console.log(profileUserData)
// console.log(statisticalData);

function App() {
  return (
    <div className="App">
      <Profile profileUserData={profileUserData} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />;
    </div>
  );
}

export default App;
