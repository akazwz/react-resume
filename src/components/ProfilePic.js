import React from 'react';
import {Avatar} from 'antd';
import {AntDesignOutlined} from '@ant-design/icons';

const ProfilePic = () => {
    return (
        <div>
            <Avatar
                size={{xs: 100, sm: 100, md: 200, lg: 200, xl: 200, xxl: 200}}
                icon={<AntDesignOutlined/>}
            />
        </div>
    );
};

export default ProfilePic;