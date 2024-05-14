import React from 'react'
import "./RecommendedVideos.css"
import Videocard from "./VideoCard.js"

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className='recommendedVideos__videos'>
          <Videocard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnj2GhFZw8QJt4JX2v2n6N8o4W7Z4lY2j2Vc3b1z=s68-c-k-c0x00ffffff-no-rj"
          channel="Sonny Sangha"
          image="https://i.ytimg.com/vi/0pThnRneDjw/maxresdefault.jpg"
          />
          <Videocard
          title="What is React and why you should learn it in 2020"
          views="1.3M views"
          timestamp="1 week ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnj2GhFZw8QJt4JX2v2n6N8o4W7Z4lY2j2Vc3b1z=s68-c-k-c0x00ffffff-no-rj"
          channel="Sonny Sangha"
          image="https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg"
          />            
          <Videocard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnj2GhFZw8QJt4JX2v2n6N8o4W7Z4lY2j2Vc3b1z=s68-c-k-c0x00ffffff-no-rj"
          channel="Sonny Sangha"
          image="https://i.ytimg.com/vi/0pThnRneDjw/maxresdefault.jpg"
          />
          <Videocard
          title="What is React and why you should learn it in 2020"
          views="1.3M views"
          timestamp="1 week ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnj2GhFZw8QJt4JX2v2n6N8o4W7Z4lY2j2Vc3b1z=s68-c-k-c0x00ffffff-no-rj"
          channel="Sonny Sangha"
          image="https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg"
          />       
           <Videocard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnj2GhFZw8QJt4JX2v2n6N8o4W7Z4lY2j2Vc3b1z=s68-c-k-c0x00ffffff-no-rj"
          channel="Sonny Sangha"
          image="https://i.ytimg.com/vi/0pThnRneDjw/maxresdefault.jpg"
          />
          <Videocard
          title="What is React and why you should learn it in 2020"
          views="1.3M views"
          timestamp="1 week ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnj2GhFZw8QJt4JX2v2n6N8o4W7Z4lY2j2Vc3b1z=s68-c-k-c0x00ffffff-no-rj"
          channel="Sonny Sangha"
          image="https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg"
          />       
        </div>
        </div>
  )
}

export default RecommendedVideos