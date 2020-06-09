import React, { FunctionComponent } from 'react';
import { Img, ImgBox, Title, Section, Text, SectionBody } from '../../../styled/components/blogs/card';
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import Link from "next/link";
import Select from "./Select";

interface Interface {
    id: number,
    content: string,
    title: string,
    index: number,
    handlerConfirm: Function,
    setAction: Function,
    UPDATE_POST: string
}

type SectionTypes = Interface;

const SectionComponent: FunctionComponent<SectionTypes> = ({
   handlerConfirm, id, content, title, index, setAction, UPDATE_POST
}) => {
    return (
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
                  <Select setAction={setAction} index={index} handler={handlerConfirm} id={id} UPDATE_POST={UPDATE_POST} />
              </SectionBody>
              <Text>{content}</Text>
          </section>
      </Section>
    );
}

export default (
    connect(null, actions)(SectionComponent)
);

