import React, { useEffect, useState } from "react";
import { Table, Space, Button, Image, message, Modal, Input } from "antd";
import { useStore } from "../useStore";
import Api from "../services/Api";
import AddArticleForm from "./AddArticleForm";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState([]);

  const [refresh, setRefresh] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const onCreate = (values) => {
    Api.addArticle({
      name: values.name,
      description: values.description,
    }).then((data) => {
      message.success("Added book with id " + data.id);
      setVisible(false);
      setRefresh(true);
    });
  };

  const onDelete = (id, e) => {
    e.preventDefault();
    Api.deleteArticle(id).then((data) => {
      message.success("Deleted book with id " + data.id);
      setRefresh(true);
    });
  };

  const onEdit = (item, e) => {
    e.preventDefault();
    setIsEditing(true);
    setEditingArticle({ ...item });
    /*  Api.editArticle(item).then((data) => {
      message.success("Updated book with id " + data.id);
      setRefresh(true);
    });*/
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
          <Button
            onClick={(e) => {
              onEdit(record.id, e);
            }}
          >
            Edit
          </Button>
          <Button
            onClick={(e) => {
              onDelete(record.id, e);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    let loading = true;
    Api.getArticles().then((items) => {
      if (loading) {
        setArticles(items);
        setRefresh(false);
      }
    });
    return () => (loading = false);
  }, [refresh]);

  return (
    <>
      <div>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          New Book
        </Button>
        <Modal
          title="edit"
          visible={isEditing}
          onCreate={isEditing}
          onCancel={() => {
            setIsEditing(false);
          }}
          onOk={() => {
            setIsEditing(false);
          }}
        >
          <Input value={editingArticle?.id}></Input>
        </Modal>
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
