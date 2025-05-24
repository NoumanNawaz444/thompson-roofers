'use client';
import InfoImageOne from "@/images/InfoImage-1.jpeg"
import Image from 'next/image';
import Link from 'next/link';

const TextImage = (
  {
    topPara,
    imageSrc,
    title,
    descriptionOne,
    descriptionTwo,
    linkHref,
    linkText
  }: {
    topPara?: string;
    imageSrc?: string;
    title?: string;
    descriptionOne?: string;
    descriptionTwo?: string;
    linkHref?: string;
    linkText?: string;
  }
) => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between gap-8 px-6 py-12  mx-auto">
      {/* Left Image */}
      <div className="flex-1 w-full">
        <Image
          src={InfoImageOne.src}
          alt="Architects discussing"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="flex-1 w-full">
        <p className="text-md text-yellow-900 mb-2 font-semibold ">{topPara}</p>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-snug text-yellow-950">
          {title}
        </h2>

        <p className="text-gray-700 mb-4 md:text-xl">
          {descriptionOne}
        </p>

        <p className="text-gray-700 mb-6 md:text-xl">
          {descriptionTwo}
        </p>

        <Link href={`${linkHref}`}>
          <span className="inline-block text-md text-white p-3 px-6 transition-all  font-semibold hover:rounded-full bg-yellow-900 ">
            {linkText}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default TextImage;
