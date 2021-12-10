import React from "react"
import { Container, DataContainer, DetailsContainer, Name, Stock } from "./styles"

const CartItem = (props) => {

    const nameToShow = props.name.length > 40 ? props.name.slice(0, 39) + "..." : props.name
    console.log()

    return (
        <Container>
            <DataContainer>
                <div>
                    <Name>{nameToShow}</Name>
                </div>
                <DetailsContainer>
                    <p>Quantidade: {props.quantity}</p>
                    <p>Preço: R${props.quantity * props.price}</p>
                </DetailsContainer>
            </DataContainer>
        </Container>
    )
}

export default CartItem