import * as React from 'react';
import Avatar from '@mui/material/Avatar';

type avatarProps = {
  children:string;
}

function UserAvatar({children}:avatarProps) {
  return <div>
    <Avatar sx={{bgcolor:"#69A6E3"}}>{children}</Avatar>
  </div>;
}

export default UserAvatar;
