import React, { useState, useEffect } from 'react';
import {Title, View, Panel, PanelHeader, PanelHeaderButton, Tabs, TabsItem, PanelHeaderContext, List, Cell, Search, CellButton, PanelHeaderBack, HorizontalScroll, Separator, Group, Counter} from '@vkontakte/vkui';
import CardScroll from "@vkontakte/vkui/dist/components/CardScroll/CardScroll";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

class NewsPage extends React.Component {


    constructor (props) {
        super(props);
        this.state = {
            activePanel: 'panel1'
        };
        this.select = this.select.bind(this);

    }
    select(e) {
        const mode = e.currentTarget.dataset.mode;
        this.setState({ mode, contextOpened: false });
    }


    render(){
    return(
        <View activePanel={this.state.activaPanel}>

            <Panel>
                <PanelHeader><Title level="2" weight="bold">Новости</Title></PanelHeader>
                <Group separator="hide" description="Горизонатальный скролл">
                    <CardScroll>
                        <Card size="s">
                            <div style={{ width: 250, height: 96 }} />
                        </Card>
                        <Card size="s">
                            <div style={{ width: 250, height: 96 }} />
                        </Card>
                        <Card size="s">
                            <div style={{ width: 250, height: 96 }} />
                        </Card>
                        <Card size="s">
                            <div style={{ width: 250, height: 96 }} />
                        </Card>
                    </CardScroll>
                </Group>
                <Group separator="hide" description="Купи завтрак - получи МакДональдс">
                    <CardScroll>
                        <Card size="l">
                            <div style={{ height: 200 }} />
                        </Card>
                    </CardScroll>
                </Group>
                <Group separator="hide" description="Завернись в ролл">
                    <CardScroll>
                        <Card size="l">
                            <div style={{ height: 200 }} />
                        </Card>
                    </CardScroll>
                </Group>
            </Panel>
        </View>
    )};
}

export default NewsPage;