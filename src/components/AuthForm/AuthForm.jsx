import { Flex, Text, Box, VStack,Image } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";


 const AuthForm = () => {

  const [isLogin,SetisLogin] = useState(true)
  
  return (
    <>
    <Box border = {"1px solid gray"} borderRadius ={4} padding ={5}>
      <VStack spacing = {4}>
        <Image src = '/logo.png' h ={24} cursor = {"pointer"} alt = 'Instagram'/>

        {isLogin? <Login/> : <SignUp/>}

        {/*--------- OR  ------------*/}
        <Flex alignItems = "center" justifyContent= {"center"} my ={4} gap ={1} width = {"full"} >
          <Box flex = {2} h = {1} bg = {"gray.400"}/>
          <Text  mx = {1} color = {"white"}> OR</Text>
          <Box flex = {2} h = {1} bg = {"gray.400"}/>
        </Flex>
        
        <GoogleAuth prefix =  {isLogin? "Login" : "SignUp"}/>

      </VStack>
    </Box>

    <Box border = {"1px solid gray"} borderRadius = {4} padding = {5}>
      <Flex alignItems = {"center"} justifyContent={"center"}>
        <Box mx = {2} fontSize={14}>
          {
            isLogin ? "Dont Have an Account?" : "Already Have an Account"
          }
        </Box>
        <Box onClick={()=> SetisLogin(!isLogin)} color = {"blue.500"} cursor={"pointer"}>
          { isLogin? "Signup" : "Log in"}
        </Box>
       </Flex>       
    </Box>

   </>
  )
};

export default AuthForm;