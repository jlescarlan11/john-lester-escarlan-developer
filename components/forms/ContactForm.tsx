"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Info from "@/components/ui/info";
import { useState } from "react";
import { LuLoader, LuSend } from "react-icons/lu";
import { toast } from "sonner";
import z from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().default(""),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

// Form field component
const FormField = ({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  name: keyof ContactForm;
  type?: "text" | "email" | "textarea";
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
}) => (
  <div className="space-y-2">
    <Label className="text-xs uppercase tracking-[0.2em] text-foreground font-light">
      {label}
      {required && <span className="text-destructive ml-1">*</span>}
    </Label>

    {type === "textarea" ? (
      <Textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={6}
        className={`bg-transparent border-foreground/20 focus:border-primary/60 text-sm font-light transition-colors resize-none text-justify ${
          error ? "border-red-500" : ""
        }`}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={error ? "true" : "false"}
      />
    ) : (
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-transparent border-foreground/20 focus:border-primary/60 text-sm font-light transition-colors ${
          error ? "border-red-500" : ""
        }`}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={error ? "true" : "false"}
      />
    )}

    {error && <p id={`${name}-error`} className="text-xs text-red-500 font-light" role="alert">{error}</p>}
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactForm, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form
      contactSchema.parse(formData);
      setErrors({});

      setIsSubmitting(true);

      // Submit form
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      // Reset form and show success
      setFormData({
        name: "",
        company: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success("Message sent successfully!", {
        description: "I'll get back to you via email soon.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as keyof ContactForm] = issue.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please check your input");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Info>Send Message</Info>

      <form onSubmit={handleSubmit} className="space-y-6 mt-6" role="form" aria-label="Contact form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Name"
            name="name"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormField
            label="Company"
            name="company"
            placeholder="Your company (optional)"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
          />
        </div>

        <FormField
          label="Email"
          name="email"
          type="email"
          required
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormField
          label="Subject"
          name="subject"
          required
          placeholder="What is this message about?"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
        />

        <FormField
          label="Message"
          name="message"
          type="textarea"
          required
          placeholder="Tell me about your project, ideas, or just say hello..."
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />

        <div className="pt-4">
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            variant="outline"
            aria-label={isSubmitting ? "Sending message, please wait" : "Send message"}
          >
            {isSubmitting ? (
              <>
                <LuLoader className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <LuSend className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
