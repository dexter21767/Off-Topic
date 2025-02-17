import { createContext, useState } from "react";



import { TopicText } from "../utils/language";


const getRandomTopic = ( topicType ) => {
    const { topics } = topicType;
    const topicId =  Math.floor(Math.random() * topics.length);
    return topics[topicId];
}

export const TopicsContext = createContext({
    topicsTypes: [],
    topicType: null,
    setTopicType: () => {},
    setTopicTypeInContext: () => {},
    topic: null,
    setTopic: () => {},
    setTopicsLanguage: () => {}
})

export const TopicsProvider = ({ children }) => {
    const [topicsTypes, setTopicsTypes] = useState(TopicText(0));
    const [topicType, setTopicType] = useState(null);
    const [topic, setTopic] = useState(null);


    const setTopicTypeInContext = (TopicType) => {
        setTopicType(TopicType);
        
    }

    const selectRandomTopic = (topicType) => {
        const selectedTopic = getRandomTopic(topicType);
        setTopic(selectedTopic);
    }

    const setTopicsLanguage = (lang) => {
        setTopicsTypes(TopicText(lang.id))
    }


    const value = { 
        topicsTypes, 
        topicType, 
        setTopicTypeInContext, 
        topic, 
        selectRandomTopic,
        setTopicsLanguage
    };

    return (
        <TopicsContext.Provider value={value}>
            {children}
        </TopicsContext.Provider>
    )
}