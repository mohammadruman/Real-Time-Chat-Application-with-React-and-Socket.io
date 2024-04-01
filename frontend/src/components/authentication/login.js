import React, { useState } from "react";
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,Button } from '@chakra-ui/react';
import { useToast } from "@chakra-ui/react"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { set } from "mongoose";

const Login = () => {
    const [Show, setShow] = useState(false)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const history = useHistory();
    const handleClick =() => setShow(!Show);
    
    const submitHandler= async()=>{
      setLoading(true);
      if(!email || !password){
        toast({
          title: "Please fill all the fields",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
      }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };
    
  return (
     <VStack spacing="5px">
   
{/* for email */}
  <FormControl id="email" isRequired>
        <FormLabel> Email </FormLabel>
            <Input placeholder="Enter Your Email"
               value={email}
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
             value={password}
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
    isLoading={loading}
    >
        Signup
    </Button>
{/* Guest User Credential */}
 <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
   </VStack>
  );
};

export default Login;