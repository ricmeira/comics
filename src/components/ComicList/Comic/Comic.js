import PropTypes from 'prop-types';

import './Comic.css';

const Comic = ({ comic, comicClicked, comicSelected }) => {
    return (
        <div className="Comic" onClick={() => comicClicked(comic)}>
            <img 
                src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
                width="150"
                height="225"
                alt="Not found"
            />
            <h3>{comic.title}</h3>
            <div className="Comic_select_email">
                <label><input type="checkbox" onClick={event => comicSelected(event, comic)}/>Selecionar para envio via email</label>
            </div>
        </div>
    );
};

Comic.propTypes = {
    comic: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.shape({
            path: PropTypes.string.isRequired,
            extension: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    comicClicked: PropTypes.func.isRequired,
    comicSelected: PropTypes.func.isRequired,
};

export default Comic;