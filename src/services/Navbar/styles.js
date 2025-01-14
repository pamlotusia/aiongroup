import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  gap: 2rem;

.link{
    text-decoration: none;
    color: ${({theme})=> theme.COLORS.GRAY_300};
}

.link:hover{
    color: ${({theme})=> theme.COLORS.YELLOW};
    transition: color .2s ease;
}
`;
