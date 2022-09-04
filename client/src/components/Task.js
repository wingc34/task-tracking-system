import React from "react";
import styled from "styled-components/macro";

const TaskContainer = styled.div`
  flex: 0 0 30%;
  background-color: white;
  padding: 2em;
  margin: 0 calc(5% / 3) 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TaskUpperContent = styled.div`
  margin-bottom: 12px;
`;

const TaskName = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const TaskDetails = styled.div`
  font-size: 16px;
  color: grey;
`;

const TaskLowerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskAssigneeWrapper = styled.div``;

const TaskAssigneeIcon = styled.img`
  border-radius: 10px;
`;

const TaskAssigneeName = styled.span`
  font-size: 16px;
`;

const TaskPriority = styled.div`
  font-size: 16px;
  border-radius: 10px;
  color: white;
  ${props => props.priority < 7 ? `background-color: hsl(285, ${100 / props.priority}%, 70%)` : `background-color: hsl(285, 5%, 40%)`};
  padding: 8px 10px;
`;

export default function Task({ task }) {
  return (
    <TaskContainer>
      <TaskUpperContent>
        <TaskName>{task.Task}</TaskName>
        <TaskDetails dangerouslySetInnerHTML={{ __html: task.Description }} />
      </TaskUpperContent>
      <TaskLowerContent>
        <TaskAssigneeWrapper>
          <TaskAssigneeIcon />
          <TaskAssigneeName>{task.By_who.length > 0 ? task.By_who : 'Unassigned'}</TaskAssigneeName>
        </TaskAssigneeWrapper>
        <TaskPriority priority={task.Priority}>Priority {task.Priority}</TaskPriority>
      </TaskLowerContent>
    </TaskContainer>
  );
}
