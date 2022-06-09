import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface SlideProps {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}

export function Slide({ id, title, description, imgUrl }: SlideProps) {
  return (
    <Link href={`continent/${title}`}>
      <Box bgImg={imgUrl} bgRepeat="no-repeat" bgSize="cover" bgPos="center">
        <Flex
          h={450}
          direction="column"
          align="center"
          justify="center"
        >
            <Flex
              as="a"
              cursor="pointer"
              direction="column"
              align="center"
              justify="center"
            >
              <Heading
                fontWeight="bold"
                fontSize={['2xl', '5xl']}
                color="light.headingAndText"
              >
                {title}
              </Heading>
              <Text
                fontWeight="bold"
                fontSize={['sm', '2xl']}
                color="light.headingAndText"
              >
                {description}
              </Text>
            </Flex>
        </Flex>
      </Box>
    </Link>
  );
}