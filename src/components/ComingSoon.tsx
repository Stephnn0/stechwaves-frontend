import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ImageComponent = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    console.log(form);

    emailjs
      .sendForm(
        "service_xdb540l",
        "template_nf5ucwd",
        form.current as unknown as string,
        "DqNYxANfyrS45nhUB"
      )
      .then(
        (result) => {
          setShowPopup(true);
          console.log(result.text);
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      });
    console.log("sent");
  };

  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-black  z-0"
        style={{
          backgroundImage: "url('/img/nice.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 ">
        {/* Message */}
        {/* <h1 className="text-5xl font-bold mb-4 text-white text-center">
          STECHWAVES
        </h1> */}
        <h1 className="text-5xl font-bold mb-4 text-center">
          {/* Apply green gradient to the text */}
          <span className="text-gradient bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
            STECHWAVES
          </span>
        </h1>

        <p className="text-2xl  mb-4 text-white">
          Let's work on your next project!
        </p>

        {/* Form */}
        <form
          ref={form as React.RefObject<HTMLFormElement>}
          className="bg-white bg-opacity-25 rounded-lg p-8"
          onSubmit={sendEmail}
        >
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>
          {isSending ? (
            <button className="w-full border border-green-500 text-green-500 py-2 rounded-lg hover:bg-green-700 hover:text-white transition duration-300">
              sending...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full border border-green-500 text-green-500 py-2 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
            >
              Send
            </button>
          )}
        </form>
        {showPopup && (
          <h5 className="text-green-600">Email sent successfully</h5>
        )}
      </div>
    </div>
  );
};

export default ImageComponent;
