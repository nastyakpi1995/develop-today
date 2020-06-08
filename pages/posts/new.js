import React from 'react';

import { FormBlog } from '../../components';
import { Content } from '../../styled/pages/pages';
import {connect} from "react-redux";
import * as actions from "../../redux/actions";

const initialValues = {
    title: '',
    body: '',
};

const Blog = ({ requestPostCreate }) => {
    return (
        <Content>
            <FormBlog
                initialValues={initialValues}
                onHandlerClick={requestPostCreate}
            />
        </Content>
    );
}

export default connect(null, actions)(Blog);
