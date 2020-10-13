import {
    Title,
    Panel,
    PanelHeader,
    Epic, Tabbar, TabbarItem
} from '@vkontakte/vkui';
import Icon28NewsfeedOutline from "@vkontakte/icons/dist/28/newsfeed";
import Icon28ServicesOutline from "@vkontakte/icons/dist/28/favorite_outline";
import Icon28UserCircleOutline from "@vkontakte/icons/dist/28/profile";
import ProfilePage from "./ProfilePage";
import React, {useState} from "react";
import PartnersPage from "./PartnersPage";
import bridge from "@vkontakte/vk-bridge";

const STORIES = {
    FEED: 'feed',
    PARTNERS: 'partners',
    PROFILE: 'profile',
};

const Home = ({id, fetchedUser}) => {
    const [activeStory, setActiveStory] = useState(STORIES.FEED);
    const [fetchedPartners, setPartners] = useState(null);

    function onPageChange(e) {
        setActiveStory(e.currentTarget.dataset.story)
    }

    return (
        <Panel id={id}>
            <Epic activeStory={activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={onPageChange}
                        selected={activeStory === STORIES.FEED}
                        data-story={STORIES.FEED}
                        text="Новости"
                    ><Icon28NewsfeedOutline/></TabbarItem>
                    <TabbarItem
                        onClick={onPageChange}
                        selected={activeStory === STORIES.PARTNERS}
                        data-story={STORIES.PARTNERS}
                        text="Партнеры"
                    ><Icon28ServicesOutline/></TabbarItem>
                    <TabbarItem
                        onClick={onPageChange}
                        selected={activeStory === STORIES.PROFILE}
                        data-story={STORIES.PROFILE}
                        text="Профиль"
                    ><Icon28UserCircleOutline/></TabbarItem>
                </Tabbar>
            }>
                <Panel id={STORIES.FEED}>
                    <PanelHeader><Title level="2" weight="bold">Новости</Title></PanelHeader>
                </Panel>
                <Panel id={STORIES.PARTNERS}>
                    <PartnersPage/>
                </Panel>
                <Panel id={STORIES.PROFILE}>
                    <ProfilePage fetchedUser={fetchedUser}/>
                </Panel>
            </Epic>
        </Panel>
    );
};

export default Home
