export default function Card(props) {
    
  return (
    <div className="sm:flex items-center sm:flex-col gap-5 md:flex md:flex-col lg:flex lg:flex-row xl:flex xl:flex-row">
      <div className="  w-60 h-[350px]  overflow-hidden rounded-xl">
        <img className="w-60 h-[350px]" src={`${props.imageUrl}`} alt="pic" />
      </div>
      <div className="max-w-xl flex flex-col justify-center">
        <div className="flex flex-row gap-2 items-center">
          <img className="w-3 h-4 text-primary" src="/loc.png" alt="Loc" />
          <h1 className="text-xl tracking-widest">
            {props.location}
          </h1>
          <a target="_blank"
            className="text-xl px-2 tracking-wider underline font-bold text-gray-600"
            href={`${props.googleMapsUrl}`}
          >
            View On google
          </a>
        </div>
        <h1 className="text-5xl font-semibold text-gray-700 py-5 font-mono">
        {props.title}
        </h1>
        <p className="text-xl text-gray-700 tracking-normal py-4 font-bold">
          {" "}
          {props.startDate} - {props.endDate}
        </p>
        <p className="text-wrap text-gray-700 text-xl">
          {props.description}
        </p>
      </div>
    </div>
  );
}
