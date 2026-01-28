import Image from "next/image";
import { useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

type TImageUploadPreviewProps = {
  label?: string;
  value?: string | null;
  onChange: (file: File) => void;
  className?: string;
};

const ImageUploadPreview = ({
  label,
  value,
  onChange,
  className,
}: TImageUploadPreviewProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onChange(file);
  };

  return (
    <div className={className}>
      <div
        onClick={handleImageClick}
        className="cursor-pointer border-2 border-primary border-dashed bg-primary/5 rounded-lg h-50 flex flex-col justify-center items-center overflow-hidden relative"
      >
        {value ? (
          <Image
            src={value}
            alt="Preview Product"
            className="object-cover"
            width={190}
            height={190}
          />
        ) : (
          <>
            <FiUploadCloud className="text-primary" size={24} />
            <span className="text-sm font-medium">Click to Upload</span>
          </>
        )}

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ImageUploadPreview;
