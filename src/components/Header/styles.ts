import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue)
`

export const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    padding: 2rem 1rem 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 15%;
        height: 15%;
    }

 button{
     font-size: 1rem;
     color: #FFF;
     background: var(--blue-light);
     border: 0;
     padding: 0 2rem;
     border-radius: 0.25rem;
     right: 3rem;

     transition: filter 0.2s;

     &:hover{
         filter: brightness(0.9)
     }
 }   
`
