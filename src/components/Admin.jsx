import React, {useState} from "react";
import { Button, Dropdown, Menu, Space, Table } from "antd";
import {
  DownOutlined,
  UserAddOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import AddUserForm from "./AddUserForm";
// import {useStore} from "../useStore"
// import { useEffect, useCallback } from "react"

const Admin = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  const expandedRowRender = () => {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "",
        dataIndex: "",
        key: "",
      },
      {
        title: "",
        dataIndex: "",
        key: "",
      },
      {
        title: "",
        dataIndex: "",
        key: "",
      },
      {
        title: "",
        dataIndex: "",
        key: "",
      },
      {
        title: "",
        dataIndex: "",
        key: "",
      },
      {
        title: "Action",
        key: "operation",
        render: (_, record) => (
          <Space size="middle">
            <Button>Edit</Button>
            <Button
            //   onClick={(e) => {onDelete(record.id, e)}}
            >
              Delete
            </Button>
          </Space>
        ),
      },
    ];
    const data = [];

    // id da "articleIds" dell'user attuale -> articles mappato in ogni riga di tabella innestata

    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        name: "AAAAAAAAAAAAA",
      });
    }

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "",
      dataIndex: "avatar",
      key: "avatar",
      render: (text, record) => {
        return <img className="userImg" src={record.avatar} />;
      },
    },
    {
      title: "First Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend", "ascend"],
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button>
            Add Book <AppstoreAddOutlined />
          </Button>
          <Button>Edit</Button>
          <Button
          //   onClick={(e) => {onDelete(record.id, e)}}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const data = [];

  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: "",
    });
  }

  return (
    <>
      <div>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          New Collection
        </Button>
        <AddUserForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
        dataSource={data}
      />
    </>
  );
};

export default Admin;
