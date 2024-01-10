import React from "react";
import Header from "../../components/header/Header.tsx";
import CrumblesTests from "../../components/CrumblesTests/CrumbleTests.tsx";
import CardTest from "../../components/CatdTest/CardTest.tsx";

const Evaluate = () => {

    return (
        <>
            <Header />
            <CrumblesTests items={[1,2,3]}/>
            <CardTest label={"Как вы относитесь к шаурме"} gradient={5}/>
        </>
    )

}

export default Evaluate;