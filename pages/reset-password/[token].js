import { useRef, useState } from "react";
import classes from "./profile-form.module.css";

function ResetPasswordPage() {
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;
    const enteredConfirmPassword = confirmPasswordRef.current.value;
  }

  return (
    <section className={classes.profile}>
      <h1>Reset Password</h1>

      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <div className={classes.inputWrapper}>
            <input
              id="new-password"
              ref={newPasswordRef}
              autoComplete="new-password"
            />
            <button type="button" className={classes.toggle}></button>
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="confirm-password">Confirm New Password</label>
          <div className={classes.inputWrapper}>
            <input
              id="confirm-password"
              ref={confirmPasswordRef}
              autoComplete="new-password"
            />
            <button type="button" className={classes.toggle}></button>
          </div>
        </div>

        <p className={classes.helperText}>
          Use at least 7 characters and make sure both passwords match.
        </p>

        <div className={classes.action}>
          <button disabled={isLoading}>
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ResetPasswordPage;
