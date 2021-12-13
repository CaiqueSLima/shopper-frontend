import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/Card/Card"
import Header from "../components/Header/Header"
import { baseURL } from "../constants/baseURL"
import useForm from "../hooks/useForm"
import CartItem from "../components/CartItem/CartItem"
import Swal from "sweetalert2"
import { 
    Cart,
    CartContainer,
    CartList,
    CartTitle,
    CartTotal,
    Container,
    DataContainer,
    FormContainer,
    PlaceOrder,
    ProductsList 
} from "./styles"

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
        }).catch(err => {
            console.log(err)
        })
    }

    const addToCart = (product) => {
        const isInCart = productsInCart.find(element => product.id === element.id)

        if (isInCart) {

            increaseQuantity(product.id)

        } else {

            const productToCart = { ...product, quantity: 1, total: product.price }
            delete productToCart.qtyStock
            setProductsInCart([...productsInCart, productToCart])
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...productsInCart].filter(product => product.id !== id)
        setProductsInCart(newCart)
    }

    const increaseQuantity = (id) => {
        const matchIndex = productsInCart.findIndex(element => id === element.id)
        const newCart = [...productsInCart]
        const newQuantity = productsInCart[matchIndex].quantity += 1
        const newTotal = Number((productsInCart[matchIndex].price * newQuantity).toFixed(2))

        newCart[matchIndex].quantity = newQuantity
        newCart[matchIndex].total = newTotal

        setProductsInCart(newCart)
    }

    const decreaseQuantity = (id) => {
        const matchIndex = productsInCart.findIndex(element => id === element.id)
        const newCart = [...productsInCart]
        const newQuantity = productsInCart[matchIndex].quantity -= 1
        const newTotal = Number((productsInCart[matchIndex].price * newQuantity).toFixed(2))

        if (newQuantity <= 0) {

            removeFromCart(id)

        } else {

            newCart[matchIndex].quantity = newQuantity
            newCart[matchIndex].total = newTotal

            setProductsInCart(newCart)
        }
    }

    const sendOrder = () => {
        const products = productsInCart.map(product => {
            return {
                id: product.id,
                quantity: product.quantity
            }
        })

        const order = {
            costumerName: form.costumerName,
            deliveryDate: form.deliveryDate,
            products: products
        }

        axios
            .post(`${baseURL}/orders/create`, order)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: res.data,
                    showConfirmButton: false,
                    timer: 2000
                })
                clear()
                setProductsInCart([])
                getProductsFromStock()
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'OOOPS...',
                    text: err.response.data.message,
                    showConfirmButton: true,
                    confirmButtonColor: '#D73743'
                })
            })
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
                    id={product.id}
                    name={product.name}
                    quantity={product.quantity}
                    price={product.price}
                    total={product.total}
                    removeFromCart={removeFromCart}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                />
            )
        })
    }

    const cartTotal = productsInCart.reduce((a, b) => {
        return a + b.total
    }, 0)

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
                <CartContainer>
                    <Cart>
                        <CartTitle>Carrinho</CartTitle>
                        <CartList>
                            {renderCartItems()}
                        </CartList>
                        <CartTotal>Total: R$ {cartTotal.toFixed(2)}</CartTotal>
                    </Cart>
                    <PlaceOrder onClick={sendOrder}>Finalizar pedido</PlaceOrder>
                </CartContainer>
            </DataContainer>


        </Container>
    )
}

export default MainPage