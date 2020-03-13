import React from 'react';
import {Input, Icon} from 'antd';

const SearchBar = () => (
    <div>
        <Input placeholder={"Search"} loading enterButton>
            <Icon type="search" />
        </Input>
    </div>
);
export default (SearchBar);
