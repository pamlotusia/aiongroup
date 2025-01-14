import styled from 'styled-components'

export const Container = styled.div`
display: flex;
margin: 2rem 0;
padding: 0 9rem;
gap: 2rem;

section{
    width: 100%;
    margin: 1rem 0;

    img{
        width: 7.5rem;
        height: 3.3rem;
    }


    .content{
        margin: 4.5rem 0;
    }

    .title{
        font-size: 2.5rem;
        font-weight: 500;
        margin: .5rem 0;
        color: ${({theme})=> theme.COLORS.GREEN_800};
        
        span{
            color: ${({theme})=> theme.COLORS.YELLOW};
        }
    }

    .text{
        width: 60%;
        font-size: 1rem;
        color: ${({theme})=> theme.COLORS.GRAY_400};

    }
}


@media (max-width:1000px){
    flex-direction: column;
    padding: 0 1rem;
    gap: 0;

    section{
        margin: 0 0 1rem;

        .content{
            margin: 1rem 0;
        }
        .text{
            width: 100%;
        }
    }

    
}
`