import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 5px 10px;
  margin: 0 auto;
`;

export const Poster = styled.img`
  display: block;
  margin: 0 auto;
`;
export const MovieTitle = styled.h2`
  text-align: center;
`;

export const AdditionalLink = styled(Link)`
  padding: 5px 10px;
  color: black;
  &:hover {
    color: red;
  }
`;
