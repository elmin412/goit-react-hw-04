import { useState, useEffect } from 'react';
import '../App/App.css';
import {fetchGallery} from '../../gallery-api';
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState(null)
  
  const openModal = (bigImg, alt) => {
    setSelectedImage(bigImg)
    setDescription(alt)
    setModalIsOpen(true)
  }

  const modalClose = () => {
    setSelectedImage(null)
    setDescription(null)
    setModalIsOpen(false)
  }

  const handleSearch = async (newQuery) => {
    setQuery(newQuery)
    setPage(1)
    setImages([])
  };
  
  const handleMoreBtn = () => {
    setPage(page + 1);
   
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

  async function getGallery() {
    try {
        setLoading(true);
        const data = await fetchGallery(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        }) }
       catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      } }
    getGallery()
    
  }, [page, query]);

  return (
    <>
      <h1> Search Photo</h1>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader/>}
      {error && <ErrorMessage/>}
      {images.length > 0 && <ImageGallery items={images} openModal={openModal} />}
      {images.length > 0 && <LoadMoreBtn onClick={handleMoreBtn} />}
      <ImageModal isOpen={modalIsOpen} onClose={modalClose} modalimg={selectedImage} alt={description} />
    </>
  )
}

export default App


