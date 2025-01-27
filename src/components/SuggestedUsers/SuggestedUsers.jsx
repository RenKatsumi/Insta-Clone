import { Box, Text, Flex, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px ={6} gap={4}>
      <SuggestedHeader/>

      <Flex alignItems={"center"} justifyContent={"space-between"}  w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested For You
        </Text>

        <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
          See All
        </Text>
      </Flex>

      <SuggestedUser name = 'WLOP' followers = {"1.4 Million"} avatar = 'https://shorturl.at/b7gOa'/>
      <SuggestedUser name = 'QinniArt' followers = {"2.3 Million"} avatar = 'https://shorturl.at/dDIFi'/>
      <SuggestedUser name = 'Cat Lovers Club' followers = {"8.1 Million"} avatar = 'https://shorturl.at/CGqAe'/>
      

      <Box
      alignSelf={"start"}
      fontSize={12}
      color={"gray.500"}
      mt={5}
      >
          © 2024 Built By Katsumi
      </Box>

    </VStack>
  )
}

export default SuggestedUsers