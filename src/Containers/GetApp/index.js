import "./style.css";
import AppLinks from "../../Components/AppLinks";
import Button from "../../Components/FormControls/Button";
import Input from "../../Components/FormControls/Input";
import RadioGroup from "../../Components/FormControls/RadioGroup";
import { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "input":
      return { ...state, input: action.data };
    case "radio":
      return { ...state, shareType: action.data };
    default:
      return state;
  }
};

const GetApp = ({ page }) => {
  const [state, dispatch] = useReducer(formReducer, { shareType: "email", input: "" });

  const handleInputChange = (e) => {
    const element = e.target;
    const value = element.value;

    dispatch({ type: "input", data: value });
  };

  const handleRadioChange = (e) => {
    const element = e.target;
    const value = element.value;

    dispatch({ type: "radio", data: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`getAppComp ${page ? "page" : ""}`}>
      <div className="getApp-container set-width">
        <div className="getApp-demo">
          <img
            src={
              page
                ? "https://b.zmtcdn.com/web_assets/91fd934b79f23aeba3c3908837208ec71626083686.png"
                : "https://b.zmtcdn.com/data/pro/5722d9e687511d79616bcab92470734e1596187147.png"
            }
            alt="Zomato Mobile App"
          />
        </div>

        <div className="getApp-content">
          <h2>Get the Zomato App</h2>
          <p>We will send you a link, open it on your phone to download the app</p>

          <form onSubmit={handleSubmit}>
            <RadioGroup
              selection={state.shareType}
              name="shareType"
              items={[
                { label: "Email", value: "email" },
                { label: "Phone", value: "phone" },
              ]}
              onChange={handleRadioChange}
            />

            <div className="inputGroup">
              <Input onChange={handleInputChange} value={state.input} type="email" placeholder="Email" />
              <Button type="submit">Share App Link</Button>
            </div>
          </form>

          <div className="getApp-Links">
            <p>Download app from</p>
            <div>
              <AppLinks row={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
