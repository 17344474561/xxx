import React, { Component } from 'react';
import { Pagination } from 'antd';
import { connect } from "react-redux"
import { pagetData } from "@/action/getAction"
import "./style.less"

export default @connect(
    (state) =>({
        list:state.getReducer.datas,
        total:state.getReducer.total
    }),
    {
        pagetData
    }
)
class Sample extends Component {
    componentDidMount(){
        this.props.pagetData({page: 1, limit: 6})
    }

    onChange = current => {
        this.props.pagetData({page: current, limit: 6})
    }

    render() {
        let { list , total} = this.props
        return (
            <div className="Sample">
                <div className="SampleList">
                {
                    list.map((v,i)=>{
                       return <div className="SampleBoy" key={v.id}>
                                <p>
                                    <span className="Sampletit">
                                        Had denoting properly jointure<br/> 
                                        which well books beyond
                                    </span><br/>
                                    <span className="Sampletit2">in said to of poor full be post face snug. <br/>
                                        introduced imprudece see say unpleasing <br/>
                                        devonshire acceptance son. Exeter loger...
                                    </span>
                                </p>
                                <p>
                                    <span className="SampleName">{v.title}</span> <br/>
                                    <span>{v.tags}</span>
                                </p>
                             </div>
                    })
                }
                </div>
                <Pagination 
                    defaultCurrent={1} 
                    total={total}
                    onChange={this.onChange}     
                />
                
            </div>
        );
    }
}
