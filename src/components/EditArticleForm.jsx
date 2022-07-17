import React, { useEffect, useState } from "react";

import { Space, Button, Image, message, Modal, Input } from "antd";

const EditArticleForm = () => {
    const [editingArticle, setEditingArticle] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

  return (
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
      <Input value={editingArticle?.name}></Input>
    </Modal>
  );
};

export default EditArticleForm;
