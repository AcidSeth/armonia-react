import React, { useEffect, useState } from "react";
import { Table, Button, Space, Image } from "antd";
import { AppstoreAddOutlined, FileImageOutlined } from "@ant-design/icons";
import Api from "../services/Api";

const Admin = () => {
  const [nestedData, setNestedData] = useState({});
  const [isLoading, setIsLoading] = useState({});

  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);

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
        return <Image width="64px" className="userImg" src={record.avatar} />;
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

  useEffect(() => {
    let loading = true;
    Api.getArticles().then((items) => {
      if (loading) {
        setArticles(items);
      }
    });
    return () => (loading = false);
  }, []);

  const expandedRowRender = (record) => {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "",
        dataIndex: "picture",
        key: "picture",
        render: (text, record) => {
          if (record?.picture === undefined) {
            return <FileImageOutlined />;
          } else
            return (
              <Image
                width="84px"
                height="64px"
                className="articleImg"
                src={record.picture}
              />
            );
        },
      },
      {
        title: "Book Title",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
        sortDirections: ["ascend", "descend", "ascend"],
      },
    ];

    const data = nestedData[record.id];

    return (
      <Table
        loading={isLoading[record.id] && !data}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  };

  const handleExpand = (expanded, record) => {
    let articlesData = [];
    articlesData = record.articlesIds.map((element) => {
      let article = articles.filter((x) => x.id == element);
      return article[0];
    });
    // console.log(articlesData)
    setIsLoading({
      [record.id]: true,
    });
    setNestedData((state) => ({
      ...state,
      [record.id]: articlesData,
    }));
    setIsLoading({
      [record.id]: false,
    });
  };

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandedRowRender={expandedRowRender}
      onExpand={handleExpand}
      dataSource={users}
    />
  );
};

export default Admin;
