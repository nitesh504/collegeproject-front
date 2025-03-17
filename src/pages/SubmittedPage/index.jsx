import { Checkmark } from "../../assets/index";
import { useNavigate } from "react-router-dom";

const SubmittedPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        background: "linear-gradient(to bottom, #FBE8E4, #E1D9FC)",
      }}
    >
      <div className="bg-[#F2EBEB] rounded-lg shadow-lg p-8 w-96 border-2 border-white">
        <div className="flex justify-center">
          <img src={Checkmark} alt="Checkmark" />
        </div>

        <h2 className="text-center text-2xl font-bold my-6">
          Successfully Submitted.
        </h2>

        <button
          onClick={handleSubmit}
          type="button"
          className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition flex justify-center items-center"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default SubmittedPage;
