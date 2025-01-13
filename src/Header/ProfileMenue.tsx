import { Menu, Text, rem, Avatar, Switch } from '@mantine/core';
import {
    IconMessageCircle,
    IconUserCircle,
    IconFileCv,
    IconMoon,
    IconSun,
    IconMoonStars,
    IconLogout,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileMenue = () => {
    const [checked, setChecked] = useState(false);
    const [opened,setOpened] = useState(false);
    return (
        <Menu shadow="md" width={200} opened={opened}  onChange={setOpened}>
            <Menu.Target >
                <div className="flex items-center justify-center gap-3">
                    <div className='font-semibold'>Omair Saad</div>
                    <Avatar src="/assets/avatar1.png" alt="it's me" className="hover:cursor-pointer" />
                </div>
            </Menu.Target>

            <Menu.Dropdown onChange={()=>setOpened(true)}>
                <Link to="/profile">
                <Menu.Item leftSection={<IconUserCircle style={{ width: rem(18), height: rem(18) }} />}>
                    Profile
                </Menu.Item>
                </Link>
                <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(18), height: rem(18) }} />}>
                    Messages
                </Menu.Item>
                <Menu.Item leftSection={<IconFileCv style={{ width: rem(18), height: rem(18) }} />}>
                    Resume
                </Menu.Item>
                <Menu.Item leftSection={<IconMoon style={{ width: rem(18), height: rem(18) }} />}
                    rightSection={
                        <Text>
                         <Switch 
                          size="md"
                          color="dark.4" 
                          onLabel={<IconSun color='yellow' style={{width:rem(18),height:rem(18)}} />} 
                          offLabel={<IconMoonStars color='cyan' style={{width:rem(18),height:rem(18)}} />}
                          checked = {checked}
                          onChange={(event)=>setChecked(event.currentTarget.checked)} 
                          />
                        </Text>
                    }>
                    Dark Mode
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                    color="red"
                    leftSection={<IconLogout style={{ width: rem(18), height: rem(18) }} />}
                >
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
export default ProfileMenue;