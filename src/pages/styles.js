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

  @media screen and (min-width: 1440px) {
    max-width: 80%;
    margin: 0 auto;
  }
`

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;

  > h1 {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1280px) {
    max-width: 50%
  }
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`

export const Cart = styled.div`
  position: sticky;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  top: 25px;
  padding: 15px;
  margin: 105px 35px 0 0;
  height: 800px;
  width: 100%;
  max-width: 550px;
  border-radius: 5px;
  border: 1px solid black;

  @media screen and (max-height: 720px) {
    max-height: 550px
  }
`

export const CartTitle = styled.h3`
  text-align: center;
  padding: 10px;
`

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  min-height: 90%;

  @media screen and (max-height: 720px) {
    min-height: 85%;
  }
`

export const CartTotal = styled.div`
  text-align: end;
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  padding: 10px;
`

export const PlaceOrder = styled.button`
  border: none;
  margin: 15px;
  padding: 10px;
  position: sticky;
  top: 840px;
  background-color: #2DA77A;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    color: #2DA77A;
    background-color: white;
    box-shadow: 2px 2px 2px lightgray;
  }

  @media screen and (max-width: 1280px) and (max-height: 720px) {
    top: 600px;
  }
`