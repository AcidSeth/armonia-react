import React from "react";
import { PageHeader } from "antd";
import { HomeFilled } from "@ant-design/icons";

const Header = () => {
  return (
    <PageHeader
      className="header"
      onBack={() => null}
      backIcon={<HomeFilled />}
      title="Armonia Book Library"
      subTitle="Manage users and their books"
    />
  );
};

export default Header;
