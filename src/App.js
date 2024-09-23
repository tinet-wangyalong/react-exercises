import './App.less';
import React  from 'react'
import { BrowserRouter, useHistory   } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { KeepaliveRouterSwitch } from 'react-keepalive-router'
import JSX from './page/jsx'
const menusList = [
  {
    name: '2_认识Jsx',
    path: '/jsx',
    component:JSX
  },
]

function Meuns(){
  const history = useHistory()
   return <div className="theStyle" >
   {menusList.map(item=><span className="routerLink"
       key={item.path}
       onClick={()=> {  history.push(item.path) }}
                        >{item.name}</span>)}
  </div>
}

export default  class Index extends React.Component{
  state={
    Number:1
  }
  node = null
  componentDidMount(){
    // console.log(this.node)
    // console.log(this)
    console.log(this)
  }

  render(){
    return <div ref={(node) => this.node = node} >
      <div >
          <BrowserRouter>
            <Meuns/>
            <div style={{ paddingTop:'50px' }} >
              <KeepaliveRouterSwitch withoutRoute >
                  {renderRoutes(menusList)}
              </KeepaliveRouterSwitch>
            </div>
          </BrowserRouter>
      </div>
  </div>
  }
}
