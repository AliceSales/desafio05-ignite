import JumbotronImage from "../../components/Jumbotron/Jumbotron";
import Header from "../../components/Header";
import ContentContinent from "../../components/ContentContinent/ContentContinent";

interface ContinentProps {
    name: string;
    text: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    jumbotronImage: string;
    countries: [{
        id: number;
        name: string;
        flag: string;
        capital: string;
        image: string;
    }]
}

export default function Continent( continent: ContinentProps) {
    console.log(continent);
    return(
        <>
            <Header/>
            <JumbotronImage name={continent.name} jumbotronImage={continent.jumbotronImage}/>
            <ContentContinent text={continent.text} numberOfCountries={continent.numberOfCountries} numberOfLanguages={continent.numberOfLanguages}/>
        </>
    )
}