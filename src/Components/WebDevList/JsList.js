import React from 'react'
import NewItemBar from '../NewItemBar'

function JsList() {
  return (
    <div>
      <NewItemBar/>
      <div className='html-list-container' style={
        {
          'display':'grid',
          'gridTemplateColumns':'1fr',
          'width':'95%',
          'height':'95vh',
          'margin':'0 0 0 2.5%',
          'overflow':'scroll'
        }
      }>
        <iframe src="https://www.youtube.com/embed/videoseries?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'40px',
            'width':'100%',
            'height':'90vh'
          }
        }></iframe>

        <iframe src="https://www.youtube.com/embed/hKB-YGF14SY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'40px',
            'width':'100%',
            'height':'90vh'
          }
        }></iframe>

        <iframe src="https://www.youtube.com/embed/W6NZfCO5SIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'40px',
            'width':'100%',
            'height':'90vh'
          }
        }></iframe>

        <iframe  src="https://www.youtube.com/embed/PkZNo7MFNFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'40px',
            'width':'100%',
            'height':'90vh'
          }}></iframe>

      </div>

    </div>
  )
}

export default JsList