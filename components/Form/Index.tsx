import React, { FunctionComponent }  from 'react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';

import ErrorMessage from './Error';
import { Button, BlockInput, Backdrop, ContainerForm } from '../../styled/components/form';

interface ownInterface {
  onHandlerClick: Function,
  initialValues: {
      title: string,
      body: string
  }
  id?: number,
    setIsShowModal: Function,
    isShowModal: boolean
}

type FormTypes = ownInterface;

const FormBlog: FunctionComponent<FormTypes> = ({
  onHandlerClick, initialValues, id, setIsShowModal, isShowModal
}) => {
  const history = useRouter();

    const handlerClick = () => {
        setIsShowModal(false);
        history.push('/');
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
              history.push('/');
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
                <BlockInput>
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
                </BlockInput>
                  <Button type="button" onClick={() => history.push('/')}>
                    Cansel
                  </Button>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>}
        </Formik>
        </ContainerForm>
    </>
    );
}

export default FormBlog;
