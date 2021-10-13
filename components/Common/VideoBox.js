import { Transformation, Video } from 'cloudinary-react';

const VideoBox = ({ className = "", publicId }) => (
    <Video
        playsInline={true}
        autoPlay={true}
        loop={true}
        muted={true}
        secure="true"
        className={className}
        cloudName={process.env.NEXT_PUBLIC_CLOUD_NAME}
        publicId={publicId}
    >
        <Transformation quality={process.env.NEXT_PUBLIC_VIDEO_QUALITY} />
    </Video>
)

export default VideoBox;