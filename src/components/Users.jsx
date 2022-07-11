import React from 'react';
import { Table, Space, Button } from "antd"
import {useStore} from "../useStore"
import { useEffect, useCallback } from "react"


function Users() {
    const users = useStore(useCallback(state => state.users, []))
    const loading = useStore(state => state.loading)
    const fetchUsers = useStore(state => state.fetchUsers)

    const removeUser = useStore(state => state.removeUser)
    const onDelete = (id, e) => {
        e.preventDefault();
        removeUser(id)
    }
    
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
                <img src={record.avatar}/>
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
              <Button onClick={(e) => {onDelete(record.id, e)}}>Delete</Button>
            </Space>
          ),
        },    
      ];

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])
    
    return (
      <>
        <h2>Users</h2>
        {loading && 'loading Users . . .'}
        <Table dataSource={users} columns={columns} />
      </>)
   }
export default Users;
