import useSdkStore from "../../store";

const Sidebar = () => {
  const setRoomView = useSdkStore((state) => state.setRoomView);

  return (
    <div className="glassPanel w-96 p-2 flex items-center justify-center">
      <button
        type="button"
        onClick={() => setRoomView("code")}
        className="glassButton h-10 w-auto flex items-center justify-center text-sm rounded-xl font-bold px-6 mx-auto"
      >
        Code View
      </button>
    </div>
  );
};

export default Sidebar;
