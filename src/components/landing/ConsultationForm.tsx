import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "200+ employees"
];

const businessTypes = [
  "General Contractor",
  "Specialty Contractor",
  "Heavy Civil",
  "Industrial",
  "Commercial",
  "Residential",
  "Other"
];

const ConsultationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    role: '',
    companySize: '',
    primaryBusiness: '',
    challenge: '',
    successVision: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xvgkqbke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Consultation request submitted!",
          description: "We'll reach out within 1-2 business days to schedule your call.",
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          role: '',
          companySize: '',
          primaryBusiness: '',
          challenge: '',
          successVision: ''
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation" className="py-16 bg-pelican-cream/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-pelican-navy mb-4">
            Schedule Your Free Consultation
          </h2>
          <p className="text-pelican-slate">
            Tell us about your estimating challenges and we'll reach out to schedule a 30-minute discovery call.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-pelican-navy">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="text-base"
                placeholder="John Smith"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-pelican-navy">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="text-base"
                placeholder="john@company.com"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-pelican-navy">
                Phone <span className="text-pelican-slate/60 text-sm">(optional)</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="text-base"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-pelican-navy">
                Company Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={handleInputChange}
                className="text-base"
                placeholder="Acme Construction"
              />
            </div>

            {/* Role/Title */}
            <div className="space-y-2">
              <Label htmlFor="role" className="text-pelican-navy">
                Your Role/Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="role"
                name="role"
                type="text"
                required
                value={formData.role}
                onChange={handleInputChange}
                className="text-base"
                placeholder="Chief Estimator"
              />
            </div>

            {/* Company Size */}
            <div className="space-y-2">
              <Label className="text-pelican-navy">
                Company Size <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) => handleSelectChange('companySize', value)}
                required
              >
                <SelectTrigger className="text-base">
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  {companySizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Primary Business */}
            <div className="space-y-2 sm:col-span-2">
              <Label className="text-pelican-navy">
                Primary Business <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.primaryBusiness}
                onValueChange={(value) => handleSelectChange('primaryBusiness', value)}
                required
              >
                <SelectTrigger className="text-base">
                  <SelectValue placeholder="Select your primary business type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Challenge */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="challenge" className="text-pelican-navy">
                What's your biggest estimating challenge right now? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="challenge"
                name="challenge"
                required
                rows={3}
                value={formData.challenge}
                onChange={handleInputChange}
                className="text-base resize-none"
                placeholder="Describe your current pain points..."
              />
            </div>

            {/* Success Vision */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="successVision" className="text-pelican-navy">
                What would success look like for your estimating department in 12 months? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="successVision"
                name="successVision"
                required
                rows={3}
                value={formData.successVision}
                onChange={handleInputChange}
                className="text-base resize-none"
                placeholder="Describe your ideal future state..."
              />
            </div>
          </div>

          <div className="mt-8">
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-base font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Consultation"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;
