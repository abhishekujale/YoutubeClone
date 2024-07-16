
const VideoCard = (props:any) => {
  return (
    <div className=" mt-5 ml-5 ">
          <img  className="rounded-3xl" src={props.image} alt="" />
          <div className="grid grid-cols-12">
              <div className="col-span-1">
          <img className="rounded-full w-30 h-30 mt-3 " src={props.thumb}   alt="" />
              </div>
              <div className="col-span-11 mt-5 ml-5">
                  
                  <div >
                 {props.title}
                  </div>

                  <div className="col-span-11  text-gray-500 text-base  ">
                  {props.author}
                  </div>

                   <div className="col-span-11  text-gray-500 text-base">
                   {props.views} | {props.timestamp}
                   </div>
              </div>
              
          </div>
    </div>
  )
}

export default VideoCard
