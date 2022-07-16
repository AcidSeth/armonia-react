import React, {useEffect, useState} from 'react';
import { Table, Space, Button } from "antd"
import {useStore} from "../useStore"
import { getArticles, setArticle, addArticle, delArticle} from "../requests"

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const columns = [
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
        },
        {
          title: '',
          dataIndex: 'picture',
          key: 'picture',
            render: (text, record) => {
              return (
                <img className='articleImg' src={record.picture}/>
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
    getArticles()
     .then(items => {
       if(loading) {
         setArticles(items)
       }
     })
   return () => loading = false;
 }, [])

  return(<>
    <form>
       <label>
         <p>New Item</p>
         <input type="text" />
       </label>
       <button type="submit">Submit</button>
     </form>
   <Table dataSource={articles} columns={columns} />
   </>
  )
}

export default Articles;