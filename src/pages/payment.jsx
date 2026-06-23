import { useState } from "react";
import { FaPaypal, FaCopy, FaCheckCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Payment() {
    const [copied, setCopied] = useState("");

    const usdtAddress =
        "YOUR_USDT_WALLET_ADDRESS_HERE";

    const paypalEmail =
        "payments@apexrecruiters.com";

    const location = useLocation();

    const packageName =
        location.state?.packageName || "Custom Service";

    const packagePrice =
        location.state?.packagePrice || "Contact Us";

    const copyText = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);

        setTimeout(() => {
            setCopied("");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero */}

            <section className="bg-[#0F172A] py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold text-white">
                        Secure Payment Options
                    </h1>

                    <p className="text-slate-300 mt-6 text-lg">
                        Complete your order using cryptocurrency or PayPal.
                    </p>

                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-10">

                <div className="bg-white shadow-2xl rounded-3xl p-8 border-l-8 border-yellow-400">

                    <h2 className="text-3xl font-bold text-[#0F172A]">
                        Selected Package
                    </h2>

                    <div className="mt-6">

                        <p className="text-gray-600">
                            Package Chosen
                        </p>

                        <h3 className="text-2xl font-bold mt-1">
                            {packageName}
                        </h3>

                        <div className="mt-4">

                            <p className="text-gray-600">
                                Amount Due
                            </p>

                            <p className="text-4xl font-bold text-yellow-500">
                                ${packagePrice}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="max-w-6xl mx-auto px-6 py-20">

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* USDT */}

                    <div className="bg-white rounded-3xl shadow-lg p-8">

                        <h2 className="text-3xl font-bold text-[#0F172A]">
                            USDT Payment
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Send payment using USDT (TRC20 recommended).
                        </p>

                        <div className="mt-8 bg-slate-100 rounded-xl p-4 break-all">
                            {usdtAddress}
                        </div>

                        <button
                            onClick={() =>
                                copyText(usdtAddress, "wallet")
                            }
                            className="mt-6 bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                        >
                            <FaCopy />
                            Copy Wallet Address
                        </button>

                        {copied === "wallet" && (
                            <p className="mt-3 text-green-600 flex items-center gap-2">
                                <FaCheckCircle />
                                Wallet Address Copied
                            </p>
                        )}

                        <div className="mt-8 border-t pt-6">
                            <h3 className="font-bold text-xl">
                                Instructions
                            </h3>

                            <ul className="mt-4 space-y-3 text-gray-700">
                                <li>• Send the exact package amount.</li>
                                <li>• Use USDT TRC20 whenever possible.</li>
                                <li>• Save your transaction receipt.</li>
                                <li>
                                    • Email the transaction hash and your
                                    name after payment.
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* PAYPAL */}

                    <div className="bg-white rounded-3xl shadow-lg p-8">

                        <div className="flex items-center gap-3">
                            <FaPaypal
                                size={36}
                                className="text-blue-600"
                            />

                            <h2 className="text-3xl font-bold text-[#0F172A]">
                                PayPal Payment
                            </h2>
                        </div>

                        <p className="mt-4 text-gray-600">
                            Send payment directly via PayPal.
                        </p>

                        <div className="mt-8 bg-slate-100 rounded-xl p-4 break-all">
                            {paypalEmail}
                        </div>

                        <button
                            onClick={() =>
                                copyText(paypalEmail, "paypal")
                            }
                            className="mt-6 bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                        >
                            <FaCopy />
                            Copy PayPal Email
                        </button>

                        {copied === "paypal" && (
                            <p className="mt-3 text-green-600 flex items-center gap-2">
                                <FaCheckCircle />
                                PayPal Email Copied
                            </p>
                        )}

                        <div className="mt-8 border-t pt-6">

                            <h3 className="font-bold text-xl">
                                PayPal Instructions
                            </h3>

                            <div className="mt-4 text-gray-700 space-y-4">

                                <p>
                                    Please send payment to the PayPal
                                    email above.
                                </p>

                                <p>
                                    When making payment, select:
                                </p>

                                <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-xl">
                                    <strong>
                                        Friends & Family
                                    </strong>
                                </div>

                                <p>
                                    Include your full name and package
                                    selected in the payment note.
                                </p>

                                <p>
                                    After payment, email your payment
                                    confirmation to our team for faster
                                    processing.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Notice */}

                <section className="mt-12">

                    <div className="bg-[#0F172A] rounded-3xl p-8 text-center">

                        <h3 className="text-3xl font-bold text-white">
                            Payment Confirmation
                        </h3>

                        <p className="text-slate-300 mt-4">
                            After completing payment, please email your
                            payment proof together with your selected
                            package name and full name.
                        </p>

                        <div className="bg-white mt-8 p-4 rounded-xl inline-block">

                            <p className="text-sm text-gray-500">
                                Send Payment Proof To
                            </p>

                            <p className="font-bold text-lg">
                                payments@apexrecruiters.com
                            </p>

                        </div>

                        <div className="mt-6">

                            <button
                                onClick={() =>
                                    navigator.clipboard.writeText(
                                        "payments@apexrecruiters.com"
                                    )
                                }
                                className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-semibold"
                            >
                                Copy Email Address
                            </button>

                        </div>

                    </div>
                    <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 mt-8">

                        <h4 className="font-bold text-lg">
                            After Payment
                        </h4>

                        <ul className="mt-3 space-y-2">
                            <li>✓ Send payment screenshot or transaction hash</li>
                            <li>✓ Include your full name</li>
                            <li>✓ Include your selected package</li>
                            <li>✓ Include the email you used during checkout</li>
                        </ul>

                    </div>

                </section>

            </div>

        </div>
    );
}
