import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    padding-top: 8rem;

    display: grid;
    justify-items: center; 
    align-items: baseline;  

@media screen and (max-width: 500px){
    padding-top: 4rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
}
`