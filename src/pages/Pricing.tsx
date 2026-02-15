import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "₹0",
    desc: "Best for beginners",
    features: [
      "1 Resume Template",
      "Basic Resume Builder",
      "Download PDF",
      "Community Support",
    ],
    color: "bg-gray-200",
    button: "Start Free",
  },
  {
    name: "Pro",
    price: "₹199/month",
    desc: "Best for students & job seekers",
    features: [
      "20 Professional Templates",
      "ATS Checker",
      "Unlimited Downloads",
      "Priority Support",
    ],
    color: "bg-indigo-600 text-white",
    button: "Buy Pro",
  },
  {
    name: "Premium",
    price: "₹499/month",
    desc: "Best for professionals",
    features: [
      "Everything in Pro",
      "AI Resume Suggestions",
      "Cover Letter Builder",
      "LinkedIn Optimizer",
    ],
    color: "bg-yellow-400",
    button: "Go Premium",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-6">

      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Choose Your Plan
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`p-8 rounded-2xl shadow-xl ${plan.color}`}
          >

            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-lg mb-4">{plan.price}</p>
            <p className="mb-6">{plan.desc}</p>

            <ul className="space-y-2 mb-6">
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>

            <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:opacity-80">
              {plan.button}
            </button>

          </motion.div>
        ))}

      </div>
    </div>
  );
}
