import { translations } from './translations'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  Image,
  Link,
  Tag,
  HStack,
  ButtonGroup
} from '@chakra-ui/react'
import {
  ExternalLinkIcon,
  ArrowForwardIcon
} from '@chakra-ui/icons'

export default function ProjectCard({ id, title, description, tags, thumbnail, repository, onMoreInfo, lang }) {
  const tagsItems = tags.map(tag =>
    <Tag size='sm' colorScheme='blue' key={tag}>{tag}</Tag>
  )
  return (
    <Card maxW='sm' size='sm' placeSelf='stretch center' shadow='xs' borderRadius='lg'>
      <CardHeader>
        <Image
          src={thumbnail}
          alt={title[lang]}
          borderRadius='lg'
        />
      </CardHeader>
      <CardBody>
        <Heading size='md'>{title[lang]}</Heading>
        <Text pt='2'>{description[lang]}</Text>
        <HStack pt='2'>
          {tagsItems}
        </HStack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Link>
            <Button variant='solid' colorScheme='blue' rightIcon={<ArrowForwardIcon />} onClick={() => onMoreInfo(id)}>
              {translations.more_info[lang]}
            </Button>
          </Link>
          <Link href={repository} isExternal>
            <Button variant='ghost' colorScheme='blue' rightIcon={<ExternalLinkIcon />}>
            {translations.repository[lang]}
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
