// src/components/App.jsx
import Profile from "./Profile";
import userData from "../userData.json";

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
      </Container>
    </Section>
  );
};

export default App;
