import { useParams } from "react-router-dom"
import { customFetch } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";
import { Wrapper } from "../assets/wrappers/CharacterInfo";
import { Loader } from "./components/Loader";
import { useState } from "react";
import emptyImg from '../assets/images/empty.png'


export const CharacterInfo = () => {

    const [activeTab, setActiveTab] = useState('powerstats');

    const { id } = useParams();

    const { isLoading, data, isError } = useQuery({
        queryKey: ['characters'],
        queryFn: async () => {
            try {
                const { data } = await customFetch.get(`${id}`)
                
                return data
            } catch (error) {
                return { data: [] };
            }
        }
    })


    if (isLoading) {
        return (
            <main>
                <Loader />
            </main>
        )
    }

    if (isError) {
        return <p>something went wrong</p>
    }

    const excludedKeys = ['image', 'response', 'id', 'name'];

    return (
        <Wrapper>
            <div className="page">
                <h1 className="character__title">In this page: </h1>
                <p className="character__subtitle">find out everything about the character</p>
                <div className="character__about">
                    <div className="character__about-img">
                        <img src={data.image?.url} alt="" onError={(e) => { e.target.src = emptyImg }} />
                    </div>
                    <div className="character__info">
                        <div className="tabs">
                            {Object.entries(data).filter(([key]) => !excludedKeys.includes(key)).map(([key]) => {
                                return (
                                    <div className={`tab ${activeTab === key ? 'active' : ''}`} key={key} onClick={() => setActiveTab(key)}>{key}</div>
                                )
                            })}
                        </div>
                        <div className="tab__content">
                            {activeTab && Object.entries(data[activeTab]).map(([key, value]) => {
                                const displayValue = value === 'null' || value === '' ? '-' : value;
                                return (
                                    <div className="tab__content-info" key={key}>
                                        <p><span>{`${key.replace(/-/g, " ")}: `}</span>{displayValue}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
