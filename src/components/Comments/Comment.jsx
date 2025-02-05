import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Comment = ({createdAt,username,profilePicture,text}) => {
  return (
    <Flex gap={4}> 
      <Avatar src = {profilePicture} name={username} size={"sm"}/>
      <Flex direction={"column"}> 
          <Flex gap={2}>
            <Text fontWeight={"bold"} fontSize={12}> 
              {username}
            </Text>
            <Text fontSize={14}> 
              {text}
            </Text> 
          </Flex>
          <Text color={"gray"} fontSize={12}> 
              {createdAt}
            </Text>

      </Flex>

    </Flex>
  )
}

export default Comment