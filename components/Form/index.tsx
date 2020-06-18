import React, { FunctionComponent }  from 'react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';

import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { ButtonForm, Block, Backdrop, ContainerForm, BlockButton } from '../../styled/components/form';

interface OwnInterface {
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

type FormTypes = OwnInterface;

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
                </label>
                <BlockButton>
                    <ButtonForm type="button" onClick={handlerClick}>
                        Cancel
                    </ButtonForm>
                    <ButtonForm type="submit">
                        Submit
                    </ButtonForm>
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
