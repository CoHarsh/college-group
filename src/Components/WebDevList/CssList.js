import React from 'react'
import NewItemBar from '../NewItemBar'

function CssList() {
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

        <iframe width="560" height="315" src="https://www.youtube.com/embed/yfoY53QXEnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'40px',
            'width':'100%',
            'height':'90vh'
          }}></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/KN6oBEOz2ZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'40px',
            'width':'100%',
            'height':'90vh'
          }}></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/Edsxf_NBFrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'40px',
            'width':'100%',
            'height':'90vh'
          }}></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'40px',
            'width':'100%',
            'height':'90vh'
          }}></iframe>

        <iframe  src="https://www.youtube.com/embed/videoseries?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'40px',
            'width':'100%',
            'height':'90vh'
          }}></iframe>

      </div>

    </div>

  )
}

export default CssList