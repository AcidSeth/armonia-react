import React, {useEffect, useState} from 'react';
import { Table, Space, Button } from "antd"
import {useStore} from "../useStore"
import Api from "../services/Api"

const Users = () => {
  const [users, setUsers] = useState([]);

  const columns = [
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
        },
        {
          title: '',
          dataIndex: 'avatar',
          key: 'avatar',
            render: (text, record) => {
              return (
                <img className='userImg' src={record.avatar}/>
              );},
            }, 
        {
          title: "First Name",
          dataIndex: "name",
          key: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
          sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button>Delete</Button>
            </Space>
          ),
        },    
      ];

   useEffect(() => {
    let loading = true;
    Api.getUsers()
     .then(items => {
       if(loading) {
         setUsers(items)
       }
     })
   return () => loading = false;
 }, [])

  return(
    <>
    <Table dataSource={users} columns={columns} />
    </>
  )
}

export default Users;