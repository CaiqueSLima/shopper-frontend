import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/Card/Card"
import Header from "../components/Header/Header"
import { Cart, CartTitle, Container, DataContainer, FormContainer, ProductsList } from "./styles"
import { baseURL } from "../constants/baseURL"
import useForm from "../hooks/useForm"
import CartItem from "../components/CartItem/CartItem"

const MainPage = () => {

    const [products, setProducts] = useState([])
    const [productsInCart, setProductsInCart] = useState([])
    const [form, onChange, clear] = useForm({
        costumerName: '',
        deliveryDate: ''
    })

    useEffect(() => {
        getProductsFromStock()
    }, [])

    const getProductsFromStock = () => {
        axios.get(`${baseURL}/products`).then(res => {
            setProducts(res.data.products)
        })
    }

    const addToCart = (product) => {

        const matchIndex = productsInCart.findIndex(element => product.id === element.id)

        if (matchIndex !== -1) {

            const newQuantity = productsInCart[matchIndex].quantity += 1
            const newCart = [...productsInCart]
            newCart[matchIndex].quantity = newQuantity
            setProductsInCart(newCart)

        } else {

            const productToCart = { ...product, quantity: 1 }
            delete productToCart.qtyStock
            setProductsInCart([...productsInCart, productToCart])
        }
    }

    const renderProductsList = () => {
        return products?.map((product) => {
            return (
                <Card
                    key={product.id}
                    name={product.name}
                    qtyStock={product.qtyStock}
                    product={product}
                    addToCart={addToCart}
                />
            )
        })
    }

    const renderCartItems = () => {
        return productsInCart?.map((product) => {
            return (
                <CartItem 
                    key={product.id}
                    name={product.name}
                    quantity={product.quantity}
                    price={product.price}
                />
            )
        })
    }

    console.log(productsInCart)


    return (
        <Container>
            <Header />
            <FormContainer>
                <label>
                    Nome do cliente:
                    <input
                        type='text'
                        name="costumerName"
                        value={form.costumerName}
                        onChange={onChange}
                        placeholder="Nome completo"
                    />
                </label>
                <label>
                    Data de entrega desejada:
                    <input
                        type='date'
                        name="deliveryDate"
                        value={form.deliveryDate}
                        onChange={onChange}
                    />
                </label>
            </FormContainer>
            <DataContainer>
                <ProductsList>
                    <h1>Nossos produtos</h1>
                    {renderProductsList()}
                </ProductsList>
                <Cart>
                    <CartTitle>Carrinho</CartTitle>
                    {renderCartItems()}
                </Cart>
            </DataContainer>


        </Container>
    )
}

export default MainPage