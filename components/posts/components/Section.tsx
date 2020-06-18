import React, { FunctionComponent } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

import Link from "next/link";
import Select from "./Select";

import { Img, ImgBox, Title, Section, Text, SectionBody } from '../../../styled/components/blogs/card';

type SectionTypes = {
  id: number,
  content: string,
  title: string,
  index: number,
  setIdPost: Function
};

const SectionComponent: FunctionComponent<SectionTypes> = ({
  id, content, title, index, setIdPost
}) => (
  <Section theme={index}>
    <ImgBox>
      <Link href={`posts/${id}`}>
        <Img src="post.jpg" alt="company"/>
      </Link>
    </ImgBox>
    <section>
      <SectionBody>
        <Link href={`posts/${id}`}>
          <Title>{title}</Title>
        </Link>
          <Select id={id} setIdPost={setIdPost} index={index} />
      </SectionBody>
        <Text>{content}</Text>
    </section>
  </Section>
);


export default (
  connect(null, actions)(SectionComponent)
);
