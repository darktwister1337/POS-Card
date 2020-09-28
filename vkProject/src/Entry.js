import {Epic, Panel, PanelHeader, Tabbar, TabbarItem} from "@vkontakte/vkui";
import View from "@vkontakte/vkui/dist/components/View/View";
import React, { useState, useEffect } from 'react';
import NewsPage from "./Pages/NewsPage";
import PartnersPage from "./Pages/PartnersPage";
import ProfilePage from "./Pages/ProfilePage";
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/profile';


class Entry extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            activeStory: 'feed'
        };
        this.onStoryChange = this.onStoryChange.bind(this);
    }

    onStoryChange (e) {
        this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    render () {

        return (
            <Epic activeStory={this.state.activeStory} tabbar={   // https://vkcom.github.io/vkui-styleguide/#epic
                <Tabbar>                                          // https://vkcom.github.io/vkui-styleguide/#tabbar
                    <TabbarItem                                   // https://vkcom.github.io/vkui-styleguide/#tabbaritem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'feed'}
                        data-story="feed"
                        text="Новости"
                    ><Icon28NewsfeedOutline /></TabbarItem>
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
                    ><Icon28UserCircleOutline /></TabbarItem>
                </Tabbar>
            }>


                <View id="feed" activePanel="feed">          // https://vkcom.github.io/vkui-styleguide/#view
                    <Panel id="feed">                        // https://vkcom.github.io/vkui-styleguide/#panel
                        <PanelHeader>Новости</PanelHeader>   // https://vkcom.github.io/vkui-styleguide/#panelheader

                    </Panel>
                </View>

                <View id="partners" activePanel="partners">
                    <Panel id="partners">
                        <PanelHeader>Партнеры</PanelHeader>
                    </Panel>
                </View>

                <View id="profile" activePanel="profile">
                    <Panel id="profile">
                        <PanelHeader>Профиль</PanelHeader>
                    </Panel>
                </View>
            </Epic>
        )
    }
}

export default Entry;