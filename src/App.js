import Container from './components/Container/Container'

import FriendList from './components/FriendList/FriendList'
import friends from './components/FriendList/friends.json'

import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./components/Statistics/statistical-data.json";

import Profile from './components/Profile/Profile'
import user from './components/Profile/user.json'

import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './components/TransactionHistory/transactions.json'

import './styles.css';

function statSum(statisticalData) {
  statisticalData = Object.values(
    statisticalData.reduce((acc, item) => {
      (
        acc[item.label] ||
        (acc[item.label] = { label: item.label, percentage: 0 })
      ).percentage += item.percentage;
      return acc;
    }, {})
  );
  return statisticalData;
}
const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={statSum(statisticalData)} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
}

export default App;
