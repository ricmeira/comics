import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

import ComicDetails from '../../components/ComicList/Comic/ComicDetails/ComicDetails';
import EmailForm from '../../components/EmailForm/EmailForm';
import Modal from '../../components/UI/Modal/Modal';
import Paginator from '../../components/UI/Paginator/Paginator';
import ComicList from '../../components/ComicList/ComicList';
import { MARVEL_URL, MARVEL_API_KEY, NUMBER_COMICS_PER_REQUISITION, EMAIL_TEMPLATE_NAME, EMAIL_USER_NAME, EMAIL_SERVICE_NAME } from "../../constants/constants";
import Background from "../../assets/images/ironman.jpg";
import './ComicsListPage.css';

const ComicsListPage = () => {
    const [ searchValue, setSearchValue ] = useState("");
    const [ comicList, setComicList ] = useState([]);
    const [ comicsSelectedList, setComicsSelectedList ] = useState(null);
    const [ comicModal, isComicModal ] = useState(false);
    const [ emailModal, isEmailModal ] = useState(false);
    const [ selectedComic, setSelectedComic ] = useState(null);
    const [ loading, isLoading ] = useState(false);
    const [ paginas, setPaginas ] = useState(null); 
    const [ errorMessage, setErrorMessage ] = useState(null); 

    const executeSearch = offset => {
        isLoading(true);
        axios.get(`${MARVEL_URL}?apikey=${MARVEL_API_KEY}&orderBy=-focDate&title=${searchValue}&offset=${offset}`).then(response => {
            const comicsArray = [];

            if(response.data.data.results.length > 0) {
                response.data.data.results.forEach(element => {
                    comicsArray.push({
                        id: element.id,
                        title: element.title,
                        description: element.description,
                        thumbnail: element.thumbnail,
                        creators: element.creators.items,
                    })    
                });

                setComicList(comicsArray);
                setPaginas({
                    current: offset,
                    total: response.data.data.total,
                });
                setErrorMessage(null);
            } else {
                setComicList([]);
                setErrorMessage("Nenhum quadrinho com esse titulo foi encontrado.");
                setPaginas(null);
            }
            setComicsSelectedList(null);
            isLoading(false);
        }).catch(() => {
            setErrorMessage("Houve um problema ao chamar o serviço. Tente novamente.");
            setComicsSelectedList(null);
            isLoading(false);
        });
    };

    const onComicClicked = comic => {
        isComicModal(currentValue => !currentValue);
        setSelectedComic(comic);
    };

    const onComicSelected = (event, comic) => {

        setComicsSelectedList(prevList => {
            const newList = prevList === null ? [] : [...prevList];

            const posItem = newList.findIndex(element => (element.id === comic.id));

            if (posItem === -1) {
                newList.push(comic);
            } else {
                newList.splice(posItem, 1);
            }
            console.log(newList);
            return newList;
        });
        
        event.stopPropagation();
    };

    const sendEmail = toEmail => {
        
        isEmailModal(false);
        console.log(comicsSelectedList);
        if (comicsSelectedList.length > 0) {
            const emailString = 
                comicsSelectedList.map(element => (`<h1>${element.title}</h1><img src=${element.thumbnail.path}/portrait_xlarge.${element.thumbnail.extension} /><p>${element.description}</p><hr>`))
                    .reduce((htmlString, currentValue) => htmlString.concat(currentValue), "");

            const templateParams = {
                to_email: toEmail,
                message: emailString
            };

            emailjs.send(EMAIL_SERVICE_NAME, EMAIL_TEMPLATE_NAME, templateParams, EMAIL_USER_NAME).then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        }
    };

    return (
        <>
            {comicModal ? (
            <Modal 
                show={comicModal}
                modalClosed={() => isComicModal(false)}>
                <ComicDetails
                    comic={selectedComic}
                />
            </Modal>) : null}
            {emailModal ? (
            <Modal 
                show={emailModal}
                modalClosed={() => isEmailModal(false)}>
                <EmailForm 
                    sendEmail={sendEmail}
                />
            </Modal>) : null}
            <div className="Main" style={{backgroundImage: `url(${Background})`, backgroundSize: "cover"}}>
                <div>
                    <input className="Main_input" onChange={event => setSearchValue(event.target.value)} placeholder="Pesquisa por titulo do quadrinho. Ex: Hulk."/>
                    <button className="Main_button" onClick={() => executeSearch(0)} disabled={searchValue.trim() === ""}> Pesquisar </button>
                </div>
                {errorMessage ? <p className="Main_text">{errorMessage}</p> : null}
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
                {comicList.length > 0 ? (
                    <button
                        className="Main_button Main_button_white"
                        onClick={() => isEmailModal(true)} disabled={comicsSelectedList === null || comicsSelectedList.length === 0}
                        >
                            Enviar por email
                    </button>
                    )
                    : null
                }
            </div>
        </>
    );
};

export default ComicsListPage;