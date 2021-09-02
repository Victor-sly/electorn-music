import styles from './index.less';
import { Button } from 'antd';
import axios from '@/utils/http';
import {fetchData}from '@/api'

export default function IndexPage() {
    const click = () => {
        fetchData().then(res => {
            debugger
        })
    };
    return (
        <div>
            <h1 className={styles.title}>Page indesx</h1>
            <Button type="primary" onClick={click}>
                按钮
            </Button>
        </div>
    );
}
