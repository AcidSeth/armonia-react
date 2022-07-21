import React, { useEffect, useState } from "react";
import { Table, Space, Button, Image, message, Modal, Input, Form } from "antd";
import { BookOutlined } from "@ant-design/icons";
import Api from "../services/Api";
import AddUserForm from "./AddUserForm";
import { triggerFocus } from "antd/lib/input/Input";
// import { useStore } from "../useStore";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const [refresh, setRefresh] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const onCreate = (values) => {
    Api.addUser({
      name: values.name,
      id: values.id,
      birthdate: values.birthdate,
      avatar: values.avatar,
      articleIds: values.articleIds,
    }).then((data) => {
      message.success("Added book with id " + data.id);
      setVisible(false);
      setRefresh(true);
    });
  };

  const onDelete = (id, e) => {
    Modal.confirm({
      title: "Delete this user?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        Api.deleteUser(id).then((data) => {
          message.success("Deleted user with id " + data.id);
          setRefresh(true);
        });
      },
    });
  };

  const onEdit = (record) => {
    setIsEditing(true);
    setEditingUser({ ...record });
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
            className="userImg"
            src={record.avatar}
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
    Api.getUsers().then((items) => {
      if (loading) {
        setUsers(items);
        setRefresh(false);
      }
    });
    return () => (loading = false);
  }, [refresh]);

  const onFinish = (values) => {
    Api.editUser(editingUser).then((data) => {
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
                value={editingUser?.name}
                onChange={(e) => {
                  setEditingUser((prev) => {
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
                value={editingUser?.id}
                onChange={(e) => {
                  setEditingUser((prev) => {
                    return { ...prev, id: e.target.value };
                  });
                }}
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={editingUser?.articlesIds}
                onChange={(e) => {
                  setEditingUser((prev) => {
                    return { ...prev, articlesIds: [e.target.value] };
                  });
                }}
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={editingUser?.birthdate}
                onChange={(e) => {
                  setEditingUser((prev) => {
                    return { ...prev, birthdate: e.target.value };
                  });
                }}
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={editingUser?.avatar}
                onChange={(e) => {
                  setEditingUser((prev) => {
                    return { ...prev, avatar: e.target.value };
                  });
                }}
              />
            </Form.Item>
          </Form>
        </Modal>

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
