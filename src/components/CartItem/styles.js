import styled from "styled-components"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
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
        margin-right: 15px;
    }
`

export const Name = styled.p`
    font-size: 0.9rem;
`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
`

export const PlusIcon = styled(AiOutlinePlus)`
    font-size: 1.2rem;
    cursor: pointer;
    transition: font-size 0.2s;
    &:hover {
        font-size: 1.5rem;
    }
`

export const MinusIcon = styled(AiOutlineMinus)`
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 10px;
    transition: font-size 0.2s;
    &:hover {
        font-size: 1.5rem;
    }
`

export const TrashIcon = styled(BiTrash)`
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 10px;
    transition: font-size 0.2s;
    &:hover {
        font-size: 1.5rem;
    }
`

export const Stock = styled.p`
    
    /* margin-top: 10px; */
`