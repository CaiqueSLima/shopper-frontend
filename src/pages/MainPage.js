import { useEffect, useState } from "react"
import axios from "axios"
// import Card from "../components/Card/Card"
import Header from "../components/Header/Header"
import { Container, FormContainer, ProductsList } from "./styles"
import { baseURL } from "../constants/baseURL"
import useForm from "../hooks/useForm"

function MainPage() {

    const [products, setProducts] = useState([])
    const [productsOnCart, setProductsOnCart] = useState([])
    const [form, onChange, clear] = useForm({
        costumerName: '',
        deliveryDate: ''
    })

    // useEffect(() => {
    //     getProductsFromStock()
    // }, [])

    // const getProductsFromStock = () => {
    //     axios.get(`${baseURL}`).then(res => {
    //         setProducts(res.data.products)
    //     })
    // }



    // const renderProductsList = () => {
    //     return products?.map((product) => {
    //         return (
    //             <Card
    //                 key={product.id}
    //                 product={product}
    //                 addToCart={setProductsOnCart}
    //             />
    //         )
    //     })
    // }

    console.log(form)

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
            <ProductsList>
                <h1>Nossos produtos</h1>
                {/* {renderProductsList()} */}
            </ProductsList>

        </Container>
    )
}

export default MainPage