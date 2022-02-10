import React from "react";
import { Input,Space } from 'antd';
import 'antd/dist/antd.min.css';
import '../header/SearchBar.css'
import { fetchWeatherAction } from "../redux/slices/weatherSlices";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const { Search } = Input;
const onSearch = value => console.log(value);


const SearchBar = () => {
  const [city,setCity] =useState('chicago')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction("new York"))
  }, []);

const state = useSelector(state => state);
const {weather, loading,error} = state;
  
  return (
    <> 
    <div className="space-align-block"> 
    <h1 className="weather-title">Whats the weather?</h1>
    <Search 
    style={{ width: 300 }} 
    onClick={() => dispatch(fetchWeatherAction(city))} 
    value={city} 
    onChange={e => setCity(e.target.value)}
    placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    </div>
    </>
  )
}

export default SearchBar;
