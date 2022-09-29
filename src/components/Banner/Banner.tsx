import {Box, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react'

export function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return(
        <Box
            w='100%'
            h={64}
            display="flex"
            alignItems="center"
            bgImage="url('./background.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            px={20}
            >
            <Flex
                flexDirection='column'
                flex='1'
            >
                <Heading color='light.white' fontWeight="medium">5 Continentes, infinitas possibilidades.</Heading>
                <Text mt={4} fontSize='small' color='light.info'>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </Flex>
            <Flex
                h={64}
                flex='1'
                justifyContent='flex-end'
                position='relative'
            >
                {isWideVersion && <Image src="./airplane.png" alt="Airplane" position='absolute' top={1}/>}
            </Flex>
        </Box>
    );
}
