import React, { Component } from 'react';
import { connect } from "react-redux"

import "./style.less"

export default @connect(
    (state) =>{
        return {
            list:state.getReducer.data
        }
        
    }
)
class Sample extends Component {
    render() {
        let { list } = this.props
        return (
            <div className="Sample">
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
                                        <span className="SampleName">{v.name}</span> <br/>
                                        <span>{v.age}</span>
                                    </p>
                             </div>
                  })
              }
            </div>
        );
    }
}
