import React from 'react';

import './SeasonDisplay.css';

const SeasonConfig = {
    Winter: {
        'text': 'Burr... it\'s chilly!',
        'iconName': 'Snowflake' 
    },
    Summer: {
        'text': 'Let\'s hit the beach!',
        'iconName': 'sun'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Winter': 'Summer';
    } else {
        return lat > 0 ? 'Summer': 'Winter';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().month);
    const {text, iconName} = SeasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={` massive icon-left ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={` massive icon-right ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;