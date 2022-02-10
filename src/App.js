import React from "react";
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import SearchBar from './components/header/index'
const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  
  <Layout> 
 
    <SearchBar   />
  </Layout>
  
);

export default App;
