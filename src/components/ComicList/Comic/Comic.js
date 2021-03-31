import PropTypes from 'prop-types';

import './Comic.css';

const Comic = ({ comic, comicClicked, comicSelected }) => {
    console.log(`Comic ${comic.id} rendered`);
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
                <input type="checkbox" onClick={(event) => comicSelected(event, comic)}/>
                <p>Selecionar para envio via email</p>
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