import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MovieLink = styled(Link)`
  color: black;

  &:hover {
    color: red;
  }
`;
