import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export const Route = createFileRoute(
  "/verify-email/$token"
)({
  component: VerifyEmailPage,
});

function VerifyEmailPage() {
  const { token } = Route.useParams();

  const [message, setMessage] = useState(
    "Verifying your email..."
  );

  useEffect(() => {
    const verify = async () => {
      try {
        await axios.get(
          `http://localhost:5000/api/verify-email/${token}`
        );

        setMessage(
          "✅ Email verified successfully!"
        );
      } catch (error) {
        setMessage(
          "❌ Verification failed."
        );
      }
    };

    verify();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="bg-slate-900 p-8 rounded-xl text-center">
        <h1 className="text-3xl font-bold mb-4">
          Email Verification
        </h1>

        <p>{message}</p>
      </div>
    </div>
  );
}