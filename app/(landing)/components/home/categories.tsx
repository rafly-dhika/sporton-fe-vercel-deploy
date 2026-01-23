import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// const categoryList = [
//   { name: "Badminton", imgUrl: "category-badminton.png" },
//   { name: "Basketball", imgUrl: "category-basketball.png" },
//   { name: "Football", imgUrl: "category-football.png" },
//   { name: "Running", imgUrl: "category-running.png" },
//   { name: "Swimming", imgUrl: "category-swimming.png" },
//   { name: "Tennis", imgUrl: "category-tennis.png" },
// ];

type TCategoriesProps = {
  categories: Category[];
};

const CategoriesSection = ({ categories }: TCategoriesProps) => {
  return (
    <section id="category-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse by Categories</h2>
        <Link href="#" className="flex gap-2 text-primary">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-8">
        {categories.map((category) => (
          <div
            className="rounded-lg bg-linear-to-r  from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"
            key={category._id}
          >
            <div className="self-center">
              <Image
                src={getImageUrl(category.imageUrl)}
                width={86}
                height={86}
                alt="Categories Icon"
                className="mb-2.5"
              />
              <div className="text-primary font-meidium text-xl text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
