import React from 'react';

import { ParticlesSlider, PostsList} from '../../components';
import { Body, Content } from '../../styled/pages/pages';
import { connect } from "react-redux";
import * as actions from "../../redux/actions";


const Blog = ({ setIsShowModal }) => {
    setIsShowModal(true);

    return (
        <Content>
            <Body>
                <ParticlesSlider/>
            </Body>
            <PostsList/>
        </Content>
    );
}

export default connect(null, actions)(Blog);
