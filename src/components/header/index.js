import React from "react";
import { Input } from 'antd';
import 'antd/dist/antd.min.css';
import '../header/SearchBar.css'
import { fetchWeatherAction } from "../redux/slices/weatherSlices";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const { Search } = Input;
const onSearch = value => console.log(value);

/* SEARCH BAR COMPONET*/
const SearchBar = () => {
  const [city,setCity] =useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction(""))
  }, []);
  
  const state = useSelector(state => state);
  
  return (
  /* SEARCH BAR */
    <> 
    <div className="space-align-block"> 
    <h1 className="weather-title">What is the weather?</h1>
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
