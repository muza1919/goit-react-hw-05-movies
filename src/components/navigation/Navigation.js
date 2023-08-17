import { List, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="movies">Movies</StyledLink>
        </li>
      </List>
    </nav>
  );
};

export default Navigation;
