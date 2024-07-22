import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import Section from "./Section/Section";
import Container from "./Container/Container";
import Heading from "./Heading/Heading";

import userData from "../src/data/userData.json";
import friends from "../src/data/friends.json";
import transactions from "../transactions.json";

const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Profile" bottom />
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <Heading title="Task 2 Freunds" bottom />
        <>
          <FriendList friends={friends} />
        </>
        <>
          <Heading title="Task 3 Transactions" bottom />
        </>
        <>
          <TransactionHistory items={transactions} />
        </>
      </Container>
    </Section>
  );
};

export default App;
