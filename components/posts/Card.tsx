import React, {FunctionComponent, useState} from 'react';
import { CardWrapper, Img, Title, Button, Section } from '../../styled/components/blogs/card';
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import Link from "next/link";

interface Interface {
    id: number,
    content: string,
    title: string,
    requestPostDelete: Function
    index: number,
}

type CardTypes = Interface;

const Card: FunctionComponent<CardTypes> = ({
  id, content, title, requestPostDelete, index
}) => {
    const [ isdelete, setIsdelete ] = useState(false)

    const handlerConfirm = (e: boolean | number) => {
        const checkE: any = e === id ? true : e;

        if (e === id) {
            requestPostDelete(id)
            setIsdelete(false);
        }
        setIsdelete(checkE);
    }

  return (
    <CardWrapper theme={index}>
        {isdelete ? (
         <div>
            <Title>
               do you really want delete {title} ?
            </Title>
             <button onClick={() => handlerConfirm(id)}>Yes</button>
             <button onClick={() => handlerConfirm(false)}>No</button>
         </div>
        ) : (
        <Section theme={index}>
            <div>
            <Link href={`posts/${id}`}>
                <Img src="post.jpg" alt="company"/>
            </Link>
            </div>
          <section>
                <Link href={`posts/${id}`}>
                 <Title> {title}</Title>
                </Link>
              <Button type="button" onClick={() => handlerConfirm(true)}>
                  X
              </Button>
          <p>{content}</p>
          </section>
        </Section>
     )}
    </CardWrapper>
  );
}

export default (
    connect(null, actions)(Card)
);

