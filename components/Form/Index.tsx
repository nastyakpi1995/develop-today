import React, { FunctionComponent }  from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';

import * as actions from '../../redux/actions';
import ErrorMessage from './Error';
import { Wrapper, ButtonSave, BlockInput } from '../../styled/components/form';
import { PostsData } from "../../redux/typeScript/types";

interface ownInterface {
  requestPostCreate: Function,
  postsData: PostsData[]
}

type FormTypes = ownInterface;

const FormBlog: FunctionComponent<FormTypes> = ({
  requestPostCreate, postsData
}) => {
  const history = useRouter();

  const initialValues = {
    title: '',
    body: '',
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: object) => {
          setTimeout(() => {
              requestPostCreate(values)
              history.push('/');
              }, 400);
        }}
        >
            {({
                  values,
                  errors,
                  touched,
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
                {touched.title && errors.title ? (
                <ErrorMessage text={errors.title} />
                ) : null}
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
                  {touched.body && errors.body && errors.body}
                    </label>
                </BlockInput>
                    <ButtonSave type="submit">
                        Submit
                    </ButtonSave>
                </Form>}
        </Formik>
    </Wrapper>
    );
}

interface ownInterface {
    sta: any
    getPost: {
      postsData: PostsData[],
    }
}

const mapStateToProps = (state: ownInterface) => ({
    postsData: state.getPost.postsData,
    sta: state.getPost
})

export default connect(mapStateToProps, actions)(FormBlog);
