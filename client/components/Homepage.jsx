import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { ThemeProvider } from 'styled-components'
import Button from './elements/Button'
import Div from './elements/Div'
import TitleArea from './elements/TitleArea'
import { getUserType } from '../actions/typeOfUser'

const theme = {
  primary: '#1B668C',
  secondary: '#5CB0D9',
  align: 'middle',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}

class Homepage extends React.Component {
  state = {
    userType: ''
  }

  // componentDidMount () {
  //   this.dispatch(userTypeSelected())
  // }

  handleClient = () => {
    // this.setState({
    //   userType: 'client'
    // }, () => {
    this.props.dispatch(getUserType('client'))
    // })
  }

  handleSponsor = () => {
    // this.setState({
    //   userType: 'sponsor'
    // }, () => {
    this.props.dispatch(getUserType('sponsor'))
    // })
  }
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <TitleArea />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ textAlign: 'center', fontSize: '20px' }}>If you think you are experiencing a mental health problem chat to someone who can help here.</div>
        <br />
        <Div>
          <br></br>
          <Link to='/topics' style={{ textDecoration: 'none' }}><Button color="primary" onClick={this.handleClient} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>I WANT TO GET HELP</Button></Link>

          <br></br>
          <Link to='/sponsor/topics' style={{ textDecoration: 'none' }}><Button color="secondary" onClick={this.handleSponsor} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>I WANT TO HELP</Button></Link>

          <div><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/></div>
          {/* <ChatRoom /> */}

        </Div>

        <Footer />
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    userType: state.userType
  }
}

export default connect(mapStateToProps)(Homepage)