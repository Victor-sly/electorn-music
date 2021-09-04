import React, { useState } from 'react';
import styled from 'styled-components';
import logoSrc from '@/static/images/logo.svg';

const menus = [
    {
        id: 1,
        path: 'home',
        icon: 'icon-shouye',
    },
    {
        id: 2,
        path: 'home1',
        icon: 'icon-zhinanzhen1_1',
    },
    {
        id: 3,
        path: 'home2',
        icon: 'icon-audio',
    },
    {
        id: 4,
        path: 'home3',
        icon: 'icon-qushi',
    },
    {
        id: 5,
        path: 'home4',
        icon: 'icon-liulan',
    },
    {
        id: 6,
        path: 'home5',
        icon: 'icon-ellipsis',
    },
];

const Wrap = styled.div`
    height: 100%;
    color: #fff;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Logo = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
    }
`;
const Bar = styled.div`
    flex: 1;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        li {
            color: #808080;
            font-size: 16px;
            list-style-type: none;
            &:not(:last-child) {
                margin-bottom: 15px;
            }

            > i {
                cursor: pointer;
            }
        }
        .active i {
            color: #fff;
        }
    }
`;
const SideBar = () => {
    const [currentMenu, setCurrentMenu] = useState(menus[0]);
    const switchMenu = (menuInfo: {
        id: number;
        path: string;
        icon: string;
    }) => {
        return (e: any) => {
            setCurrentMenu(menuInfo);
        };
    };
    return (
        <Wrap className="side-bar">
            <Logo className="logo">
                <img src={logoSrc} alt="logo" />
            </Logo>
            <Bar>
                <ul>
                    {menus.map((item) => {
                        const active =
                            currentMenu.path === item.path ? 'active' : '';
                        console.log('active', active);
                        return (
                            <li key={item.id} className={active}>
                                <i
                                    className={`iconfont ${item.icon}`}
                                    onClick={switchMenu(item)}
                                />
                            </li>
                        );
                    })}
                </ul>
            </Bar>
        </Wrap>
    );
};

export default SideBar;
