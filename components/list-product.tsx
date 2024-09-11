import Image from "next/image";
import Link from "next/link";

interface ListProductProps {
  id: number;
  title: string;
  photo: string;
  created_at: Date;
  price: number;
}

export default function ListProduct({
  title,
  photo,
  created_at,
  price,
  id,
}: ListProductProps) {
  return (
    <Link href={`products/${id}`} className="flex gap-5">
      <div className="relative size-28 overflow-hidden rounded-lg">
        <Image fill src={photo} alt={title} />
      </div>
      <div className="flex flex-col justify-center gap-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="text-sm">{created_at.toString()}</span>
        <span className="text-lg font-bold">{price}</span>
      </div>
    </Link>
  );
}
