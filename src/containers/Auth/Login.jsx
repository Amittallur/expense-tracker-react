import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from '@nextui-org/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  return (
    <div className=' flex justify-center items-center h-screen '>
      <form onSubmit={formik.handleSubmit} className='w-96'>
        <Card className='p-8 max-w-[400px] w-full'>
          <CardHeader className='flex justify-center text-2xl '>Log in</CardHeader>
          <CardBody>
            <Input
              type="email"
              label="Email"
              
              values={formik.values.email}
              placeholder="Enter your email"
              {...formik.getFieldProps('email')}
              isInvalid={formik.touched.email && formik.errors.email}
              color={formik.touched.email && formik.errors.email ? "danger" : "success"}
              errorMessage={formik.errors.email}
              className='mb-4'
            />
            <Input
              type="password"
              label="Password"
           
              values={formik.values.password}
              placeholder="Enter your password"
              {...formik.getFieldProps('password')}
              isInvalid={formik.touched.password && formik.errors.password}
              color={formik.touched.password && formik.errors.password ? "danger" : "success"}
              errorMessage={formik.errors.password}

            />

          </CardBody>
          <CardFooter className='flex justify-center'>
            <Button type="submit"
              isLoading={formik.isSubmitting}
            color='primary'
            >Log in</Button>

          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default Login