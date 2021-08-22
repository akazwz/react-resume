import React from 'react';
import {Layout} from 'antd';
import '../App.less'
import './resume.less'

const {Header, Footer, Content} = Layout;


const Resume = () => {
    return (
        <Layout>
            <Header className="header">Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

export default Resume;
