import styled from "styled-components"

export const Container = styled.div``
export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  padding: 40px;
  width: 80%;
  margin: 0 auto;
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