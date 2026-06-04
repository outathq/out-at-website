(function () {
  const form = document.querySelector("[data-join-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const submitButton = form.querySelector("button[type='submit']");

  function setStatus(message, state) {
    status.textContent = message;
    status.dataset.state = state;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const originalLabel = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Sending";
    setStatus("", "");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("You’re in the right place 🎉\n\nThanks for requesting to join Out At.\n\nWe’ll review your details and send you an email shortly with the next step.\n\nNo spam. No pressure. Just good people and good plans.", "success");
    } catch (error) {
      setStatus("Something didn’t send. Please try again, or email hello@outat.co.uk.", "error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
    }
  });
})();
