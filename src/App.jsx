import {Flex, Heading, VStack, UnorderedList, ListItem} from "@chakra-ui/react"
import {useState, useEffect} from "react"
const initRegalos = [
  {id: 1, name: "Medias "},
  {id: 2, name: "caramelos"},
  {id: 3, name: "Vitel Tone"},
]

function App() {
  const [regalos, setRegalos] = useState(undefined)

  useEffect(() => {
    setRegalos(initRegalos)
  }, [])

  return (
    <Flex alignItems="center" justifyContent="center" minH="100vh" w="100%">
      <VStack alignItems="flex-start" bg="white" p={4} shadow="md" w="30%">
        <Heading textAlign="center" w="100%">
          Regalos:
        </Heading>
        <UnorderedList listStyleType="none" textAlign="center" w="100%">
          {regalos ? regalos.map(({id, name}) => <ListItem key={id}> {name} </ListItem>) : ""}
        </UnorderedList>
      </VStack>
    </Flex>
  )
}

export default App
