import React, { useEffect, useState } from "react";
import { Table, Space, Button, Image, message, Modal, Input, Form } from "antd";
import { BookOutlined } from "@ant-design/icons";
import Api from "../services/Api";
import AddArticleForm from "./AddArticleForm";
import { triggerFocus } from "antd/lib/input/Input";
// import { useStore } from "../useStore";

const { TextArea } = Input;

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);

  const [refresh, setRefresh] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const onCreate = (values) => {
    Api.addArticle({
      name: values.name,
      id: values.id,
      description: values.description,
      picture: values.picture,
    }).then((data) => {
      message.success("Added book with id " + data.id);
      setVisible(false);
      setRefresh(true);
    });
  };

  const onDelete = (id, e) => {
    Api.deleteArticle(id).then((data) => {
      message.success("Deleted book with id " + data.id);
      setRefresh(true);
    });
  };

  const onEdit = (record) => {
    setIsEditing(true);
    setEditingArticle({ ...record });
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
      title: "Book Title",
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
            onClick={() => {
              onEdit(record);
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

  const onFinish = (values) => {
    Api.editArticle(editingArticle).then((data) => {
      message.success("Updated book with id " + data.id);
      setIsEditing(false);
      setRefresh(true);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
          title="Edit Book"
          visible={isEditing}
          footer={[
            <Button form="myForm" key="submit" htmlType="submit">
              Submit
            </Button>,
          ]}
          onCreate={isEditing}
          onCancel={() => {
            setIsEditing(false);
          }}
          onOk={() => {
            setIsEditing(false);
          }}
        >
          <Form
            id="myForm"
            name="basic"
            layout="vertical"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item>
              <Input
                value={editingArticle?.name}
                onChange={(e) => {
                  setEditingArticle((prev) => {
                    return { ...prev, name: e.target.value };
                  });
                }}
                size="large"
                placeholder="Book title"
                prefix={<BookOutlined />}
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={editingArticle?.id}
                onChange={(e) => {
                  setEditingArticle((prev) => {
                    return { ...prev, id: e.target.value };
                  });
                }}
              />
            </Form.Item>
            <Form.Item>
              <TextArea
                rows={4}
                value={editingArticle?.description}
                onChange={(e) => {
                  setEditingArticle((prev) => {
                    return { ...prev, description: e.target.value };
                  });
                }}
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={editingArticle?.picture}
                onChange={(e) => {
                  setEditingArticle((prev) => {
                    return { ...prev, picture: e.target.value };
                  });
                }}
              />
            </Form.Item>
          </Form>
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
