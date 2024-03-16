import React, { useState } from "react";
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,Button } from '@chakra-ui/react';

const Login = () => {
    const [Show, setShow] = useState(false)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick =() => setShow(!Show);

    const submitHandler= ()=>{};
  return (
     <VStack spacing="5px">
   
{/* for email */}
  <FormControl id="email" isRequired>
        <FormLabel> Email </FormLabel>
            <Input placeholder="Enter Your Email"
            onChange={ (e) => setEmail(e.target.value)}
           />
      
    </FormControl>
{/* For password */}
  <FormControl id="Password" isRequired>
        <FormLabel> Password </FormLabel>
        <InputGroup>
          <Input 
            type={Show ? "Text" :"password"}
            placeholder="Enter Your Password"
            onChange={ (e) => setPassword(e.target.value)}
           />
           <InputRightElement width="4.5rem" >
            <button h="1.75rem" size = "sm" onClick={handleClick} >
                {Show?"Hide" :"Show"}
            </button>
           </InputRightElement>
        </InputGroup>     
    </FormControl>

    <Button
    colorScheme="blue"
    width="100%"
    style={{marginTop:15}}
    onClick={submitHandler}
    >
        Signup
    </Button>
{/* Guest User Credential */}
<Button
    colorScheme="red"
    width="100%"
    style={{marginTop:15}}
    onClick={submitHandler}
    >
        Guest User Credential
    </Button>
   </VStack>
  );
};

export default Login;