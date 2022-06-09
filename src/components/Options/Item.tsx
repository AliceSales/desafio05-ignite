import { Flex, Image, Text } from "@chakra-ui/react";

interface ItemProps {
    image: string;
    nameImage: string;
    textIcon: string;
}

export function Item( {image, nameImage, textIcon} : ItemProps) {
    return(
        <Flex
            flexDirection='column'
            align='center'
            justify='center'
        >
            <Image src={image} alt={nameImage} pb='5'/>
            <Text color='dark.headingAndText' fontWeight='500'>{textIcon}</Text>
        </Flex>
    )
}