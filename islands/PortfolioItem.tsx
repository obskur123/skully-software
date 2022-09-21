interface PortfolioItem {
  urlImageArray: string[];
  description: string;
  title: string;
  to: string;
  color: string;
}

export default function PortfolioItem(props: PortfolioItem) {
  return (
    <div
      class="flex flex-col rounded p-3 items-center shadow-xl hover:animate-pulse hover:cursor-pointer"
      style={{ backgroundColor: props.color }}
      onClick={() => window.open(props.to, '_blank')}
    >
      <div
        class={"grid grid-cols-" + props.urlImageArray.length +
          " gap-3 place-items-center my-3"}
      >
        {props.urlImageArray.map((url) => (
          <img src={url} class="h-16 w-16 hover:animate-spin" />
        ))}
      </div>
      <h2 class="font-bold text-center">{props.title}</h2>
      <p class="text-center">{props.description}</p>
    </div>
  );
}
