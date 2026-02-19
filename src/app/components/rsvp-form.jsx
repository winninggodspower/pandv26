'use client';

import { useEffect, useState } from 'react';
import { Copy, Check, SendHorizonal } from 'lucide-react';
import { submitRSVP } from '../actions';
import FormInput from './form-input';
import FormSelect from './form-select';
import RadioGroup from './radio-group';
import CheckboxField from './checkbox-field';
import CollapsibleSection from './collapsible-section';

export default function RSVPForm() {
  const [isAttending, setIsAttending] = useState(true);
  const [sendCashGift, setSendCashGift] = useState(true);
  const [bringingPlusOne, setBringingPlusOne] = useState(false);
  const [bringingChildren, setBringingChildren] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isAttending) return;

    setBringingPlusOne(false);
    setBringingChildren(false);
    setFormData((prev) => ({
      ...prev,
      email: '',
      relationship: '',
      plusOneName: '',
      plusOneEmail: '',
      childrenCount: '0',
    }));
  }, [isAttending]);

  useEffect(() => {
    if (!isSubmitted || typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cancelled = false;

    const runConfetti = async () => {
      const { default: confetti } = await import('canvas-confetti');
      if (cancelled) return;

      const base = {
        particleCount: 36,
        spread: 56,
        startVelocity: 22,
        gravity: 1.08,
        ticks: 220,
        scalar: 0.88,
        zIndex: 90,
      };

      confetti({ ...base, origin: { x: 0.2, y: 0.78 } });
      confetti({ ...base, origin: { x: 0.8, y: 0.78 } });
    };

    runConfetti();

    return () => {
      cancelled = true;
    };
  }, [isSubmitted]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    relationship: '',
    cashGiftAmount: '',
    plusOneName: '',
    plusOneEmail: '',
    childrenCount: '1',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    try {
      const dataToSubmit = {
        fullName: formData.fullName,
        email: isAttending ? formData.email : '',
        isAttending,
        relationship: isAttending ? formData.relationship : '',
        bringingPlusOne: isAttending ? bringingPlusOne : false,
        plusOneName: isAttending ? formData.plusOneName : '',
        plusOneEmail: isAttending ? formData.plusOneEmail : '',
        bringingChildren: isAttending ? bringingChildren : false,
        childrenCount: isAttending && bringingChildren ? parseInt(formData.childrenCount) : 0,
        sendCashGift,
        cashGiftAmount: formData.cashGiftAmount,
      };

      console.log('Submitting form data:', dataToSubmit);
      const result = await submitRSVP(dataToSubmit);

      if (result.success) {
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
        }, 30000);
      } else {
        console.error('Form submission error:', result.errors);
        alert('Error submitting RSVP: ' + (result.errors ? result.errors.join(', ') : 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Error submitting RSVP: ' + error.message);
    } finally {
      setIsLoading(false)
    }
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
            Kindly respond by April 30th 2026
          </p>
          <div className="flex justify-center">
            <img src="/solar-line.svg" alt="" />
          </div>
        </div>

        {/* Attendance Question - Outside Card */}
        {!isSubmitted && (
          <div className="flex justify-center items-baseline gap-2 mb-6 md:mb-8">
            <RadioGroup
              label="Will you be attending?"
              name="attending"
              value={isAttending ? 'yes' : 'no'}
              onChange={(e) => setIsAttending(e.target.value === 'yes')}
              options={[
                { value: 'yes', label: 'YES' },
                { value: 'no', label: 'NO' },
              ]}
              layout="horizontal"
            />
          </div>
        )}

        {/* Form Container */}
        <div className="card !bg-[#F8F6F1] px-6 md:px-8 py-8 md:py-12">
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

              {isAttending && (
                <>
                  {/* Full Name */}
                  <FormInput
                    label="Your Full Name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />

                  {/* Email */}
                  <FormInput
                    label="Your Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />

                  {/* Relationship */}
                  <FormSelect
                    label="Relationship with the couple"
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleInputChange}
                    options={[
                      { value: 'family', label: 'Family' },
                      { value: 'friend', label: 'Friend' },
                      { value: 'colleague', label: 'Colleague' },
                      { value: 'other', label: 'Other' },
                    ]}
                    required
                  />

                  {/* Plus One Checkbox */}
                  <CheckboxField
                    id="plus-one"
                    label="I'm bringing a plus one"
                    checked={bringingPlusOne}
                    onChange={(e) => setBringingPlusOne(e.target.checked)}
                  />

                  {/* Plus One Fields (Conditional with Animation) */}
                  <CollapsibleSection isOpen={bringingPlusOne}>
                    <FormInput
                      label="Plus One's Name"
                      type="text"
                      name="plusOneName"
                      value={formData.plusOneName}
                      onChange={handleInputChange}
                      placeholder="Enter their full name"
                    />
                    <FormInput
                      label="Plus One's Email"
                      type="email"
                      name="plusOneEmail"
                      value={formData.plusOneEmail}
                      onChange={handleInputChange}
                      placeholder="Enter their email"
                    />
                  </CollapsibleSection>

                  {/* Children Toggle */}
                  <div className="flex items-center justify-between py-4 border-b border-black/30">
                    <label className="block text-xs md:text-[13px] font-medium text-gray mb-2 uppercase">
                      Are you bringing children?
                    </label>
                    <button
                      type="button"
                      onClick={() => setBringingChildren(!bringingChildren)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${bringingChildren ? 'bg-primary' : 'bg-gray-300'
                        }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${bringingChildren ? 'translate-x-6' : 'translate-x-1'
                          }`}
                      />
                    </button>
                  </div>

                  {/* Number of Children (Conditional with Animation) */}
                  <CollapsibleSection isOpen={bringingChildren}>
                    <FormInput
                      label="Number of children"
                      type="number"
                      name="childrenCount"
                      value={formData.childrenCount}
                      onChange={handleInputChange}
                      min="0"
                      max="10"
                    />
                  </CollapsibleSection>

                  {/* Divider */}
                  <div className="h-px bg-black/30 my-8" />
                </>
              )}

              {/* Cash Gift Section */}
              <div>
                <h3 className="text-sm font-medium text-gray mb-2 uppercase">
                  WE WILL APPRECIATE YOUR SUPPORT
                </h3>
                <p className="text-xs text-gray mb-4">
                  Please Note: Couple can only receive cash gifts both physically and through transfer
                </p>

                <RadioGroup
                  label="Send cash gifts"
                  name="cashGifts"
                  value={sendCashGift ? 'yes' : 'no'}
                  onChange={(e) => setSendCashGift(e.target.value === 'yes')}
                  options={[
                    { value: 'yes', label: 'YES' },
                    { value: 'no', label: 'NO' },
                  ]}
                  layout="horizontal"
                  required
                  className="mb-6"
                />

                {sendCashGift && (
                  <>
                    <h3 className="text-sm font-medium text-gray mb-2 uppercase">
                      Give cash gift
                    </h3>

                    <div className='px-14'>
                      <p className="text-base text-gray mb-6">
                        Kindly send cash gift via any convenient platform
                      </p>

                      {!isAttending && (
                        <FormInput
                          label="Full Name"
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="mb-8"
                          required
                        />
                      )}

                      <FormInput
                        label="Amount"
                        type="text"
                        name="cashGiftAmount"
                        value={formData.cashGiftAmount}
                        onChange={handleInputChange}
                        placeholder="Amount"
                        className="mb-8"
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
                disabled={isLoading}
                className="w-full bg-primary hover:bg-amber-600 text-white font-medium py-4 rounded-[3px] text-s transition-colors flex items-center justify-center gap-2"
              >
               {isLoading ? 
                'Submitting...' : 
                <span className="flex items-center gap-2"><SendHorizonal className="w-4 h-4" /> SEND RSVP</span>
                }
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
