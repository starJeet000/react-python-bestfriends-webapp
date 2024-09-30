import { Container, Stack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";
import { useState } from "react";

//added this line or deployment and production purposes
export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";
// export const BASE_URL = "http://localhost:5000/api"

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Stack minH={"100vh"}>
      <Navbar setUsers={setUsers} />

      <Container maxW={"1200px"} my={4}>
        <Text 
        fontSize={{base: "3x1", md: "50" }}
        fontWeight={"bold"}
        letterSpacing={"2px"}
        textTransform={"uppercase"}
        textAlign={"center"}
        mb={8}
        >
          <Text as= "span" bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
            My Besties
          </Text>
          🚀
        </Text>

        <UserGrid users={users} setUsers={setUsers} />
      </Container>
    </Stack>
  );
}

export default App
