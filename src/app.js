import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Winterfell from 'winterfell';
import schema from './schema';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Hi WinterFell!</h1>
        <Winterfell schema={schema} />
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById("app"))
