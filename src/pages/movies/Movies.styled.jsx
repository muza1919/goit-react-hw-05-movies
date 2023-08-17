import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const StyledInput = styled.input`
  border: 1px solid red;
`;

export const StyledSearchBtn = styled.button`
  border: 1px solid red;
  padding: 5px;
  border-radius: 20%;
  &:hover {
    color: red;
    background-color: lightgrey;
  }
`;
