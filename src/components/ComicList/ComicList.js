import PropTypes from 'prop-types';
import React from 'react';

import Loading from '../UI/Loading/loading';
import Comic from './Comic/Comic';

import './ComicList.css';

const comicList = ({ comicList, comicClicked, comicSelected, loading }) => {

    const comicsDivs = (
        comicList.map(element => 
            <Comic
                key={element.id}
                comic={element}
                comicClicked={comicClicked}
                comicSelected={comicSelected}
            />
        )
    );

    return (
        <div className="ComicList">
            {loading ? <Loading /> : comicsDivs}
        </div>
    );
};

comicList.propTypes = {
    comicList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
    comicClicked: PropTypes.func.isRequired,
    comicSelected: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default React.memo(comicList, (prevProps, nextProps) => nextProps.comicList === prevProps.comicList && prevProps.loading === nextProps.loading);