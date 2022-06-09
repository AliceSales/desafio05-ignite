import { Box, Text } from "@chakra-ui/react";

export function Content() {
    return(
        <>
            <Box
                as='span'
                w='5%'
                h='0.5'
                bg='dark.headingAndText'
                my={10}
                borderRadius="50%"
            >
            </Box>
            <Text fontSize="2xl" color='dark.headingAndText' fontWeight="500">Vamos nessa?</Text>
            <Text fontSize="2xl" color='dark.headingAndText' fontWeight="500"> Então escolha seu continente</Text>
        </>
    )
}