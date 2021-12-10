import styled from "styled-components"

export const Container = styled.div`
  background-color: #F5F7F6;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  > label {
    margin: 15px;
    align-self: center;

    > input {
    margin-left: 5px;
    padding: 5px;
    width: 300px;
    }
  }
`

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  padding: 40px;
  /* width: 90%; */
  /* margin: 0 auto; */

  > h1 {
    margin-bottom: 20px;
  }
`
export const Cart = styled.div`
    position: sticky;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    top: 25px;
    padding: 15px;
    margin: 105px 35px 0 0;
    max-height: 650px;
    width: 40%;
    max-width: 500px;
    border-radius: 5px;
    border: 1px solid black;
    overflow: auto;
`

export const CartTitle = styled.h3`
  text-align: center;
`