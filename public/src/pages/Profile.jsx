import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import ProfileSettings from '../components/ProfileSettings';

export default function Profile() {
  let x = document.cookie;
    useEffect(() => {
        if(x === "") window.location.href = '/login';
        // eslint-disable-next-line
    }, []);

    

  return (
    <>
        <Navbar chat={false} scroll={false} />
        <ProfileSettings />
    </>
  );
}
