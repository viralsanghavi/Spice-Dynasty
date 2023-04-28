import MainLayout from "@/layout/MainLayout";
import {Container, Text, Space, Box, Grid, Image, Avatar} from "@mantine/core";
import {addDoc, collection, doc, setDoc} from "firebase/firestore";
import {database} from "firebaseConfig";
import {useState} from "react";
import {ALL_PRODUCTS} from "@/utils/constants";

const About = () => {
  const [name, setName] = useState("");
  const addDataToDb = async () => {
    // ALL_PRODUCTS.map(
    //   async ({title, navigateTo = null}) =>
    //     await addDoc(collection(database, "all-products"), {
    //       title,
    //       navigateTo,
    //     })
    // );
  };
  return (
    <MainLayout noBanner>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addDataToDb}>Add</button>
    </MainLayout>
  );
};

export default About;
