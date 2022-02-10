import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchWeatherAction } from "./components/redux/slices/weatherSlices";

import 'antd/dist/antd.min.css';

import { Layout } from 'antd';
import SearchBar from './components/header/index'
import TableList from "./components/table/table";

const { Header, Footer, Sider, Content } = Layout;



function App()  {
  
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction("new York"))
  }, []);

const state = useSelector(state => state);
const {weather, loading,error} = state;

  return (
  <Layout> 
 
    <SearchBar   />
    <TableList/>
  </Layout>
  )
};

export default App;
