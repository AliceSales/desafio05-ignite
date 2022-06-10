import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Item } from "./Item";

export function Options() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return(
        <Flex
            w="100%"
            justifyContent="space-around"
            px="16"
            mt="32"
            mb="16"
            flexWrap="wrap"
            gap="50px"
        >
            <Item image='./cocktail.png' nameImage='coquetel' textIcon='vida noturna' />
            <Item image='./surf.png' nameImage='surf' textIcon='praia' />
            <Item image='./building.png' nameImage='prédio' textIcon='moderno' />
            <Item image='./museum.png' nameImage='museu' textIcon='clássico' />
            <Item image='./earth.png' nameImage='terra' textIcon='e mais...' />
        </Flex>
    )
}