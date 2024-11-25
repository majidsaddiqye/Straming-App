import loadering from "/loadering.gif";
const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className=" h-[60%] object-cover" src={loadering} alt="" />
    </div>
  );
};

export default Loading;
