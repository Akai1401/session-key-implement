import CustomImage, { ICustomImageProps } from './CustomImage';

const CustomBigImage = ({
  src,
  width,
  height,
  className,
  ...props
}: ICustomImageProps) => {
  return (
    <div
      style={{
        width: width + 'px',
        height: height + 'px',
      }}
      className='inline-block relative overflow-hidden'
    >
      <CustomImage
        width={width}
        height={height}
        src={src}
        className={`${className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        {...props}
      />
    </div>
  );
};

export default CustomBigImage;
