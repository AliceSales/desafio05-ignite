import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

interface CardProps {
    countries: {
        id: number,
        name: string,
        flag: string,
        capital: string,
        image: string,
    }[];
}

export default function Gallery({ countries }: CardProps) {
    console.log(countries)
    return (
        <Flex
            w="100%"
            direction="column"
            mt="16"
            mb="8"
            px="8"
        >
            <Heading
                mb="8"
                fontSize="36px"
                fontWeight="500"
                color="gray.600"
            >
            Cidades 100+
            </Heading>
            <SimpleGrid as="ul" minChildWidth="256px" spacing="45px">
                {countries.map(country =>
                    <Card
                        key={country.id}
                        capital={country.capital}
                        name={country.name}
                        image={country.image}
                        flag={country.flag}
                    />
                )}
            </SimpleGrid>
        </Flex>
    )
}