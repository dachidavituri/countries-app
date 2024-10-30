import styles from "./otp.module.css";
import { useState, useRef, ChangeEvent } from "react";
import useLangauge from "@/useLanguage";
import { OtpProps } from "@/info";
import { otpInputLabels } from "@/info";
const Otp: React.FC<OtpProps> = ({ length }) => {
  const lang = useLangauge();
  console.log(lang);
  const [inputs, setInputs] = useState(
    Array.from({ length }, () => ({ value: "" })),
  );

  const [joinedPassword, setJoinedPassword] = useState("");

  const inputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  const setInputRef = (element: HTMLInputElement | null, index: number) => {
    inputRefs.current[index] = element;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;

    if (value.match(/^\d$/)) {
      const newInputs = [...inputs];
      newInputs[index].value = value;
      setInputs(newInputs);

      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
      if (index == length - 1) {
        inputRefs.current[index]?.blur();
        setJoinedPassword(inputs.map((obj) => obj.value).join(""));
      }
    }
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key == "Backspace") {
      if (index >= 0) {
        const newInputs = [...inputs];
        newInputs[index].value = "";
        setInputs(newInputs);
        setJoinedPassword(inputs.map((obj) => obj.value).join(""));
        inputRefs.current[index - 1]?.focus();
      }
    }
  };
  return (
    <div className={styles.otpSection}>
      <h1>{otpInputLabels[lang].password}</h1>
      <div>
        {inputs.map((input, i) => (
          <input
            key={i}
            className={styles.input}
            onChange={(e) => handleInputChange(e, i)}
            ref={(elemenet) => setInputRef(elemenet, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            value={input.value}
            maxLength={1}
            autoFocus={i === 0}
          />
        ))}
      </div>
      <h2>
        {otpInputLabels[lang].code}{" "}
        {joinedPassword.length == length && joinedPassword}
      </h2>
    </div>
  );
};
export default Otp;
