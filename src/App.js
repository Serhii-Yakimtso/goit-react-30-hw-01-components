import Profile from "./components/Profile/Profile";
import "./App.css";

import profileUserData from "../src/db/user.json";

// console.log(profileUserData)

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profileUserData;

function App() {
  return (
    <div className="App">
      <Profile profileUserData={profileUserData} />
    </div>
  );
}

export default App;
