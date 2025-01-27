import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react"
import { useState } from "react";
import useLogin from "../../hooks/useLogin";


const Login = () => {

    const [inputs,SetInputs] = useState(
    {
      email:'',
      password:'',
  
    }
  );
  
  const {loading,error,login} = useLogin();
  return (
   <>
     <Input
          placeholder = 'Email'
          fontSize={14}
          type = 'email'
          size={"sm"}
          value = {inputs.email}
          onChange={(e) => SetInputs({...inputs,email:e.target.value})}
        />
         <Input
          placeholder = 'Password'
          fontSize={14}
          size={"sm"} 
          type='password'
          value = {inputs.password}
          onChange={(e) => SetInputs({...inputs,password:e.target.value})}   
        />

            { error && (
              <Alert status="error" fontSize={13} p ={12} borderRadius={4}>
              <AlertIcon fontSize={12}/>
              {error.message}
              </Alert>
               )
            }   

        <Button w ={"full"} colorScheme="blue" size ={"sm"} fontSize={14} isLoading={loading} onClick={()=> 
        {
          console.log("Login Inputs:", inputs);
          login(inputs)
        }         
          } >
          Log In
        </Button>

    </>
  );
};

export default Login;