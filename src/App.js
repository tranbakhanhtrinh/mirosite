import { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./App.scss";
import Menu from "./components/Menu";
import Slide from "./components/Slide";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;
const App = () => {
    const [isLast, setIsLast] = useState(false);

    const { data } = useQuery(["list"], () => {
        return axios.get("http://localhost:4000/list");
    });

    const onLeave = (origin, destination, direction) => {
        setIsLast(destination.isLast);
    };

    return (
        <div className="App">
            <Menu logo={data?.data[0].logo} logoUrl={data?.data[0].logoUrl} discoverTxt={data?.data[0].discoverTxt} discoverUrl={data?.data[0].discoverUrl} isLast={isLast}/>
            {data && (
                <ReactFullpage
                    licenseKey={"YOUR_KEY_HERE"}
                    navigation
                    sectionSelector={SECTION_SEL}
                    onLeave={onLeave}
                    render={(comp) => (
                        <ReactFullpage.Wrapper>
                            {data?.data[0].slides.map((el, index) => (
                                <div key={el.header} className={SEL}>
                                    <Slide videoUrl={el.videoUrl} header={el.header} content={el.content} onClick={() => comp.fullpageApi.moveSectionDown()} isLast={isLast} />
                                </div>
                            ))}
                        </ReactFullpage.Wrapper>
                    )}
                />
            )}
        </div>
    );
};

export default App;
