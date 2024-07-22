// src/components/App.jsx
// import Profile from "./components/Profile";

import Profile from "./Profile";
import FriendList from "./FriendList";
import Section from "./Section";
import Container from "./Container";
import Heading from "./Heading";

import userData from "../src/data/userData.json";
import friends from "../src/data/friends.json";

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
      </Container>
    </Section>
  );
};

export default App;
