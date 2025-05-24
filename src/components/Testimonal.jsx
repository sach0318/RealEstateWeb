import { assets, testimonialsData } from "../assets/assets";

const Testimonal = () => {
  return (
    <div
      className=" container mx-auto py-10 lg:px-32 w-full overflow-hidden  "
      id="Testimonals"
    >
      <h1 className=" text-2xl sm:text-4xl font-bold mb-2 text-center  ">
        Customer
        <span className=" underline underline-offset-4 decoration-1 under font-light   ">
          Testimonal
        </span>
      </h1>
      <p className="  text-center  text-gray-500  mb-12 max-w-80 mx-auto   ">
        Real Stories from those who found Home with Us
      </p>

      <div className=" flex flex-wrap justify-center gap-8    ">
        {testimonialsData.map((t, i) => (
          <div
            key={i}
            className="  max-w-[340px] border-0.5 shadow-lg rounded px-8 py-12 text-center   "
          >
            <img
              className="  w-20 h-20 rounded-full mx-auto mb-4  "
              src={t.image}
              alt="img"
            />
            <h2 className=" text-xl text-gray-700 font-medium    ">{t.name}</h2>
            <p className=" text-gray-500 mb-4 text-sm  "  > {t.title} </p>
            <div className="  flex justify-center gap-1 text-red-500 mb-4  ">
              {Array.from({ length: t.rating }, (item, ind) => (
                <img key={ind} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600"> {t.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonal;
