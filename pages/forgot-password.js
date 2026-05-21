import { useRef, useState } from "react";
import classes from "./../components/resetPaaswor.module.css";

function ForgotPasswordPage() {
  const emailInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
  }

  return (
    <section className={classes.profile}>
      <h1>Forgot Password</h1>

      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            autoComplete="email"
          />
        </div>

        <div className={classes.action}>
          <button disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ForgotPasswordPage;
