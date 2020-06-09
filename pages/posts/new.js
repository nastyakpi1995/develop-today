import React from 'react';

import { ParticlesSlider, PostsList} from '../../components';
import {Body, Content} from '../../styled/pages/pages';

const Blog = () => (
<Content>
    <Body>
        <ParticlesSlider/>
    </Body>
    <PostsList show={true}/>
</Content>
);

export default Blog;
