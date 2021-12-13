import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    height: 80px;
    width: 800px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;

    @media screen and (max-width: 1280px) {
        max-width: 530px;
    }
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Name = styled.p`
    font-size: 0.9rem;
`

export const Stock = styled.p`
    font-size: 0.8rem;
`

export const Button = styled.button`
    padding: 5px;
    width: 65px;
    height: 40px;
    margin-top: 10px;
    cursor: pointer;
`