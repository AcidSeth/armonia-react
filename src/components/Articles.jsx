import React, { useEffect, useState } from "react";
import { Table, Space, Button, Image } from "antd";
import { useStore } from "../useStore";
import Api from "../services/Api";
import AddArticleForm from "./AddArticleForm";

const Articles = () => {
  const [articles, setArticles] = useState([]);

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
      dataIndex: "picture",
      key: "picture",
      render: (text, record) => {
        return (
          <Image
            height="84px"
            width="64px"
            className="articleImg"
            src={record.picture}
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
    Api.getArticles().then((items) => {
      if (loading) {
        setArticles(items);
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
          New Collection
        </Button>
        <AddArticleForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
      <Table dataSource={articles} columns={columns} />
    </>
  );
};

export default Articles;
