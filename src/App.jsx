import { translations } from './translations'
import { projects } from './data'
import {
  Heading,
  Text,
  Container,
  SimpleGrid,
  Box,
  Button,
  Stack,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Select
} from '@chakra-ui/react'
import {
  ArrowDownIcon,
  LinkIcon
} from '@chakra-ui/icons'
import ProjectCard from './ProjectCard'
import { useEffect, useState } from 'react'

export default function App() {
  const [ lang, setLang ] = useState('en')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ projectMoreInfoId, setProjectMoreInfoId ] = useState(0)

  const projectCardsItems = projects.map(project => 
    <ProjectCard
      id={project.id}
      title={project.title}
      description={project.description}
      tags={project.tags}
      thumbnail={project.thumbnail}
      repository={project.repository}
      key={project.id}
      onMoreInfo={(id) => {setProjectMoreInfoId(id); onOpen();}}
      lang={lang}
    />
  )

  const projectMoreInfoImages = projects[projectMoreInfoId].images.map(image =>
    <Image
      src={image}
      alt={image}
      borderRadius='sm'
      my={2}
      key={image}
    />
  )
  
  useEffect(() => {
    document.title = translations.document_title[lang]
  })

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  }

  return (
    <>
      <Modal
        size={['full', 'full', 'xl']}
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior='inside'
        isCentered
      >
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='auto'
          backdropBlur='10px'
        />
        <ModalContent>
          <ModalHeader>{translations.project_infos[lang]}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={projects[projectMoreInfoId].thumbnail}
              alt={projects[projectMoreInfoId].title[lang]}
              borderRadius='lg'
            />
            <Heading size='md' py={5}>{projects[projectMoreInfoId].title[lang]}</Heading>
            <Heading size='sm' py={3}>{translations.description[lang]}</Heading>
            <Text>{projects[projectMoreInfoId].description[lang]}</Text>
            <Heading size='sm' py={3}>{translations.images[lang]}</Heading>
            {projectMoreInfoImages}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>{translations.close[lang]}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box minH={['90vh', '90vh', '85vh', '81vh']} className='whiteSection'>
        <Box align='right' p={3}>
          <Select variant='unstyled' width={120} value={lang} onChange={handleLanguageChange}>
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
          </Select>
        </Box>
        <Container minW='100%' p={['2em', '3em', '5em', '10em']} pt={['1em', '1em', '20vh', '20vh']} pb={[0, 0, 0, 0]} w='100%'>
          <Heading size={['3xl', '4xl']} fontWeight='black' >{translations.self_greeting[lang]}</Heading>
          <Heading size={['md', 'lg']}>{translations.self_occupation[lang]}</Heading>
          <Text color='muted' fontSize={['md', 'md', 'lg']} py='2em' maxW={['100%', '100%', '80%', '70%']}>{translations.self_background[lang]}</Text>
          <Stack direction={['column', 'column', 'row']} spacing='1em'>
            <Link href='#projects'>
              <Button variant='solid' rightIcon={<ArrowDownIcon />} w='100%'>{translations.check_out_my_work[lang]}</Button>
            </Link>
            <Link href='https://github.com/0lbap' isExternal>
              <Button variant='outline' rightIcon={<LinkIcon />} w='100%'>{translations.visit_my_github[lang]}</Button>
            </Link>
          </Stack>
        </Container>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 120"><path fill="#415A77" fillOpacity="1" d="M0,160L60,165.3C120,171,240,181,360,176C480,171,600,149,720,165.3C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <Box minH='100vh' className='blueSection' id='projects' my={'-1px'}>
        <Container minW='100%' p={['2em', '3em', '4em', '5em', '6em']} pt={['2em', '2em', '3em','4em', '4em']} w='100%'>
          <Heading>{translations.my_projects[lang]}</Heading>
          <Text>{translations.my_projects_description[lang]}</Text>
          <SimpleGrid pt='3em' spacing={4} columns={[1, 1, 2, 2, 3, 4]}>
            {projectCardsItems}
          </SimpleGrid>
        </Container>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 25 1440 85"><path fill="#415A77" fillOpacity="1" d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,80C840,75,960,85,1080,80C1200,75,1320,53,1380,42.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <Box minH='100vh' className='whiteSection'>
        <Container minW='100%' p={['2em', '3em', '4em', '5em', '6em']} pt={['2em', '2em', '3em','4em', '4em']} w='100%'>
          <Heading>{translations.technologies[lang]}</Heading>
          <Text>{translations.technologies_description[lang]}</Text>
          <Container fontSize='3em' p={['0%', '0%', '5%', '5%']} pt={['15%', '10%', '30%', '20%']} textAlign='center'>
            <i className="devicon-html5-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-jquery-plain"></i>
            <i className="devicon-php-plain"></i>
            <i className="devicon-mysql-plain"></i>
            <i className="devicon-oracle-plain"></i>
            <i className="devicon-c-plain"></i>
            <i className="devicon-cplusplus-plain"></i>
            <i className="devicon-python-plain"></i>
            <i className="devicon-bash-plain"></i>
            <i className="devicon-java-plain"></i>
            <i className="devicon-ocaml-plain"></i>
            <i className="devicon-arduino-plain"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-express-original"></i>
            <i className="devicon-latex-plain"></i>
            <i className="devicon-flask-plain"></i>
            <i className="devicon-vuejs-plain"></i>
            <i className="devicon-react-plain"></i>
            <i className="devicon-angularjs-plain"></i>
            <i className="devicon-symfony-plain"></i>
            <i className="devicon-figma-plain"></i>
            <i className="devicon-git-plain"></i>
            <i className="devicon-azure-plain"></i>
            <i className="devicon-github-plain"></i>
            <i className="devicon-gitlab-plain"></i>
            <i className="devicon-bootstrap-plain"></i>
            <i className="devicon-tailwindcss-plain"></i>
            <i className="devicon-spring-plain"></i>
            <i className="devicon-opengl-plain"></i>
            <i className="devicon-rust-plain"></i>
            <i className="devicon-kotlin-plain"></i>
            <i className="devicon-docker-plain"></i>
          </Container>
        </Container>
      </Box>
    </>
  )
}
