"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { isFreeMail } from "@/lib/constants";
import { Mail, Clock, MapPin } from "lucide-react";

const schema = z.object({
  company: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  role: z.string().optional(),
  plan: z.string().optional(),
  industry: z.string().optional(),
  employees: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const TIMEREX_URL = "https://timerex.net/s/tharada_4c59/03bbdfd0";

export function ContactSection({ selectedPlan }: { selectedPlan: string }) {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [freeMailErr, setFreeMailErr] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { plan: selectedPlan },
  });

  async function onSubmit(data: FormData) {
    if (isFreeMail(data.email)) {
      setFreeMailErr(t("freeMailError"));
      return;
    }
    setFreeMailErr("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      window.open(TIMEREX_URL, "_blank", "noopener");
    } catch {
      alert(t("submitError"));
    }
  }

  const inputCls =
    "mt-1 w-full rounded-[12px] border border-border-default bg-bg-primary px-4 py-3 text-[14px] text-text-primary outline-none transition-colors focus:border-accent";
  const labelCls = "block text-[13px] font-medium text-text-primary";
  const selectCls =
    "mt-1 w-full rounded-[12px] border border-border-default bg-bg-primary px-4 py-3 text-[14px] text-text-secondary outline-none transition-colors focus:border-accent";

  return (
    <SectionReveal id="contact" className="bg-bg-secondary">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-32">
        <span className="inline-block rounded-full bg-bg-tertiary px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] text-text-tertiary uppercase">
          Contact
        </span>
        <h2 className="mt-6 font-[var(--font-display)] text-[32px] font-light leading-[1.2] tracking-[-0.02em] text-text-primary md:text-[42px]">
          {t("title")}
        </h2>
        <p className="mt-3 text-[15px] text-text-secondary">
          {t("subtitle")}
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
          {/* Form */}
          <div className="rounded-[20px] bg-bg-primary p-8 shadow-sm md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls}>
                    {t("fields.company")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("company")}
                    className={`${inputCls} ${errors.company ? "border-red-500" : ""}`}
                    placeholder={t("placeholders.company")}
                  />
                </div>
                <div>
                  <label className={labelCls}>
                    {t("fields.name")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("name")}
                    className={`${inputCls} ${errors.name ? "border-red-500" : ""}`}
                    placeholder={t("placeholders.name")}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls}>
                    {t("fields.email")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className={`${inputCls} ${errors.email || freeMailErr ? "border-red-500" : ""}`}
                    placeholder={t("placeholders.email")}
                    onChange={() => freeMailErr && setFreeMailErr("")}
                  />
                  {freeMailErr && (
                    <p className="mt-1 text-[12px] text-red-500">{freeMailErr}</p>
                  )}
                </div>
                <div>
                  <label className={labelCls}>{t("fields.role")}</label>
                  <input
                    {...register("role")}
                    className={inputCls}
                    placeholder={t("placeholders.role")}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>{t("fields.plan")}</label>
                <select {...register("plan")} className={selectCls} defaultValue={selectedPlan}>
                  <option value="">{t("fields.selectPlaceholder")}</option>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <option key={i} value={t(`plans.${i}`)}>
                      {t(`plans.${i}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls}>{t("fields.industry")}</label>
                  <select {...register("industry")} className={selectCls} defaultValue="">
                    <option value="" disabled>
                      {t("fields.selectPlaceholder")}
                    </option>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <option key={i} value={t(`industries.${i}`)}>
                        {t(`industries.${i}`)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{t("fields.employees")}</label>
                  <select {...register("employees")} className={selectCls} defaultValue="">
                    <option value="" disabled>
                      {t("fields.selectPlaceholder")}
                    </option>
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <option key={i} value={t(`employeeCounts.${i}`)}>
                        {t(`employeeCounts.${i}`)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelCls}>{t("fields.message")}</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className={inputCls}
                  placeholder={t("placeholders.message")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-full bg-accent text-[14px] font-medium text-white transition-all duration-150 hover:bg-accent-hover hover:shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? t("submitting") : t("submit")}
              </button>
            </form>
          </div>

          {/* Direct contact info */}
          <div className="flex flex-col justify-start pt-2">
            {submitted ? (
              <div className="rounded-[20px] bg-bg-primary p-8 text-center shadow-sm">
                <p className="text-[18px] font-medium">{t("successTitle")}</p>
                <p className="mt-2 text-[13px] text-text-secondary">
                  {t("successDesc")}
                </p>
                <a
                  href={TIMEREX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-11 items-center rounded-full bg-accent px-6 text-[13px] font-medium text-white transition-all duration-150 hover:bg-accent-hover hover:shadow-lg"
                >
                  {t("bookCall")}
                </a>
              </div>
            ) : (
              <div className="rounded-[20px] bg-bg-primary p-8 shadow-sm">
                <p className="text-[11px] font-medium tracking-[0.1em] text-text-tertiary uppercase">
                  Direct Contact
                </p>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                      <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium">{t("emailDirect")}</p>
                      <a
                        href="mailto:contact@the-unchain.com"
                        className="text-[13px] text-accent transition-colors duration-150 hover:text-accent-hover"
                      >
                        contact@the-unchain.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                      <Clock className="h-4 w-4 text-accent" strokeWidth={1.5} />
                    </div>
                    <p className="text-[13px] text-text-secondary">{t("responseSla")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                      <MapPin className="h-4 w-4 text-accent" strokeWidth={1.5} />
                    </div>
                    <p className="text-[13px] text-text-secondary">{t("office")}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
