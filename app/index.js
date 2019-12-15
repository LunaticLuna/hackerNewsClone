import React from 'react'
import ReactDom from 'react-dom'
import Top from './components/Top'
import './index.css'

class App extends React.Component{
  render(){
    return (
      <Top />
      )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)