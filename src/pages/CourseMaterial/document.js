import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPopUpMaterial } from '../../redux/actions/CoursesAction'

const CourseMaterial = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
//   const {id} = useParams()
  const dispatch = useDispatch()
  const {popUpMaterial} = useSelector(state => state.courses)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    dispatch(getPopUpMaterial('6034f3adba842b0022e521e8'));
    }, [dispatch]);

    console.log(popUpMaterial[0].material)
  return (
    <>
    {popUpMaterial === null ? (
        <div id='loader'></div>
    ) : (
        <div>
        <Document
            file=''
            onLoadSuccess={onDocumentLoadSuccess}
        >
            <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        </div>
    )}
    </>
  );
}

export default CourseMaterial