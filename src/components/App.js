import React from 'react';
import { selectSong } from '../actions';

import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
        <div className='ui container grid' style={{ marginTop: 20 }}>
            <div className='ui row'>
                <div className='column seven wide'>
                    <SongList />
                </div>
                <div className='column seven wide'>
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;
