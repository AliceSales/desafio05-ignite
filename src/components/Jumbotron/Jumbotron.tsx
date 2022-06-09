import { Flex, Heading } from "@chakra-ui/react";

interface BannerContinentProps {
    name: string;
    jumbotronImage: string;
}

export default function BannerContinent({ name, jumbotronImage } : BannerContinentProps) {
    return(
        <Flex
            backgroundImage={`url(${jumbotronImage})`}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            w="100%"
            h="500px"
            direction="column-reverse"
            justifyContent={["center", "flex-start"]}
            alignItems={["center", "flex-start"]}
            pl="8"
            pb="8"
        >
            <Heading
                fontSize="3xl"
                fontWeight="600"
            > {name}</Heading>
        </Flex>
    )
}