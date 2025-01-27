import { Container, Flex, Skeleton, SkeletonCircle, VStack, Box } from '@chakra-ui/react'
import  FeedPost  from './FeedPost'
import { useEffect, useState } from 'react'


export const FeedPosts = () => {

  const[isloading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=> {
      setLoading(false)
      },2000)
      },[])

  return (
   <Container maxW={"Container.sm"} py={10} px ={2}> 

   {isloading && [0,1,2,3].map((_,idx)=>(
      <VStack key = {idx} gap={4} alignItems={"flex-start"} mb={10}>
        <Flex gap="2">
            <SkeletonCircle size={10}/>
          <VStack gap ={2} alignItems={"flex-start"}>
            <Skeleton height='10px' w={"200px"}/>
            <Skeleton height='10px' w={"200px"}/>
          </VStack>
        </Flex>
          <Skeleton w ={"full"}>
              <Box h ={"500px"}>contents wrapped</Box>
          </Skeleton>
       </VStack>

   ) )}

   {!isloading && (
    <> 
     <FeedPost
      img ='./img1.png'
      username = "Katsumi Ren"
      avatar = './profilepic.png'
   />

   <FeedPost
      img ='./img2.png'
      username = "Shawn Frost"
      avatar = './img2.png'
   />

   <FeedPost
      img ='./img3.png'
      username = "Tachibana Mei"
      avatar = './img3.png'
   />

  <FeedPost
      img ='./img4.png'
      username = "Ryussa Bakuryuu"
      avatar = './img4.png'
   /> 
    
    </>


   )}

   

   </Container>
  )
}
