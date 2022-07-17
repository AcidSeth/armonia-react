import React, { useContext, useEffect, useRef, useState } from "react";
import "../index.css";
import { Button, Form, Input, Popconfirm, Table, Modal, Radio } from "antd";

const AddArticleForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Add a new article"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the title of the article!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="picture" label="Image URL">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="article-create-form_last-form-item"
        ></Form.Item>
      </Form>
    </Modal>
  );
};

export default AddArticleForm;
