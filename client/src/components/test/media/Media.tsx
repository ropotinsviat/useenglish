import { IMedia } from "../../../types/media";

interface MediaProps {
  media: IMedia;
}

function Media({ media }: MediaProps) {
  switch (media.type) {
    case "text":
      return (
        <>
          {(media as IMedia).content.split("\n").map((line, index) => (
            <p key={index} className="text-xl text=[#333]">
              {line}
            </p>
          ))}
        </>
      );

    case "video":
      return (
        <iframe
          src={media.content}
          title="Video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="mx-auto w-full max-w-[1000px] aspect-video selected-border border-[4px] rounded-md"
        />
      );

    case "image":
      return (
        <img
          className="mx-auto w-full max-w-[1000px]  selected-border border-[4px] rounded-md"
          src={media.content}
          alt="Media content"
        />
      );

    case "audio":
      return (
        <audio controls className="mx-auto my-8 w-full max-w-[900px]">
          <source src={media.content} type="audio/ogg" />
        </audio>
      );
  }
}

export default Media;
