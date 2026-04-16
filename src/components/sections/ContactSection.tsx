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
  contactMethod: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

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
    } catch {
      alert(t("submitError"));
    }
  }

  const inputCls =
    "mt-1 w-full border-0 border-b border-border-default bg-transparent px-0 py-3 text-[15px] text-text-primary outline-none transition-colors focus:border-accent focus:border-b-2";
  const labelCls = "block text-sm font-medium text-text-primary";
  const selectCls =
    "mt-1 w-full border-0 border-b border-border-default bg-transparent px-0 py-3 text-[15px] text-text-secondary outline-none transition-colors focus:border-accent focus:border-b-2";

  return (
    <SectionReveal id="contact" className="bg-bg-primary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          16
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("title")}
        </h2>
        <p className="mt-4 text-[17px] text-text-secondary">
          {t("subtitle")}
        </p>

        <div className="mt-16 grid gap-16 lg:grid-cols-[3fr_2fr]">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                <p className="mt-1 text-xs text-red-500">{freeMailErr}</p>
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

            <div>
              <label className={labelCls}>{t("fields.plan")}</label>
              <select {...register("plan")} className={selectCls} defaultValue={selectedPlan}>
                <option value="">{t("fields.selectPlaceholder")}</option>
                {[0, 1, 2, 3].map((i) => (
                  <option key={i} value={t(`plans.${i}`)}>
                    {t(`plans.${i}`)}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
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
                rows={5}
                className={inputCls}
                placeholder={t("placeholders.message")}
              />
            </div>

            <div>
              <label className={labelCls}>
                {t("fields.contactMethod")}
              </label>
              <div className="mt-2 flex gap-4">
                {[0, 1, 2].map((i) => (
                  <label key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                    <input
                      type="radio"
                      {...register("contactMethod")}
                      value={t(`contactMethods.${i}`)}
                      className="accent-accent"
                    />
                    {t(`contactMethods.${i}`)}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 rounded-sm bg-accent text-sm font-medium text-white transition-colors duration-150 hover:bg-accent-hover disabled:opacity-50"
            >
              {isSubmitting ? t("submitting") : t("submit")}
            </button>
          </form>

          {/* Direct contact info */}
          <div className="flex flex-col justify-center">
            {submitted ? (
              <div className="text-center">
                <p className="text-lg font-medium">{t("successTitle")}</p>
                <p className="mt-2 text-sm text-text-secondary">
                  {t("successDesc")}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-medium">{t("emailDirect")}</p>
                    <a
                      href="mailto:contact@unchain.tech"
                      className="text-sm text-accent transition-colors duration-150 hover:text-accent-hover"
                    >
                      contact@unchain.tech
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                  <p className="text-sm text-text-secondary">{t("responseSla")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                  <p className="text-sm text-text-secondary">{t("office")}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
