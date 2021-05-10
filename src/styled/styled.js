import styled from 'styled-components'

export const Row = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const PageWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-width:50vw;
    min-height:50vh;
    border-radius:40px;
    background-color:rgba(0,0,0,0.5);
    transition:0.4s all ease;
    &:hover {
        background-color:rgba(0,0,0,0.2);
    }
`

export const Wrapper = styled.div`
    padding:10px 20px;
    width:100%;
    background-color:rgba(255,255,255,0.4);
    font-size:24px;
    box-shadow:0px 0px 4px 1px black;
`

export const Centered = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

export const Columned = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const MyButton = styled.div`
    outline:none;
    border:none;
    color:white;
    background-color:black;
    transition:1s all ease;
    cursor:pointer;
    padding:10px;
    border-radius:4px;
    &:hover {
        color:black;
        background-color:white;
    }
`