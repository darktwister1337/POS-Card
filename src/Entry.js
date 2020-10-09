import {Epic, Panel, PanelHeader, Tabbar, TabbarItem, Title} from "@vkontakte/vkui";
import View from "@vkontakte/vkui/dist/components/View/View";
import React, { useState, useEffect } from 'react';
import NewsPage from "./Pages/NewsPage";
import PartnersPage from "./Pages/PartnersPage";
import ProfilePage from "./Pages/ProfilePage";
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/profile';


class Entry extends React.Component {

    constructor(props) {
        super(props);




        this.state = {
            activeStory: 'partners',
            currentView: 'currentPage'
        };
        this.onStoryChange = this.onStoryChange.bind(this);
        this.onViewChange = this.onViewChange.bind(this);
    }

    onStoryChange(e) {
        this.setState({activeStory: e.currentTarget.dataset.story})
    }

    onViewChange() {
        this.setState({
            currentView: 'currentPage'
        })
    }


    render() {

        return (
            <View id="navPage">
                <Panel>
                    <Epic activeStory={this.state.activeStory} tabbar={
                        <Tabbar>
                            <TabbarItem
                                onClick={this.onStoryChange}
                                selected={this.state.activeStory === 'feed'}
                                data-story="feed"
                                text="Новости"
                            ><Icon28NewsfeedOutline/></TabbarItem>
                            <TabbarItem
                                onClick={this.onStoryChange}
                                selected={this.state.activeStory === 'partners'}
                                data-story="partners"
                                text="Партнеры"
                            ><Icon28ServicesOutline/></TabbarItem>
                            <TabbarItem
                                onClick={this.onStoryChange}
                                selected={this.state.activeStory === 'profile'}
                                data-story="profile"
                                text="Профиль"
                            ><Icon28UserCircleOutline/></TabbarItem>
                        </Tabbar>
                    }>


                        <View id="feed" activePanel="feed">
                            <Panel id="feed">
                                <NewsPage></NewsPage>
                            </Panel>
                        </View>

                        <View id="partners" activePanel="partners">
                            <Panel id="partners">
                                <PartnersPage></PartnersPage>
                            </Panel>
                        </View>

                        <View id="profile" activePanel="profile">
                            <Panel id="profile">
                                <ProfilePage viewChange={this.onViewChange}></ProfilePage>
                            </Panel>
                        </View>
                    </Epic>
                </Panel>
            </View>
        )
    }
}

export default Entry;