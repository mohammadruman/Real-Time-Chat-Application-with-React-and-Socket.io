import React, { useState } from "react";
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,Button } from '@chakra-ui/react';
const Signup = () => {
    const [Show, setShow] = useState(false)
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    const handleClick =() => setShow(!Show);

    const PostDetails= (pics)=>{};

    const submitHandler= ()=>{};
  return (
     <VStack spacing="5px">
    <FormControl id="first-name" isRequired>
        <FormLabel> Name </FormLabel>
            <Input placeholder="Enter Your Name"
            onChange={ (e) => setName(e.target.value)}
           />
      
    </FormControl>
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

{/* For Confirm Password */}
 <FormControl id="Password" isRequired>
        <FormLabel> Confirm Password </FormLabel>
        <InputGroup>
          <Input 
            type={Show ? "Text" :"password"}
            placeholder="Enter Your Password"
            onChange={ (e) => setConfirmPassword(e.target.value)}

           />
           <InputRightElement width="4.5rem" >
            <button h="1.75rem" size = "sm" onClick={handleClick} >
                {Show?"Hide" :"Show"}
            </button>
           </InputRightElement>
        </InputGroup>
    
    </FormControl>

{/* For Pic Upload */}
 <FormControl id="pic" isRequired>
        <FormLabel> Upload Your Pic</FormLabel>
            <Input 
            type="file"
            p={1.5}
            accept="image/*"
            onChange={ (e) => PostDetails(e.target.files[0])}
           />     
    </FormControl>
    <Button
    colorScheme="blue"
    width="100%"
    style={{marginTop:15}}
    onClick={submitHandler}
    >
        Signup
    </Button>
   </VStack>
  );
};

export default Signup;