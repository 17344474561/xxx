import React, { Component } from 'react';
import { Table , Button } from 'antd';
import { connect } from 'react-redux'

const columns = [
    {
      title: 'First Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Price',
      dataIndex: 'msg',
      key: 'msg',
    },
    {
      title: 'Deadline',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
          <p>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </p>
      ),
    },
  ];

export default @connect(
  (state) =>{
    return {
      list:state.getReducer.data
    }
  }
)
class Tables extends Component {
    add = () =>{
      this.props.history.push("/home/forms")
    }
    render() {
      let { list } = this.props
        return (
            <div className="Tables">
              <p>Striped Table</p>
              <p><span> Add class</span>  <span>.table-stried</span><Button onClick={this.add}>Add User</Button></p>
              <Table columns={columns} dataSource={list} rowKey="id"/>
            </div>
        );
    }
}
