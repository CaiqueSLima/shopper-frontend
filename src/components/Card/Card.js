import React from "react"
import { Button, Container, DataContainer, Name, Stock } from "./styles"

const Card = (props) => {
    return (
        <Container>
            <DataContainer>
                <Name>{props.name}</Name>
                <Stock>Estoque Disponível: <strong>{props.qtyStock}</strong></Stock>
            </DataContainer>
            <Button onClick={() => props.addToCart(props.product)}>Comprar</Button>
        </Container>
    )
}

export default Card