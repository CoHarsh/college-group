import React from 'react'
import NewItemBar from '../NewItemBar'

function AngularList() {
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


        <iframe src="https://www.youtube.com/embed/videoseries?list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'20px',
            'width':'100%',
            'height':'90vh'
          }
        }></iframe>

        <iframe  src="https://www.youtube.com/embed/0LhBvp8qpro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'40px',
            'width':'100%',
            'height':'90vh'
          }
        }></iframe>

        <iframe  src="https://www.youtube.com/embed/k5E2AVpwsko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={
          {
            'marginTop':'40px',
            'width':'100%',
            'height':'90vh'
          }}></iframe>

      </div>

    </div>
  )
}


export default AngularList