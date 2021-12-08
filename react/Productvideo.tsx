import React from 'react'
import { useProduct } from 'vtex.product-context'
import { Video } from 'vtex.store-video'
import { useCssHandles } from 'vtex.css-handles'

interface ProductvideoProps {
  specification?: string
  fallbackvideo?: string
  name?: string
  description?: string,
  type?: string,
  poster?: string,
  controlsType?: string ,
  autoPlay?: boolean,
  muted?: boolean,
  loop?: boolean,
  playsInline?: boolean,
  width?: string,
  height?: string,
  PlayIcon?: string,
  PauseIcon?: string,
  VolumeOnIcon?: string,
  VoluemOffIcon?: string,
  FullscreenIcon?: string,
  

}

const CSS_HANDLES = [
  
  'containerEmpty',
  'videoContainer'
,
] as const

const Productvideo: StorefrontFunctionComponent<ProductvideoProps> = (
  { specification = "", 
    fallbackvideo = "",
    name = undefined,
    description = undefined,
    type = undefined,
    poster = undefined,
    controlsType = undefined,
    autoPlay = false,
    muted = false,
    loop = false,
    playsInline = false,
    width = undefined,
    height = undefined, 
    PlayIcon = "icon-play",
    PauseIcon = "icon-pause",
    VolumeOnIcon = "icon-volume",
    VoluemOffIcon = "icon-volume-off",
    FullscreenIcon = "icon-extend",
    
  }
  
  ) => {

  const  handles  = useCssHandles(CSS_HANDLES)

  const productContextValue = useProduct();
  var video=loadField();


  function loadField(){
    var output='';
    if(specification>=""){

      var fields= productContextValue.product?.properties || false;
      
      if(fields){

        for(var i=0; i<fields.length; i++){

          if(fields[i].name==specification && fields[i].values.length>0){
            
            output=fields[i].values[0];
            break;
          }
        }
      }
    }
    return output;
  }
  
  /*function activateProductContext(){
    console.log(productContextValue);
    console.log(specification);
    console.log("i got "+loadField());
    console.log("zeh video "+video)
    console.log("Zeh Fallback "+fallbackvideo)
  }*/

  function buildDom(){
    fallbackvideo = (typeof fallbackvideo == "undefined" ? "" : fallbackvideo);
    video = (typeof video == "undefined" ? "" : video);
    if(fallbackvideo.trim()<='' && video.trim() <='' ){
      console.log("no video found - hide ");
      return <div className={handles.containerEmpty} ></div>;
    }
    else{
      var finalvideo =( video.trim()>'' ? video : fallbackvideo);
      
      return (
        <div className={handles.videoContainer}>
          <Video name={name}
            description={description}
            type={type}
            poster={poster}
            controlsType={controlsType}
            autoPlay={autoPlay}
            muted={muted}
            loop = {loop}
            playsInline={playsInline} 
            width= {width}
            height={height} 
            PlayIcon={PlayIcon}
            PausIcon={PauseIcon}
            VolumeOnIcon={VolumeOnIcon}
            VolumeOffIcon={VoluemOffIcon}
            FullscreenIcon={FullscreenIcon}
            
            src={finalvideo}
            />
        </div>
      )
      
    }


  }
  
  
//<h3><button onClick={activateProductContext} >click me</button></h3>
  return ( <div>
    {buildDom()}
  </div> )
}


//Stuff for the site editor. Might not need it.
Productvideo.schema = {
  title: 'editor.video.title',
  description: 'editor.video.description',
  type: 'object',
  properties: {

    specification: {
            title: 'Video specification field name',
            description: 'in which field is the video stored?',
            type: 'string',
            default: undefined,
        },
      fallbackvideo: {
          title: 'Fallback video if specification not found.',
          description: 'leave empty to hide player',
          type: 'string',
          default: undefined,
      },

      name: {
        title: 'The Name of the Video.',
        description: 'Add this for SEO purposes',
        type: 'string',
        default: undefined,
    },
    description: {
      title: 'Description.',
      description: 'Video description for SEO and accessibility.',
      type: 'string',
      default: undefined,
  },
  type: {
      title: 'Type',
      description: 'The video Type',
      type: 'string',
      default: undefined,
  },
  poster: {
      title: 'Video Poster',
      description: 'Cover image to be displayed before playback',
      type: 'string',
      default: undefined,
  },
  controlsType: {
      title: 'Type of controls',
      description: 'Type of controls on HTML5 video: vtex, native or none',
      type: 'string',
      default: undefined,
  },
  autoPlay: {
      title: 'Autoplay',
      description: 'Whether the video plays automatically',
      type: 'boolean',
      default: false,
  },
  muted: {
      title: 'Muted',
      description: 'Play the video with no sound',
      type: 'boolean',
      default: false,
  },
  loop: {
      title: 'Loop',
      description: 'Play the video in a loop',
      type: 'boolean',
      default: false,
  },
  playsInline: {
      title: 'Plays inline',
      description: 'Whether the video plays inline or not',
      type: 'boolean',
      default: false,
  },
  width: {
      title: 'Width',
      description: 'The Width of the video in PX or %',
      type: 'string',
      default: undefined,
  },
  height: {
      title: 'height',
      description: 'The height of the video in PX or %',
      type: 'string',
      default: undefined,
  },
  PlayIcon: {
      title: 'Play Icon',
      description: 'Video Playback icon',
      type: 'string',
      default: 'icon-play',
  },
  PauseIcon: {
      title: 'Pause Icon',
      description: 'Video Pause Icon',
      type: 'string',
      default: 'icon-pause',
  },
  VolumeOnIcon: {
      title: 'Volume Icon',
      description: 'The icon to use for the volume-on control',
      type: 'string',
      default: 'icon-volume-on',
  },
  VolumeOffIcon: {
      title: 'Volume Icon',
      description: 'The icon to use for the volume-off control',
      type: 'string',
      default: 'icon-volume-off',
  },
    FullscreenIcon: {
      title: 'Fullscreen Icon',
      description: 'The icon used to switch to full screen',
      type: 'string',
      default: 'icon-extend',
  }

      

  },
}

export default Productvideo