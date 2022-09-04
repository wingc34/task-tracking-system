import React from "react";
import Task from "./Task";
import styled from "styled-components/macro";

const PhaseBoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e6e6e6;
  margin-bottom: 12px;
`;

const PhaseBoardHeader = styled.div`
  ${(props) =>
    props.phase < 5
      ? `background-color: hsl(0, 0%, ${100 - 100 / props.phase}%)`
      : `background-color: hsl(0, 0%, 70%)`};
  color: white;
  padding: 18px;
  font-size: 28px;
  width: 15%;
`;

const PhaseBoardTaskContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px 12px;
  width: 85%;
`;

export default function PhaseBoard({ phaseTasks }) {
  return (
    <PhaseBoardContainer>
      <PhaseBoardHeader phase={phaseTasks.phase}>
        Phase {phaseTasks.phase}
      </PhaseBoardHeader>
      <PhaseBoardTaskContainer>
        {phaseTasks.tasks.length > 0
          ? phaseTasks.tasks.map((task, i) => (
              <Task task={task} key={`task-${i}`} />
            ))
          : null}
      </PhaseBoardTaskContainer>
    </PhaseBoardContainer>
  );
}
