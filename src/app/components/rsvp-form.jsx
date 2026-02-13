'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function RSVPForm() {
  const [isAttending, setIsAttending] = useState(true);
  const [sendCashGift, setSendCashGift] = useState(true);
  const [bringingPlusOne, setBringingPlusOne] = useState(false);
  const [bringingChildren, setBringingChildren] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    relationship: '',
    cashGiftAmount: '',
    plusOneName: '',
    plusOneEmail: '',
    childrenCount: '0',
  });

  const accountDetails = [
    {
      name: 'NGN',
      beneficiary: 'Name: Praise Deleoluwo',
      accountNumber: 'Account number: 3433646412',
      bankName: 'Bank name: Page',
    },
    {
      name: 'GBP',
      beneficiary: 'Name: Praise Deleoluwo',
      accountNumber: 'Account number: 06775092',
      bankName: 'Bank name: Clear Bank',
    },
    {
      name: 'US DOLLARS',
      beneficiary: 'Beneficiary',
      accountNumber: 'IBAN: GB45 0308 7524 7607 00',
      bankName: 'Bank name: Beneficiary',
      address: 'Address',
      additionalInfo: 'Reversal UK Frernods, E14 5UT, London, United Kingdom',
      bic: 'Correspondent BIC: CHASGBLL',
    },
    {
      name: 'USDT',
      beneficiary: 'Network: TRC 20',
      accountNumber: 'Wallet: TUsc8sPQEcH84hh2c5Sy0u6k1qXsCDR',
    },
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        relationship: '',
        cashGiftAmount: '',
        plusOneName: '',
        plusOneEmail: '',
        childrenCount: '0',
      });
      setIsAttending(true);
      setSendCashGift(true);
      setBringingPlusOne(false);
      setBringingChildren(false);
    }, 3000);
  };

  return (
    <section className="py-14 md:py-24 px-4 md:px-8 bg-[#FCFBF8]">
      <div className="max-w-2xl mx-auto">
        {/* RSVP Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-3">
            <img src="/solar-heart-shine.svg" alt="Heart" className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray mb-4 font-junge">
            RSVP
          </h2>
          <p className="text-sm md:text-base text-gray mb-3">
            Kindly respond by May 30th 2026
          </p>
          <div className="flex justify-center">
            <img src="/solar-line.svg" alt="" />
          </div>
        </div>

        {/* Attendance Question - Outside Card */}
        <div className="text-center mb-6 md:mb-8">
          <label className="block text-sm md:text-base font-semibold text-gray mb-4">
            Will you be attending? <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center justify-center gap-6 md:gap-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={isAttending === true}
                onChange={() => setIsAttending(true)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm md:text-base font-medium text-gray">YES</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="attending"
                value="no"
                checked={isAttending === false}
                onChange={() => setIsAttending(false)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm md:text-base font-medium text-gray">NO</span>
            </label>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white card px-6 md:px-8 py-8 md:py-12">
          {isSubmitted ? (
            <div className="text-center py-12">
              <h3 className="text-3xl md:text-4xl font-light text-gray mb-4 font-junge">
                Thank you for stopping by!
              </h3>
              <p className="text-sm md:text-base text-gray/70">
                We've received your RSVP and will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">

            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray mb-2 uppercase">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-gray-50"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray mb-2 uppercase">
                Your Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-gray-50"
                required
              />
            </div>

            {/* Relationship */}
            <div>
              <label className="block text-xs font-semibold text-gray mb-2 uppercase">
                Relationship with the couple <span className="text-red-500">*</span>
              </label>
              <select
                name="relationship"
                value={formData.relationship}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-gray-50"
                required
              >
                <option value="">Select your relationship</option>
                <option value="family">Family</option>
                <option value="friend">Friend</option>
                <option value="colleague">Colleague</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Plus One Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="plus-one"
                checked={bringingPlusOne}
                onChange={(e) => setBringingPlusOne(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 accent-primary"
              />
              <label htmlFor="plus-one" className="text-sm text-gray cursor-pointer">
                I'm bringing a plus one
              </label>
            </div>

            {/* Plus One Fields (Conditional) */}
            {bringingPlusOne && (
              <div className="space-y-4 pl-4 border-l-4 border-primary">
                <div>
                  <label className="block text-xs font-semibold text-gray mb-2 uppercase">
                    Plus One's Name
                  </label>
                  <input
                    type="text"
                    name="plusOneName"
                    value={formData.plusOneName}
                    onChange={handleInputChange}
                    placeholder="Enter their full name"
                    className="w-full px-4 py-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray mb-2 uppercase">
                    Plus One's Email
                  </label>
                  <input
                    type="email"
                    name="plusOneEmail"
                    value={formData.plusOneEmail}
                    onChange={handleInputChange}
                    placeholder="Enter their email"
                    className="w-full px-4 py-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-gray-50"
                  />
                </div>
              </div>
            )}

            {/* Children Toggle */}
            <div className="flex items-center justify-between py-4 border-b border-gray-200">
              <label className="text-sm font-medium text-gray">
                Are you bringing children?
              </label>
              <button
                type="button"
                onClick={() => setBringingChildren(!bringingChildren)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  bringingChildren ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    bringingChildren ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Number of Children (Conditional) */}
            {bringingChildren && (
              <div>
                <label className="block text-xs font-semibold text-gray mb-3 uppercase">
                  Number of children
                </label>
                <input
                  type="number"
                  name="childrenCount"
                  value={formData.childrenCount}
                  onChange={handleInputChange}
                  min="1"
                  max="10"
                  className="w-full px-4 py-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-gray-50"
                />
              </div>
            )}

            {/* Divider */}
            <div className="h-px bg-gray-200 my-8" />

            {/* Cash Gift Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray mb-2 uppercase">
                WE WILL APPRECIATE YOUR SUPPORT
              </h3>
              <p className="text-xs text-gray mb-4">
                Please Note: Couple can only receive cash gifts both physically and through transfer
              </p>

              <label className="block text-sm font-semibold text-gray mb-4">
                Send cash gifts <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-6 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="cashGifts"
                    value="yes"
                    checked={sendCashGift === true}
                    onChange={() => setSendCashGift(true)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium text-gray">YES</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="cashGifts"
                    value="no"
                    checked={sendCashGift === false}
                    onChange={() => setSendCashGift(false)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium text-gray">NO</span>
                </label>
              </div>

              {sendCashGift && (
                <>
                  <input
                    type="text"
                    placeholder="Give cash gift"
                    className="w-full px-4 py-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-gray-50 mb-3"
                  />
                  <p className="text-xs text-gray mb-6">
                    Kindly send cash gift via any convenient platform
                  </p>

                  <label className="block text-xs font-semibold text-gray mb-3 uppercase">
                    Amount
                  </label>
                  <input
                    type="text"
                    name="cashGiftAmount"
                    value={formData.cashGiftAmount}
                    onChange={handleInputChange}
                    placeholder="Amount"
                    className="w-full px-4 py-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-gray-50 mb-8"
                  />

                  {/* Account Details */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-semibold text-gray uppercase">
                      ACCOUNT DETAILS
                    </h4>

                    {accountDetails.map((account, index) => (
                      <div key={index} className="border border-gray-200 rounded p-4 md:p-5">
                        <div className="flex items-start justify-between mb-3">
                          <h5 className="font-semibold text-sm text-gray">
                            {account.name}
                          </h5>
                          <button
                            type="button"
                            onClick={() =>
                              handleCopy(
                                `${account.beneficiary}\n${account.accountNumber}\n${account.bankName}`,
                                index
                              )
                            }
                            className="text-primary hover:text-primary/80 transition"
                            title="Copy account details"
                          >
                            {copiedIndex === index ? (
                              <Check className="w-5 h-5" />
                            ) : (
                              <Copy className="w-5 h-5" />
                            )}
                          </button>
                        </div>

                        <div className="space-y-2 text-xs text-gray">
                          <p>{account.beneficiary}</p>
                          <p>{account.accountNumber}</p>
                          <p>{account.bankName}</p>
                          {account.address && <p className="font-semibold mt-3">{account.address}</p>}
                          {account.additionalInfo && <p>{account.additionalInfo}</p>}
                          {account.bic && <p>{account.bic}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* reCAPTCHA */}
            <div className="my-6">
              <div
                className="g-recaptcha"
                data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-amber-600 text-white font-semibold py-4 rounded text-sm md:text-base transition-colors flex items-center justify-center gap-2"
            >
              <span>▶</span> SEND RSVP
            </button>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
