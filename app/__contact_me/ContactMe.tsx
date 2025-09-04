"use client";

import { Grid, Col2, Col3 } from "@/components/layout/grid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState, useCallback, useMemo } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { z } from "zod";
import React from "react";
import info from "@/data/info";
import Section from "@/components/layout/section";
import Info from "@/components/ui/info";
import SectionHeader from "@/components/ui/sectionHeader";

// Zod Schema for Form Validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),
  company: z
    .string()
    .max(100, "Company name must not exceed 100 characters")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must not exceed 255 characters"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject must not exceed 150 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

// Application Constants
const APP_CONFIG = {
  api: {
    contactEndpoint: "/api/contact",
    timeout: 10000,
    retryAttempts: 3,
    retryDelay: 1000,
  },
  ui: {
    textareaRows: 6,
  },
} as const;

// Form State Management
const FORM_INITIAL_STATE: ContactFormData = {
  name: "",
  company: "",
  email: "",
  subject: "",
  message: "",
};

// Notification Messages
const NOTIFICATIONS = {
  success: {
    title: "Message sent successfully!",
    description: "I'll get back to you via email soon.",
  },
  validationError: {
    title: "Please check your input",
    description: "All required fields must be filled correctly.",
  },
  networkError: {
    title: "Connection error",
    description: "Please check your internet connection and try again.",
  },
  serverError: {
    title: "Server error",
    description: "Something went wrong on our end. Please try again later.",
  },
  timeoutError: {
    title: "Request timeout",
    description: "The request took too long. Please try again.",
  },
} as const;

// Types and Interfaces
type FormFieldType = "text" | "email" | "textarea";

interface FormFieldConfig {
  readonly id: string;
  readonly name: keyof ContactFormData;
  readonly label: string;
  readonly type: FormFieldType;
  readonly required: boolean;
  readonly placeholder: string;
}

interface FormFieldProps extends Omit<FormFieldConfig, "name"> {
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
}

// Form Configuration
const FORM_FIELDS: readonly FormFieldConfig[] = [
  {
    id: "name",
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    placeholder: "Your full name",
  },
  {
    id: "company",
    name: "company",
    label: "Company",
    type: "text",
    required: false,
    placeholder: "Your company (optional)",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "your.email@example.com",
  },
  {
    id: "subject",
    name: "subject",
    label: "Subject",
    type: "text",
    required: true,
    placeholder: "What is this message about?",
  },
  {
    id: "message",
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    placeholder: "Tell me about your project, ideas, or just say hello...",
  },
] as const;

// HTTP Client
class ContactApiClient {
  private static async makeRequest(
    url: string,
    options: RequestInit,
    attempt = 1
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      APP_CONFIG.api.timeout
    );

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok && attempt < APP_CONFIG.api.retryAttempts) {
        await new Promise((resolve) =>
          setTimeout(resolve, APP_CONFIG.api.retryDelay * attempt)
        );
        return this.makeRequest(url, options, attempt + 1);
      }

      return response;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof Error && error.name === "AbortError") {
        throw new Error("TIMEOUT");
      }

      if (attempt < APP_CONFIG.api.retryAttempts) {
        await new Promise((resolve) =>
          setTimeout(resolve, APP_CONFIG.api.retryDelay * attempt)
        );
        return this.makeRequest(url, options, attempt + 1);
      }

      throw error;
    }
  }

  static async submitContactForm(formData: ContactFormData): Promise<void> {
    const response = await this.makeRequest(APP_CONFIG.api.contactEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP_ERROR_${response.status}`);
    }
  }
}

const FormField = ({
  id,
  name,
  label,
  type,
  required,
  placeholder,
  value,
  onChange,
  error,
}: FormFieldProps) => {
  const hasError = Boolean(error);
  const inputProps = {
    id,
    name,
    value,
    onChange,
    required,
    placeholder,
    "aria-invalid": hasError,
    "aria-describedby": hasError ? `${id}-error` : undefined,
  };

  const baseStyles =
    "bg-transparent border-foreground/20 focus:border-primary/60 text-sm font-light transition-colors";
  const errorStyles = hasError ? "border-red-500 focus:border-red-500" : "";
  const inputClassName = `${baseStyles} ${errorStyles}`;

  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-xs uppercase tracking-[0.2em] text-foreground/80 font-light"
      >
        {label}
        {required && (
          <span className="text-destructive ml-1" aria-label="required">
            *
          </span>
        )}
      </Label>

      {type === "textarea" ? (
        <Textarea
          {...inputProps}
          rows={APP_CONFIG.ui.textareaRows}
          className={`${inputClassName} resize-none`}
        />
      ) : (
        <Input
          {...inputProps}
          type={type === "email" ? "email" : "text"}
          className={inputClassName}
        />
      )}

      {hasError && (
        <p
          id={`${id}-error`}
          className="text-xs text-red-500 font-light"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

const SubmitButton = ({
  isSubmitting,
  hasErrors,
}: {
  isSubmitting: boolean;
  hasErrors: boolean;
}) => {
  const buttonContent = isSubmitting ? (
    <>
      <Loader2 className="w-4 h-4 animate-spin" />
      <span>Sending...</span>
    </>
  ) : (
    <>
      <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      <span>Send Message</span>
    </>
  );

  return (
    <div className="pt-4">
      <Button disabled={isSubmitting || hasErrors} type="submit">
        {buttonContent}
      </Button>
    </div>
  );
};

// Custom Hook for Form Management with Zod
const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(FORM_INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const fieldName = name as keyof ContactFormData;

      setFormData((prev) => ({ ...prev, [fieldName]: value }));

      // Real-time validation for individual field
      try {
        const fieldSchema = contactFormSchema.shape[fieldName];
        fieldSchema.parse(value);
        setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
      } catch (error) {
        if (error instanceof z.ZodError) {
          setErrors((prev) => ({
            ...prev,
            [fieldName]: error.issues[0]?.message,
          }));
        }
      }
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData(FORM_INITIAL_STATE);
    setErrors({});
  }, []);

  const submitForm = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        // Validate entire form with Zod
        const validatedData = contactFormSchema.parse(formData);
        setErrors({});

        setIsSubmitting(true);

        await ContactApiClient.submitContactForm(validatedData);

        resetForm();
        toast.success(NOTIFICATIONS.success.title, {
          description: NOTIFICATIONS.success.description,
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          // Handle Zod validation errors
          const fieldErrors: FormErrors = {};
          error.issues.forEach((issue: z.ZodIssue) => {
            if (issue.path.length > 0) {
              const fieldName = issue.path[0] as keyof ContactFormData;
              fieldErrors[fieldName] = issue.message;
            }
          });
          setErrors(fieldErrors);
          toast.error(NOTIFICATIONS.validationError.title, {
            description: NOTIFICATIONS.validationError.description,
          });
        } else {
          // Handle API errors
          console.error("Contact form submission failed:", error);

          if (error instanceof Error) {
            if (error.message === "TIMEOUT") {
              toast.error(NOTIFICATIONS.timeoutError.title, {
                description: NOTIFICATIONS.timeoutError.description,
              });
            } else if (error.message.startsWith("HTTP_ERROR_")) {
              toast.error(NOTIFICATIONS.serverError.title, {
                description: NOTIFICATIONS.serverError.description,
              });
            } else {
              toast.error(NOTIFICATIONS.networkError.title, {
                description: NOTIFICATIONS.networkError.description,
              });
            }
          }
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, resetForm]
  );

  const hasErrors = useMemo(
    () => Object.values(errors).some((error) => Boolean(error)),
    [errors]
  );

  return {
    formData,
    errors,
    isSubmitting,
    hasErrors,
    handleFieldChange,
    submitForm,
  };
};

// Main Components
const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    hasErrors,
    handleFieldChange,
    submitForm,
  } = useContactForm();

  const formFields = useMemo(
    () =>
      FORM_FIELDS.map((field) => (
        <FormField
          key={field.id}
          {...field}
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleFieldChange}
          error={errors[field.name]}
        />
      )),
    [formData, handleFieldChange, errors]
  );

  return (
    <div aria-labelledby="contact-form-heading">
      <form
        className="space-y-6 p-6"
        onSubmit={submitForm}
        noValidate
        aria-labelledby="contact-form-heading"
      >
        <Info>Send Message</Info>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formFields.slice(0, 2)}
        </div>

        <div className="space-y-6">
          {formFields.slice(2, 3)}
          {formFields.slice(3, 4)}
          {formFields.slice(4)}
        </div>

        <SubmitButton isSubmitting={isSubmitting} hasErrors={hasErrors} />
      </form>
    </div>
  );
};

const ContactInfo = () => {
  const contactItems = useMemo(
    () => [
      {
        icon: Mail,
        label: "Email",
        value: info.contact.email,
        href: `mailto:${info.contact.email}`,
      },
      {
        icon: Phone,
        label: "Phone",
        value: info.contact.phone,
        href: `tel:${info.contact.phone}`,
      },
      {
        icon: MapPin,
        label: "Location",
        value: info.contact.address,
      },
      {
        icon: Github,
        label: "GitHub",
        value: "View Profile",
        href: info.contact.github,
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Connect",
        href: info.contact.linkedin,
      },
    ],
    []
  );

  return (
    <div aria-labelledby="contact-info-heading">
      <div className="space-y-6 p-6">
        <Info>Get in Touch</Info>

        <div className="space-y-6">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="flex-shrink-0 p-2 rounded-md bg-foreground/5 border border-foreground/10">
                <Icon
                  className="w-4 h-4 text-foreground/60"
                  aria-hidden="true"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-foreground/80 font-light">
                    {label}
                  </span>
                </div>
                {href ? (
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block text-sm lg:text-base text-foreground/80 hover:text-foreground transition-colors font-light focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                    aria-label={`Contact via ${label}: ${value}`}
                  >
                    {value}
                  </Link>
                ) : (
                  <span className="block text-sm lg:text-base text-foreground/80 font-light">
                    {value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Contact Page Component
const ContactMeSection = () => {
  return (
    <Section>
      <div id="contact-me">
        <SectionHeader
          title="Get in Touch with Me"
          subtitle="Want to Connect?"
        />
        <Grid>
          <Col3>
            <ContactForm />
          </Col3>
          <Col2>
            <ContactInfo />
          </Col2>
        </Grid>
      </div>
    </Section>
  );
};

export default ContactMeSection;
