import React from "react";
import { Input,Space } from 'antd';
import 'antd/dist/antd.min.css';
import '../header/SearchBar.css'

const { Search } = Input;

const onSearch = value => console.log(value);


const SearchBar = () => {
  return (
    <> 
    <div className="space-align-block"> 
    <h1 className="weather-title">Whats the weather?</h1>
    <Search 
    style={{ width: 300 }} 
    
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
