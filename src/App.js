import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // State
  // Done in 3 Steps
  // 1 - Create State variable
  const [step, setStep] = useState(1);
  // is open state
  const [isOpen, setIsOpen] = useState(true);

  // Create Event Handler Funcs Inside Component
  function handlePrevious() {
    // 2 -> Update state
    if (step > 1) setStep((currStep) => currStep - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((currStep) => currStep + 1);
      // setStep((currStep) => currStep + 1);
    }
    // 2 -> Update state
  }
  function handleClose() {
    setIsOpen((currState) => !currState);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <ButtonFunc
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
            >
              <span>👈</span> Previous{" "}
            </ButtonFunc>
            <ButtonFunc bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </ButtonFunc>
          </div>
        </div>
      )}
    </>
  );
}
// Reusable Step Message
function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}
// Reusable BTN
function ButtonFunc({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
