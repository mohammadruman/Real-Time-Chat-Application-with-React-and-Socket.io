import React, { useState } from "react";
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Button } from '@chakra-ui/react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => setShowPassword(!showPassword);

    const submitHandler = () => {
        // Your submission logic here
    };

    return (
        <VStack spacing="5px">
            {/* Email */}
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            {/* Password */}
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {showPassword ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            {/* Submit Button */}
            <Button
                colorScheme="blue"
                width="100%"
                marginTop="15px"
                onClick={submitHandler}
            >
                Login
            </Button>
        </VStack>
    );
}

export default Login;
