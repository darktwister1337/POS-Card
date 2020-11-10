import React, {useState, useEffect} from 'react';
import {
    Title,
    View,
    Panel,
    PanelHeader,
    PanelHeaderButton,
    Tabs,
    TabsItem,
    PanelHeaderContext,
    List,
    Cell,
    Search,
    CellButton,
    PanelHeaderBack,
    HorizontalScroll,
    Separator,
    Group,
    Counter
} from '@vkontakte/vkui';
import Icon28CameraOutline from "@vkontakte/icons/dist/28/camera_outline";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import Icon16Dropdown from "@vkontakte/icons/dist/16/dropdown";
import Icon28UsersOutline from "@vkontakte/icons/dist/28/users_outline";
import Icon24Done from "@vkontakte/icons/dist/24/done";
import Icon28SettingsOutline from "@vkontakte/icons/dist/28/settings_outline";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import {connection, getPartners} from "../db/connectionMySQL";
import {Partner} from "../classes/Partner";


class PartnersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'panel1',
            contextOpened: false,
            mode: 'cafes',
            activeTab1: 'everything',
            list: [],
            error: null
        };

        this.select = this.select.bind(this);
    }

    select(e) {
        const mode = e.currentTarget.dataset.mode;
        this.setState({mode, contextOpened: false});
    }
    buildList = (data) => {
        console.log(data, null, '/t');
        this.setState({list: data});
    }

    componentDidMount(){
        let url = 'http://35.228.73.97:3000/api/partners';
        fetch(url)
            .then(response => response.json())
            .then(this.buildList)
            .catch(error => {
                this.setState({error});
            })
    }

    render() {
        return (

            <View activePanel={this.state.activePanel}>
                <Panel id="panel1">
                    <PanelHeader separator={false}>
                        <Title level="2" weight="bold">Партнёры</Title>
                    </PanelHeader>
                    <Search/>
                    <Tabs>
                        <TabsItem
                            onClick={() => {
                                if (this.state.activeTab1 === 'everything') {
                                    this.setState({contextOpened: !this.state.contextOpened});
                                }
                                this.setState({activeTab1: 'everything'})
                            }}
                            selected={this.state.activeTab1 === 'everything'}
                            after={<Icon16Dropdown fill="var(--accent)" style={{
                                transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})`
                            }}/>}
                        >
                            Все
                        </TabsItem>
                        <TabsItem
                            onClick={() => {
                                this.setState({activeTab1: 'favourite', contextOpened: false})
                            }}
                            selected={this.state.activeTab1 === 'favourite'}
                        >
                            Избранное
                        </TabsItem>
                    </Tabs>
                    <PanelHeaderContext
                        opened={this.state.contextOpened}
                        onClose={() => {
                            this.setState({contextOpened: false})
                        }}
                    >
                        <List>
                            <Cell
                                before={<Icon28UsersOutline/>}
                                asideContent={this.state.mode === 'all' ? <Icon24Done fill="var(--accent)"/> : null}
                                onClick={this.select}
                                data-mode="cafes"
                            >
                                Кафешки
                            </Cell>
                            <Cell
                                before={<Icon28SettingsOutline/>}
                                asideContent={this.state.mode === 'managed' ? <Icon24Done fill="var(--accent)"/> : null}
                                onClick={this.select}
                                data-mode="restaurants"
                            >
                                Рестораны
                            </Cell>
                        </List>
                    </PanelHeaderContext>
                    <List>
                            {
                                this.state.list.length === 0 &&
                                <li>А дата все, ушла :(</li>
                            }
                            { this.state.list.length > 0 &&
                            this.state.list.map( (item) => (
                                <Cell before={<Avatar src={item.coverUri}/>} description={item.discount}>{item.title} </Cell>
                            ))
                            }

                    </List>
                </Panel>


            </View>
        )
    }
}

export default PartnersPage
