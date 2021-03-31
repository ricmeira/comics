import React, { useState } from 'react';
import axios from 'axios';

import ComicDetails from '../../components/ComicList/Comic/ComicDetails/ComicDetails';
import Modal from '../../components/UI/Modal/modal';
import Paginator from '../../components/UI/Paginator/Paginator';
import ComicList from '../../components/ComicList/ComicList';
import { MARVEL_URL, MARVEL_API_KEY, NUMBER_COMICS_PER_REQUISITION } from "../../constants/constants";
import Background from "../../assets/images/ironman.jpg";
import './ComicsListPage.css';

const ComicsListPage = () => {
    const [ searchValue, setSearchValue ] = useState("");
    const [ comicList, setComicList ] = useState([]);
    const [ comicModal, isComicModal ] = useState(false);
    const [ selectedComic, setSelectedComic ] = useState(null);
    const [ loading, isLoading ] = useState(false);
    const [ paginas, setPaginas ] = useState(null); 

    const executeSearch = offset => {
        isLoading(true);
        axios.get(`${MARVEL_URL}?apikey=${MARVEL_API_KEY}&orderBy=-focDate&title=${searchValue}&offset=${offset}`).then(response => {
            const comicsArray = [];

            response.data.data.results.forEach(element => {
                comicsArray.push({
                    id: element.id,
                    title: element.title,
                    description: element.description,
                    thumbnail: element.thumbnail,
                    selected: false
                })    
            });

            setComicList(comicsArray);
            setPaginas({
                current: offset,
                total: response.data.data.total,
            });
            isLoading(false);
        }).catch(() => {
            isLoading(false);
        });
    };

    const onComicClicked = comic => {
        isComicModal(currentValue => !currentValue);
        setSelectedComic(comic);
    };

    const onComicSelected = (event, comic) => {
        event.stopPropagation();

        const copyComicsList = [...comicList];
        const copyComicPos = copyComicsList.findIndex(element => (element.id === comic.id));
        const copyComic = copyComicsList[copyComicPos];
        copyComic.selected = true;
        copyComicsList[copyComicPos] = copyComic;

        setComicList(copyComicsList);
    };

    const sendEmail = () => {
        
    };

    return (
        <>
            {selectedComic ? (
            <Modal 
                show={comicModal}
                modalClosed={() => isComicModal(false)}>
                <ComicDetails
                    comic={selectedComic}
                />
            </Modal>) : null}
            <div className="Main" style={{backgroundImage: `url(${Background})`, backgroundSize: "cover"}}>
                <input className="Main_input" onChange={event => setSearchValue(event.target.value)}/>
                <button className="Main_button" onClick={() => executeSearch(0)}> Search </button>
                <ComicList
                    comicList={comicList}
                    comicClicked={onComicClicked}
                    comicSelected={onComicSelected}
                    loading={loading}
                />
                {paginas ?
                    <Paginator
                        currentEntry={paginas.current}
                        totalEntries={paginas.total}
                        numberPerPage={NUMBER_COMICS_PER_REQUISITION}
                        changePage={executeSearch}
                    />
                    : null
                }
                <button className="Main_button" onClick={sendEmail}>Enviar por email</button>
            </div>
        </>
    );
};

export default ComicsListPage;