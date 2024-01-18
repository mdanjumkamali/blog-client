import { Card, CardContent } from "@/components/ui/card";
import { BigCardProp } from "@/interface";

const SmallCard = ({
  title,
  description,
  imgUrl,
  date,
  author,
}: BigCardProp) => {
  const wordsArray = description.split(".");
  const shortenedContent = wordsArray.slice(0, 1).join(" ") + ".";
  return (
    <div className="mt-4 ">
      <Card className="w-[480px]">
        <CardContent className="mt-4">
          <img src={imgUrl} alt="title" className=" rounded-2xl" />
        </CardContent>
        <CardContent className="text-2xl font-semibold">{title}</CardContent>
        <CardContent>{shortenedContent}</CardContent>
        <CardContent className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src={imgUrl} alt={author} className="rounded-full w-10 h-10" />
            <p className="text-lg font-semibold">{author}</p>
          </div>
          <div>{date}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmallCard;
