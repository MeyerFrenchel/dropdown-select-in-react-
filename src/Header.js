import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown';
const Header = ({data}) => {
    return (
        <header>
      {
        data.map((dat) => (
          <div>
          <Link to={dat.name}>
              this is the {dat.name} component
          </Link>
          <Dropdown data={dat}/>
          
          </div>
    ))
      }
    </header>
    )
}

export default Header
