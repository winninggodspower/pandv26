"use client"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5Av09OWbd6vw0wBzmDX8H6BPXpr1Ps.png)',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          {/* Top Text */}
          <div className="mb-12">
            <p className="text-sm md:text-base tracking-widest text-white uppercase letter-spacing font-light">
              Together with their families
            </p>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl text-white font-light italic mb-4"
              style={{
                fontFamily: 'Georgia, serif',
                textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              Praise & Victor
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-sm md:text-base tracking-widest text-white uppercase font-light letter-spacing">
              Request the pleasure of your company
            </p>
          </div>

          {/* Date and Location */}
          <div className="space-y-2">
            <p
              className="text-2xl md:text-3xl font-light"
              style={{
                color: '#D4AF37',
                textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
              }}
            >
              June 26th, 2026
            </p>
            <p className="text-sm md:text-base text-white tracking-widest uppercase font-light">
              Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  )
}
  }, [state])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleModalSubmit = () => {
    const formData = new FormData()
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key])
    })

    startTransition(async () => {
     try {
        action(formData)
     } catch (error) {
      
     } finally {
      setShowModal(false)
     }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Equipment Daily Report</h1>
          <p className="text-slate-600">Track equipment performance and fuel consumption</p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
        >
          {/* Form Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-6">
            <h2 className="text-xl font-semibold text-white">Daily Equipment Log</h2>
            <p className="text-emerald-100 text-sm mt-1">Please fill out all required fields</p>
          </div>

          <div className="p-8">
            {/* Error Messages */}
            {state?.errors && (
              <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Please correct the following errors:</h3>
                    <ul className="mt-2 text-sm text-red-700 list-disc list-inside space-y-1">
                      {state.errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Success Message */}
            {state?.success && (
              <div className="mb-8 p-4 bg-emerald-50 border-l-4 border-emerald-400 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-emerald-800">{state.message}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Form Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-emerald-600" />
                    Basic Information
                  </h3>

                  <div className="space-y-4">
                    <FormInput
                      label="Operator Name"
                      name="name"
                      placeholder="Enter operator name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />

                    <FormInput
                      label="Report Date"
                      name="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                    />

                    <FormInput
                      label="Equipment Tag"
                      name="equipmentTag"
                      placeholder="e.g., DG 01"
                      required
                      value={form.equipmentTag}
                      onChange={handleChange}
                    />

                    <FormInput
                      label="Location"
                      name="location"
                      placeholder="Enter work location"
                      required
                      value={form.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Operating Time
                  </h3>

                  <div className="space-y-4">
                    {/* Start Time */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Start Time <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <FormInput
                          label="Hour "
                          name="startHour"
                          type="number"
                          min="0"
                          placeholder="00"
                          required
                          value={form.startHour}
                          onChange={handleChange}
                        />
                        <FormInput
                          label="Minute (0-59)"
                          name="startMinute"
                          type="number"
                          min="0"
                          max="59"
                          placeholder="00"
                          required
                          value={form.startMinute}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* End Time */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        End Time <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <FormInput
                          label="Hour "
                          name="endHour"
                          type="number"
                          min="0"
                          placeholder="00"
                          required
                          value={form.endHour}
                          onChange={handleChange}
                        />
                        <FormInput
                          label="Minute (0-59)"
                          name="endMinute"
                          type="number"
                          min="0"
                          max="59"
                          placeholder="00"
                          required
                          value={form.endMinute}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    <Fuel className="w-5 h-5 mr-2 text-amber-600" />
                    Fuel Management
                  </h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormInput
                        label="Starting Fuel (%)"
                        name="startingFuelLevel"
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        placeholder="0.0"
                        suffix="%"
                        required
                        value={form.startingFuelLevel}
                        onChange={handleChange}
                      />

                      <FormInput
                        label="Ending Fuel (%)"
                        name="endingFuelLevel"
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        placeholder="0.0"
                        suffix="%"
                        required
                        value={form.endingFuelLevel}
                        onChange={handleChange}
                      />
                    </div>

                    <FormInput
                      label="Fuel Added Today"
                      name="quantityFuelAdded"
                      type="number"
                      min="0"
                      step="0.1"
                      placeholder="0.0"
                      suffix="Ltrs"
                      required
                      value={form.quantityFuelAdded}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-purple-600" />
                    Notes & Observations
                  </h3>

                  <FormTextarea
                    label="Observations/Remarks"
                    name="observations"
                    rows={5}
                    placeholder="Enter any observations, maintenance notes, or remarks about equipment performance..."
                    value={form.observations}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:from-emerald-400 disabled:to-emerald-500 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Submitting Report...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Review & Submit Report
                  </div>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Confirmation Modal */}
        <ConfirmationModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleModalSubmit}
          formData={form}
          isSubmitting={isPending}
        />

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            Powered by{" "}
            <a
              href="mailto:beezmedia@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              Beez Media
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}
