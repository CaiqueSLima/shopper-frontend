import styled from "styled-components"

// import { FaShoppingCart } from "react-icons/fa"

// Estilo do Header

export const GeneralContainer = styled.header`
  background-color: #2DA77A;
  display: flex;
  padding: 10px;
  justify-content: space-between;
`

export const BoxLogo = styled.div`
  align-items: center;
  display: flex;
  margin-left: 30px;
  > img {
    width: 150px;
  }
`

// export const Carrinho = styled(FaShoppingCart)`
//   font-size: 28px;
//   transition: transform 200ms ease;
//   @media screen and (max-width: 576px) {
//     font-size: 20px;
//   }
// `

// export const Button = styled.button`
//   background-color: #d73743;
//   border: none;
//   cursor: pointer;
//   margin-right: 30px;
//   &:hover ${Carrinho} {
//     transform: scale(1.2);
//   }
//   @media screen and (max-width: 576px) {
//     margin-right: 10px;
//   }
// `