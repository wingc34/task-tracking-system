import PhaseBoard from "./components/PhaseBoard";
import useApp from "./hooks/useApp";
import UserPicker from "./components/UserPicker";
import styled from "styled-components/macro";

const AppContainer = styled.div`
  position: relative;
`;

function App() {
  const { tasks, usersname, onSelectName } = useApp();
  return (
    <AppContainer>
      <UserPicker usersname={usersname} onSelectName={onSelectName} />
      {tasks.length > 0
        ? tasks.map((phaseTasks, i) => {
            return (
              <PhaseBoard phaseTasks={phaseTasks} key={`phaseTasks-${i}`} />
            );
          })
        : null}
    </AppContainer>
  );
}

export default App;
