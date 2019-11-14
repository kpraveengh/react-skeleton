import React, { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap'

class BreadcrumbLayout extends React.Component<any,any> {
    constructor(props) {
        console.log(props,'-------')
        super(props);
        this.state = {}
    }

    render() {

        return (
            <Fragment>
                <Breadcrumb>
                {this.props.breadcrumbData.map(i => (
    <a href={i.link}>{i.name} /</a> 
                                    ))}
                   
                </Breadcrumb>
            </Fragment>
        )
    }
}


export default BreadcrumbLayout;