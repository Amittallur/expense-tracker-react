import React from 'react';
import { Card, CardBody, CardHeader, Input } from '@nextui-org/react';

const Login = () => {
  return (
    <div className=' flex justify-center items-center h-screen '>
      <Card className='p-8 max-w-[400px] w-full'>
        <CardHeader className='flex justify-center text-2xl '>Log in</CardHeader>
        <CardBody>
          <Input
            type="email"
            label="Email"
            variant="bordered"
            // isInvalid={true}
            // errorMessage="Please enter a valid email"
          />

        </CardBody>
      </Card>
    </div>
  )
}

export default Login