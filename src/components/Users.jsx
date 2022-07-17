import React, { useEffect, useState } from "react";
import { Table, Space, Button, Image } from "antd";
import { useStore } from "../useStore";
import Api from "../services/Api";
import AddUserForm from "./AddUserForm";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
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
        return (
          <Image
            width="64px"
            height="64px"
            className="userImg"
            src={record.avatar}
          />
        );
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
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    let loading = true;
    Api.getUsers().then((items) => {
      if (loading) {
        setUsers(items);
      }
    });
    return () => (loading = false);
  }, []);

  return (
    <>
      <div>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          New User
        </Button>
        <AddUserForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
      <Table dataSource={users} columns={columns} />
    </>
  );
};

export default Users;
