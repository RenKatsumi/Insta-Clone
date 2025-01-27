import { Box, Button, Flex, InputGroup, InputRightElement, Text, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import {CommentLogo, NotificationsLogo,UnlikeLogo} from '../../assets/constants';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';

const PostFooter = ({username,isProfilePage}) => {
  const[liked,SetLiked] = useState(false);
  const[likes,SetLikes] = useState(1000);

  const handleLike = () =>
  {
    if(liked)
    {
      SetLiked(false);
      SetLikes(likes-1);
    }  
    else
    {
      SetLiked(true);
      SetLikes(likes+1);
    } 
  };

  return (
    <Box mb = {10}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"4"} marginTop={"auto"}>
       
        <Box onClick = {handleLike}>
          {!liked? (<NotificationsLogo/>) : (<UnlikeLogo/>)}
        </Box>

        <Box cursor = {"pointer"} fontSize={18}>
          <CommentLogo/> 
        </Box>

      </Flex>

        <Text fontWeight={600} fontSize={"sm"}>
          {likes} likes
        </Text>

       {!ProfilePage && 
        <>
         <Text fontWeight={700} fontSize={"sm"}>
          {username}{" "}
          
          <Text as = 'span'fontWeight={400} >
            Feeling Good
          </Text>
          
        </Text>

          <Text fontSize ='sm' fontWeight={400} color={"gray"}>
            View All 1000 comments
          </Text> 

        </>
       }
          <Flex
          alignItems={"center"}
          gap = {2}
          justifyContent={"space-between"}
          w={"full"}
          >

            <InputGroup>
            <Input variant = {"flushed"} placeholder = {"Add a Comment..."} fontSize = {"14"}/>
              <InputRightElement> 
                <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={"600"}
                cursor={"pointer"}
                _hover={
                  {
                    color:"white"
                  }
                }
                bg={"transparent"}
                >
                   Post
                </Button>
            
              </InputRightElement>
            
            </InputGroup>

          </Flex>    
    </Box>
  );
  };



export default PostFooter