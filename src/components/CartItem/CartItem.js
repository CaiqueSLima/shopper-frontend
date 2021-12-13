import React from "react"
import { 
    Container,
    DataContainer,
    DetailsContainer,
    IconsContainer,
    Name,
    PlusIcon,
    MinusIcon,
    TrashIcon 
} from "./styles"

const CartItem = (props) => {

    const nameToShow = props.name.length > 30 ? props.name.slice(0, 29) + "..." : props.name
    console.log()

    return (
        <Container>
            <DataContainer>
                <div>
                    <Name>{nameToShow}</Name>
                </div>
                <DetailsContainer>
                    <p>Preço: R$ {props.price}</p>
                    <p>Quantidade: <strong>{props.quantity}</strong></p>
                    <p>Total: <strong>R$ {props.total}</strong></p>
                </DetailsContainer>
            </DataContainer>
            <IconsContainer>
                <PlusIcon onClick={() => props.increaseQuantity(props.id)} />
                <MinusIcon onClick={() => props.decreaseQuantity(props.id)} />
                <TrashIcon onClick={() => props.removeFromCart(props.id)} />
            </IconsContainer>
        </Container>
    )
}

export default CartItem
