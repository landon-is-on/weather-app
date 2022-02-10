import React from "react";
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import SearchBar from './components/header/index'
import TableList from "./components/table/table";

const { Header, Footer, Sider, Content } = Layout;
const App = () => (
  
  <Layout> 
 
    <SearchBar   />
    <TableList/>
  </Layout>
  
);

export default App;
