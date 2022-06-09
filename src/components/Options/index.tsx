import { Box, Flex, HStack } from "@chakra-ui/react";
import { Item } from "./Item";

export function Options() {
    return(
        <Flex
            w='100%'
            h={64}
            align='center'
            justify='center'
        >
            <HStack
                spacing={36}
            >
                <Item image='./cocktail.png' nameImage='coquetel' textIcon='vida noturna' />
                <Item image='./surf.png' nameImage='surf' textIcon='praia' />
                <Item image='./building.png' nameImage='prédio' textIcon='moderno' />
                <Item image='./museum.png' nameImage='museu' textIcon='clássico' />
                <Item image='./earth.png' nameImage='terra' textIcon='e mais...' />
            </HStack>
        </Flex>
    )
}