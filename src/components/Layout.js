import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Footer from '../components/Footer'

const SpecialModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  background: hsla(0, 0%, 100%, 0.96);
`

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <ModalProvider backgroundComponent={SpecialModalBackground}>
          <>
            <div className="siteContent">{children}</div>
            <Footer />
          </>
        </ModalProvider>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  )
}

export default Template
