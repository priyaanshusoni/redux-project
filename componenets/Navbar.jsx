import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import store from '../store/store';
function Navbar() {

  const cartProducts = useSelector(state => state.cart) // provide which slice you want to read state from
  return (
    <Menu mode="horizontal" theme="dark" style={{ padding: '0 50px' }}>
      <Menu.Item key="home" icon={<HomeOutlined />}>

        <Link to={'/'}>
        Home
        </Link>
      
      </Menu.Item>
      <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
      <Link to={'/cart'}>
        Cart{' '}{cartProducts.length}
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;

