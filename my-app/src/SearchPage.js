import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow.js'
import VideoRow from './VideoRow.js'
import TuneIcon from '@mui/icons-material/Tune';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
      />

      <hr/>
      <VideoRow
      views="1.4M"
      subs="659K"
      description="Do you want a FREE one hour training..."
      timestamp="59 seconds ago"
      channel="Clever Programmer"
      title="Let's build a YouTube Clone with REACT JS for beginners"
      image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
      />
      <VideoRow
      views="700K"
      subs="659K"
      description="Join the full React course: ..."
      timestamp="1 hour ago"
      channel="Clever Programmer"
      title="React JS - Full Course for Beginners"
      image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5Woi6Iy9J9qNf5DeddnrP4/36771086f157910592224d4ba252bf6a/GettyImages-1448317086.jpg?w=1500&h=720&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
      />
      <VideoRow
      views="2M"
      subs="659K"
      description="full stack web development tutorial for beginners"
      timestamp="1 day ago"
      channel="Clever Programmer"
      title="Full Stack Web Development Tutorial for Beginners"
      image="https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg"
      />
      <VideoRow
      views="1.4M"
      subs="659K"
      description="python tutorial for beginners"
      timestamp="1 week ago"
      channel="Clever Programmer"
      title="Python Tutorial for Beginners"
      image="https://cdn.mos.cms.futurecdn.net/CBHUAsfrHYAci3MTWZBsgN-1200-80.png"
      />
    </div>
  )
}

export default SearchPage