import { Link } from "react-router-dom";

const EventCard = (props) => {
  const date = new Date(props.dateTime);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div className=" w-full flex flex-col p-4 bg-gray-100 rounded-xl lg:w-96">
      <div className=" w-full flex text-2xl">{props.name}</div>
      <div className=" flex w-full mt-2">
        <div className=" flex flex-col w-1/2">
          <span>{`${day}/${month}/${year}`}</span>
          <span>{`₹${props.price == "" ? "0" : props.price} onwards`}</span>
        </div>
        <div className=" flex w-1/2 justify-end items-end">
          {`${props.city}, ${props.state}`}
        </div>
      </div>
      <Link
        className=" w-full flex text-xl justify-center mt-2 bg-gray-950 text-white rounded-lg py-4 hover:bg-white hover:text-gray-950 hover:outline hover:outline-2 transition-all duration-150 hover:shadow-2xl "
        to={`/events/${props.id}`}
      >
        Book Now
      </Link>
    </div>
  );
};

export default EventCard;
