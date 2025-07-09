import emailjs from "emailjs-com";

// Ideally define a type
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const handleSendEmail = async (
  form: FormData
): Promise<{ success: boolean }> => {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const templateParams = {
    from_name: form.name,
    from_email: form.email,
    subject: form.subject,
    message: form.message,
  };

  try {
    await emailjs.send(serviceID, templateID, templateParams, userID);
    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false };
  }
};
