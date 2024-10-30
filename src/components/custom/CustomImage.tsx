import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

export interface ICustomImageProps extends ImageProps {
  defaultImage?: string;
}

const CustomImage = ({
  src,
  defaultImage,
  alt = 'error',
  ...props
}: ICustomImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc || '/images/logo-main.png'}
      onError={() => {
        setImgSrc(defaultImage || '/images/logo-main.png');
      }}
      alt={alt}
      quality={100}
      sizes='(max-width: 1024px) 70vw, (max-width: 640px) 50vw, 100vw' // disable warning
      {...props}
    />
  );
};

export default CustomImage;
