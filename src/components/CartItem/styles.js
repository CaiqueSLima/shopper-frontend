import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    width: 97%;
    /* height: 60px; */
    margin: 5px;
    padding: 10px 5px;
    border-radius: 5px;
    background-color: white;
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const DetailsContainer = styled.div`
    display: flex;
    margin-top: 5px;
    > p {
        font-size: 0.8rem;
        margin-right: 30px;
    }
`

export const Name = styled.p`
    font-size: 0.9rem;
`

export const Stock = styled.p`
    
    /* margin-top: 10px; */
`