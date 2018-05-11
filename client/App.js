import React, {Component}  from 'react';
import Main from './routes'
import NavBar from '../client/store/components/NavigatorBar'




class App extends Component{
     render(){
        return(
       <div className='container'>
          <NavBar/>
          <Main/>
       </div>
  
  )
}
} ;
export default App
