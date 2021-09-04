import { IRouteComponentProps } from 'umi';

import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

import './index.less';

export default function Layout({
    children,
    location,
    route,
    history,
    match,
}: IRouteComponentProps) {
    return (
        <div className="web-wrap">
            <div className="main">
                <SideBar />

                <div className="center">
                    <Header />

                    <div className="content">{children}</div>
                </div>
            </div>
            <div className="bottom-bar">bar</div>
        </div>
    );
}
