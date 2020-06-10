import React, { FunctionComponent }  from 'react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';

import ErrorMessage from './Error';
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { Button, Block, Backdrop, ContainerForm, BlockButton } from '../../styled/components/form';

interface ownInterface {
  onHandlerClick: Function,
  initialValues: {
      title: string,
      body: string
  },
  setAction: Function
  id?: number,
  setIsShowModal: Function,
  isShowModal: boolean,
}

type FormTypes = ownInterface;

const FormBlog: FunctionComponent<FormTypes> = ({
  onHandlerClick, initialValues, id, setIsShowModal, isShowModal, setAction,
}) => {
  const history = useRouter();

    const handlerClick = () => {
        setIsShowModal(false);
        history.push('/').then(r => console.log(r));
        setAction('GET_POST');
    }
    return (
    <>
        {isShowModal && <Backdrop onClick={handlerClick}/>}
        <ContainerForm>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: object) => {

          setTimeout(() => {
              if (id) {
                  onHandlerClick(values, id)
              } else {
                  onHandlerClick(values)
              }
              handlerClick()
              }, 400);
        }}
        >
            {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  /* and other goodies */
              }) => <Form onSubmit={handleSubmit}>
                <Block>
                    <label>
                        title
                    <input
                        type="text"
                        name="title"
                        placeholder="Please Enter you title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                    />
                {!values.title && (
                <ErrorMessage text="Please Enter you title" />
                )}
                    </label>
                    <label>
                        body
                    <input
                        type="text"
                        name="body"
                        placeholder="Please Enter you body"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.body}
                    />
                  {!values.body && (
                      <ErrorMessage text="Please Enter you body" />
                  )}
                    </label>
                    <BlockButton>
                  <Button type="button" onClick={handlerClick}>
                    Cansel
                  </Button>
                    <Button type="submit">
                        Submit
                    </Button>
                    </BlockButton>
                </Block>
                </Form>
            }
        </Formik>
        </ContainerForm>
    </>
    );
}

const mapStateToProps = (state: any) => ({
    isShowModal: state.cardReducer.isShowModal
})

export default (
    connect(mapStateToProps, actions)(FormBlog)
);
