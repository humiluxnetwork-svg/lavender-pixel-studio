// Sends form submissions to the agency Gmail via FormSubmit (no backend needed).
export const OWNER_EMAIL = "humiluxnetwork@gmail.com";
export const WHATSAPP_URL = "https://wa.me/2349120794635?text=" + encodeURIComponent("Hi Humilux Network, I'd like to talk about a project.");

export async function sendForm(subject: string, form: HTMLFormElement) {
  const data: Record<string, string> = { _subject: subject, _template: "table", _captcha: "false" };
  new FormData(form).forEach((v, k) => { data[k] = String(v).slice(0, 2000); });
  const res = await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to send");
}
