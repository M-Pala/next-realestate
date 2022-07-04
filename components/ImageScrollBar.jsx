import { Box, Flex, Icon } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'
import { FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import Image from 'next/image'

const LeftArrow = () =>{
    const {scrollPrev} = useContext(VisibilityContext)

    return(
        <Flex justifyContent={'center'} alignItems='center' marginRight={1}>
            <Icon
                as={FaArrowCircleLeft}
                onClick={()=>scrollPrev()}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}

const RightArrow = () =>{
    const {scrollNext} = useContext(VisibilityContext)

    return(
        <Flex justifyContent={'center'} alignItems='center' marginRight={1}>
            <Icon
                as={FaArrowCircleRight}
                onClick={()=>scrollNext()}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}

const ImageScrollBar = ({data}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>
        {data.map((item)=>{
            return (
                <Box  key={item.id} width='910px' itemID={item.id} overflow='hidden' p='1'>
                    <Image 
                        placeholder='blur' 
                        blurDataURL={item.url} 
                        src={item.url} 
                        width={'1000px'} 
                        height={'500px'}
                        sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                        alt='property image'
                        />

                </Box>
            )
        })}
    </ScrollMenu>
  )
}

export default ImageScrollBar