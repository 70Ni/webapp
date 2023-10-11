import React from 'react'
import { Nav } from 'rsuite';


const Navbar = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 50 }}>
        <Nav.Item eventKey="home">
          Home
        </Nav.Item>
        <Nav.Item eventKey="news">News</Nav.Item>
        <Nav.Item eventKey="solutions">Solutions</Nav.Item>
        <Nav.Item eventKey="products">Products</Nav.Item>
        <Nav.Item eventKey="about">About</Nav.Item>
      </Nav>
    );
  };
function Navigation() {
    const [active, setActive] = React.useState('home');

  return (
    
    <div>
      <Navbar appearance="subtle" active={active} onSelect={setActive} />
    </div>
  )
}

export default Navigation