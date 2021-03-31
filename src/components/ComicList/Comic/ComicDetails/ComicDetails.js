import PropTypes from 'prop-types';

import './ComicDetails.css';

const ComicDetails = ({ comic }) => {
    
    return (
        <div className="ComicDetails">
            <h1 className="ComicDetails_title">{comic.title}</h1>
            <div className="ComicDetails_details">
                <img 
                    src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
                    width="150"
                    height="225"
                    alt="Not found"
                />
                <p>{comic.description}</p>
            </div>
        </div>
    );
};

ComicDetails.propTypes = {
    comic: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        thumbnail: PropTypes.shape({
            path: PropTypes.string.isRequired,
            extension: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
};

export default ComicDetails;