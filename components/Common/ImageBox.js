import { Image, Placeholder, Transformation } from 'cloudinary-react';

const ImageBox = ({ alt="", publicId}) => (
    <Image
        alt={alt}
        cloudName={process.env.NEXT_PUBLIC_CLOUD_NAME}
        secure={true}
        publicId={publicId}
        dpr="auto"
        responsive
        width="auto"
        crop="scale"
        loading="lazy"
        responsiveUseBreakpoints="true"
    >
        <Transformation quality="auto" fetchFormat="auto" />
        <Placeholder type="predominant" />
    </Image>
)

export default ImageBox;