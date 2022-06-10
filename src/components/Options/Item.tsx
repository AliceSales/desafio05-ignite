import { Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

interface ItemProps {
    image: string;
    nameImage: string;
    textIcon: string;
}

export function Item( {image, nameImage, textIcon} : ItemProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return(
        <Flex
            flexDirection='column'
            align='center'
            justify='center'
        >
            {isWideVersion ? <Image src={image} alt={nameImage} pb='5'/> : <Icon as={RiCheckboxBlankCircleFill} color="highlight"/>}
            <Text color='dark.headingAndText' fontWeight='500'>{textIcon}</Text>
        </Flex>
    )
}