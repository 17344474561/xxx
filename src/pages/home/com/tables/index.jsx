import React, { Component } from 'react';
import { Table , Button } from 'antd';
import { connect } from 'react-redux';
import { getData } from "@/action/getAction";
import { UserData } from "@/api/index";


export default @connect(
  (state) =>{
    return {
      data:state.getReducer.data
    }
  },{
    getData
  }
)
class Tables extends Component {
    state = {
      arr: []
    }
    columns = [
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
          )
        },
    ];
    componentDidMount(){
      UserData().then (res => {
          this.props.getData(res.data.users)
        })
    }
    //添加 
    add = () =>{
      this.props.history.push("/home/forms")
    }

    render() {
      let { data } = this.props
        return (
            <div className="Tables">
              <p>Striped Table</p>
              <p><span> Add class</span>  <span> .table-stried </span><Button onClick={this.add}>Add User</Button></p>
              <Table columns={this.columns} dataSource={data} rowKey="id"/>
            </div>
        );
    }
}
