import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import "./App.css";

import profileUserData from "../src/db/user.json";
import statisticalData from "../src/db/statistical-data.json";
import friends from "../src/db/friends.json";
import transactionsData from "./db/transactions.json";

// console.log(profileUserData)
// console.log(statisticalData);

function App() {
  return (
    <div className="App">
      <Profile profileUserData={profileUserData} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory transaction={transactionsData} />
    </div>
  );
}

export default App;
