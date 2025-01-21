import { FadeLoader } from "react-spinners";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <FadeLoader  color="#a39b9b" height={20} width={5}  margin={20} />
    </div>
  );
};

export default Loading;