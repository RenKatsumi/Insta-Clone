import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignupwithEmailandPassword";


const SignUp = () => {

  const [inputs,setInputs] = useState(
    {
      fullname:'',
      username:'',
      email:'',
      password:'',  
    });

    const[showPassword,setShowPassword] = useState(false);

    const {loading,error,signup} = useSignUpWithEmailAndPassword()
    
  return (
    <>
       <Input
          placeholder = 'Email'
          fontSize={14}
          type = 'email'
          value = {inputs.email}
          size={"sm"}
          onChange={(e) => setInputs({...inputs,email:e.target.value})}
        />
        <Input
          placeholder = 'Username'
          fontSize={14}
          type = 'text'
          size={"sm"}
          value = {inputs.username}
          onChange={(e) => setInputs({...inputs,username:e.target.value})}
        />
         <Input
          placeholder = 'Full Name'
          fontSize={14}
          type = 'text'
          size={"sm"}
          value = {inputs.fullname}
          onChange={(e) => setInputs({...inputs,fullname:e.target.value})}
        />
        <InputGroup>
          <Input
            placeholder = 'Password'
            fontSize={14}
            type= {showPassword? "text" : "password"}
            size={"sm"}
            value = {inputs.password}
            onChange={(e) => setInputs({...inputs,password:e.target.value})}
          />
          <InputRightElement h = "full">
              <Button variant={"ghost"} size = {"sm"} onClick={()=> setShowPassword(!showPassword)}>
              {showPassword? <ViewIcon/> : <ViewOffIcon/>}
              </Button>
                  
          </InputRightElement>

        </InputGroup>

        { error && (
              <Alert status="error" fontSize={13} p ={12} borderRadius={4}>
              <AlertIcon fontSize={12}/>
              {error.message}
              </Alert>
        )
        }

        <Button w ={"full"} colorScheme="blue" size ={"sm"} fontSize={14} onClick={ () => signup(inputs) } 
          isLoading = {loading}
          >
          Sign up
        </Button>

    </>
  )
}

export default SignUp