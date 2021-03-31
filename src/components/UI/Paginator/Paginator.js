import PropTypes from 'prop-types';
import React from 'react';

import './Paginator.css';

const Paginator = ({ currentEntry, totalEntries, numberPerPage, changePage }) => {
    console.log("Pagintor rendered");

    return (
        <div>
            <button
                className="Paginator_button"
                onClick={() => changePage(currentEntry - numberPerPage)}
                disabled={currentEntry === 0}>
                Anterior
            </button>
            <span>{`Mostrando ${currentEntry}-${currentEntry + numberPerPage} de ${totalEntries}`}</span>
            <button
                className="Paginator_button"
                onClick={() => changePage(currentEntry + numberPerPage)}>
                Próxima
            </button>
        </div>
    )
};

Paginator.propTypes = {
    currentEntry: PropTypes.number.isRequired,
    totalEntries: PropTypes.number.isRequired,
    numberPerPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
};

export default React.memo(Paginator, (prevProps, nextProps) => nextProps.currentEntry === prevProps.currentEntry && prevProps.totalEntries === nextProps.totalEntries);