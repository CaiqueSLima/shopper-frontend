import React from "react"

import Logo from "../../assets/og-logo.png"

import { GeneralContainer, BoxLogo } from "./styles"

const Header = () => {
  
    return (
      <GeneralContainer>
        <BoxLogo>
          <img src={Logo} alt='Logo Shopper.com.br' />
        </BoxLogo>
      </GeneralContainer>
    )
}

export default Header