import React from "react"
import { Button, Container, DataContainer, Name, Stock } from "./styles"

const Card = (props) => {
    return (
        <Container>
            <DataContainer>
                <Name>{props.product.name}</Name>
                <Stock>Estoque Disponível: <strong>{props.product.qtyStock}</strong></Stock>
            </DataContainer>
            <Button>Comprar</Button>
        </Container>
    )
}

export default Card