import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import themes from '../../styles/themes'
import { ModalProvider, BaseModalBackground } from 'styled-react-modal'
import Helmet from 'react-helmet'
import GlobalStyle from '../../styles/global'
import config from '../../utils/siteConfig'
import Footer from '../Footer'
import Hero from '../Hero'

const SpecialModalBackground = styled(BaseModalBackground)`
  background: hsla(0, 0%, 20%, 0.94);
`

class Template extends Component {
  state = {
    isLight: true,
    theme: themes.lightTheme,
    title: 'Dark Theme',
  }

  handleScrollIntoView = () => {
    const el = document.getElementById('filterBar')
    const target = el.getBoundingClientRect().top
    const endPosition = target + window.scrollY

    return window.scrollTo({
      top: endPosition,
      left: 0,
      behavior: 'smooth',
    })
  }

  handleClick = () => {
    const { lightTheme, darkTheme } = themes
    const isLight = !this.state.isLight

    this.setState({
      isLight: isLight,
      theme: isLight ? lightTheme : darkTheme,
      title: isLight ? 'Dark Theme' : 'Light Theme',
    })
  }

  render() {
    const { isLight, title } = this.state

    return (
      <div className="siteRoot">
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" />
        </Helmet>

        <ThemeProvider theme={this.state.theme}>
          <ModalProvider
            backgroundComponent={SpecialModalBackground}
            backgroundProps={isLight}
          >
            <Hero
              handleScrollIntoView={this.handleScrollIntoView}
              handleClick={this.handleClick}
              title={title}
              isLight={isLight}
            />
            <div className="siteContent">{this.props.children}</div>
            <Footer isLight={isLight} />
          </ModalProvider>
        </ThemeProvider>
        <GlobalStyle />
      </div>
    )
  }
}

export default Template
