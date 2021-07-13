import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 97vh;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6.5rem;
`;

export const HomeHeader = styled.h1`
    margin: 0;
    font-family: "Audiowide", sans-serif;
    font-size: 6rem;
    color: #362118;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2.5rem;
    width: 15rem;
    padding 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 2.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.p`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`
export const GithubLogo = styled.img`
z-index: -1;
filter: blur(7px);
-webkit-filter: blur(7px);
min-height: 100%;
min-width: 800px;
max-width: 800px;
width: 100%;
height: auto;
position: fixed;
top: 0;
left: center;
`