import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import '../table/table.css';
import { Table, Space } from "antd";
import ModalButton from '../modal/modal';

const columns = [
  // Column 1
  {
    title: "Name",
    dataIndex: "name",
    key: "City"
  },

  // Column 4
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        {/* This is the button */}
        <ModalButton/>
      </Space>
    )
  }
];

const data = [

  {
    key: "1",
    name: "New York"
  }

];
const TableList = () => {
return(
  <div className="table"> 
  <Table columns={columns} dataSource={data} />,
  </div>
)
}
export default TableList;