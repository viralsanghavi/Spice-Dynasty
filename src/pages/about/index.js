import MainLayout from '@/layout/MainLayout';
import { Container, Text, Space, Box, Grid, Image, Avatar } from '@mantine/core';

const About = () => {
  return (
    <MainLayout noBanner>
      <div>
        <Space w="xl" />
        <Text ta="center" fz="md" tt="uppercase" c="black" mt="xl">About Us</Text>
        <Space w="xl" />
        <Text ta="center" fz="xl" fw={900} c="#b78f5e" mt="xl">Our History</Text>
        <Space w="xl" />
        <Text ta="center" fz="sm" c="black" mt="xl" mb="xl">when we first started our journey</Text>
        <Space w="xl" />
      </div>
      <Container>
        <Grid my="xl">
          <Grid.Col md={6} lg={6} order={1} orderSm={2}>
            <Box mx="auto">
              <Image fit="cover" height="auto" src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" />
            </Box></Grid.Col>
          <Grid.Col md={6} lg={6} order={2} orderSm={1}><Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text></Grid.Col>
        </Grid>
        <Grid my="xl">
          <Grid.Col md={6} lg={6} order={1} orderSm={1}>
            <Box mx="auto">
              <Image fit="cover" height="auto" src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" />
            </Box></Grid.Col>
          <Grid.Col md={6} lg={6} order={2} orderSm={2}><Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text></Grid.Col>
        </Grid>
        <Grid my="xl">
          <Grid.Col md={6} lg={6} order={1} orderSm={2}>
            <Box mx="auto">
              <Image fit="cover" height="auto" src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" />
            </Box></Grid.Col>
          <Grid.Col md={6} lg={6} order={2} orderSm={1}><Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text></Grid.Col>
        </Grid>
      </Container>
      <Container>
        <Grid my="xl">
          <Grid.Col md={4} sm={12}>
            <Avatar radius="xl" />
            <Text fz="sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </Grid.Col>
          <Grid.Col md={4} sm={12}>
            <Avatar radius="xl" />
            <Text fz="sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </Grid.Col>
          <Grid.Col md={4} sm={12}>
            <Avatar radius="xl" />
            <Text fz="sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default About;