import { Card, CardContent } from "@/components/ui/card";
import { BigCardProp } from "@/interface";

export const BigCard = ({
  title,
  description,
  imgUrl,
  date,
  author,
}: BigCardProp) => {
  const wordsArray = description.split(".");
  const shortenedContent = wordsArray.slice(0, 1).join(" ") + ".";
  return (
    <div>
      <Card className="cursor-pointer">
        <CardContent className="w-full mt-3">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-[250px] object-cover rounded-2xl"
          />
        </CardContent>
        <CardContent className="text-2xl font-semibold">{title}</CardContent>
        <CardContent className="">{shortenedContent}</CardContent>
        <CardContent className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={imgUrl} alt={author} className="rounded-full w-10 h-10" />
            <p className="text-lg font-semibold">{author}</p>
          </div>

          <div>{date}</div>
        </CardContent>
      </Card>
    </div>
  );
};
