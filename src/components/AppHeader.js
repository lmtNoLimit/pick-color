import React, { useState } from "react";
import { Menu, Layout } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  const [current, setCurrent] = useState("home");
  const handleChangeMenuItem = e => {
    setCurrent(e.key);
  };

  return (
    <Header className='flex justify-between bg-white z-50'>
      <h1 className='text-xl font-bold'>LOGO</h1>
      <Menu
        onClick={handleChangeMenuItem}
        selectedKeys={[current]}
        mode='horizontal'
      >
        <Menu.Item className='text-black font-semibold' key='home'>
          Home
        </Menu.Item>
        <Menu.Item className='text-black font-semibold' key='about'>
          About Us
        </Menu.Item>
        <Menu.Item className='text-black font-semibold' key='contact'>
          Contact Us
        </Menu.Item>
        <Menu.Item className='text-black font-semibold' key='faq'>
          FaQs
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
