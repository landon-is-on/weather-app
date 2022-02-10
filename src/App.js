import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "./components/redux/slices/weatherSlices";
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import SearchBar from './components/header/index'
import TableList from "./components/table/table";
import ModalButton from './components/modal/modal'

const { Header, Footer, Sider, Content } = Layout;

/* APP IS MADE HERE*/ 
function App()  {
  const [city,setCity] =useState('chicago')
  const dispatch = useDispatch();
const state = useSelector(state => state);
const {weather, loading,error} = state;


  return (
  <Layout>  
    <SearchBar  style={{ width: 300 }} 
    onClick={() => dispatch(fetchWeatherAction(city))} 
    value={city} 
    onChange={e => setCity(e.target.value)}
     > </SearchBar>

    <TableList >
  
     </TableList>
            
  </Layout>
          )
        };

export default App;
