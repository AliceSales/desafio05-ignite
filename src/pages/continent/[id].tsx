import JumbotronImage from "../../components/Jumbotron/Jumbotron";
import Header from "../../components/Header";
import ContentContinent from "../../components/ContentContinent/ContentContinent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import db from "../../../db.json"
import Gallery from "../../components/Gallery";

interface ContinentProps {
        id: number;
        name: string;
        description: string;
        text: string;
        numberOfCountries: number;
        numberOfLanguages: number;
        Image: string;
        jumbotronImage: string;
        countries: { id: number;
            name: string;
            flag: string;
            capital: string;
            image: string;
 }[]; }

 
 export default function Continent() {
    const router = useRouter()
    const [continent, setContinent] = useState<ContinentProps | undefined>(undefined)
    const { continents } = db;

    const { id } = router.query;
    
    console.log(id)
    
    useEffect(() => {
        const selectedContinent:ContinentProps | undefined = continents.find(
            continent => continent.id === Number(id)
        )
        console.log(selectedContinent)
        setContinent(selectedContinent)
    }, [id]); //selected não tem tempo de pegar o valor

    return(
        <>
            <Header/>
            {continent && <JumbotronImage name={continent.name} jumbotronImage={continent.jumbotronImage}/>}
            {continent && <ContentContinent text={continent.text} numberOfCountries={continent.numberOfCountries} numberOfLanguages={continent.numberOfLanguages}/>}
            {continent && <Gallery countries={continent.countries}/>}
        </>
    )
}