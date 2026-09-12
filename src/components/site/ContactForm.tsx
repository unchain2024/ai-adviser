"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BOOKING_URL, isFreeMail } from "@/lib/constants";

const EMPLOYEE_OPTIONS = ["e1", "e2", "e3", "e4", "e5", "e6"] as const;
const PLAN_OPTIONS = ["p1", "p2", "p3", "p0"] as const;

/** 料金セクションの各CTAが付ける ?plan=… を select の初期値に載せる */
const PLAN_BY_PARAM: Record<string, string> = {
  executive: "p1",
  department: "p2",
  company: "p3",
};

type T = (key: string) => string;

function buildSchema(t: T) {
  return z.object({
    company: z.string().trim().min(1, t("errors.required")),
    name: z.string().trim().min(1, t("errors.required")),
    email: z
      .string()
      .trim()
      .min(1, t("errors.required"))
      .pipe(z.email(t("errors.email")))
      .refine((v) => !isFreeMail(v), t("errors.freeMail")),
    role: z.string().trim().min(1, t("errors.required")),
    employees: z.string().min(1, t("errors.select")),
    plan: z.string().optional(),
    message: z.string().optional(),
  });
}

type FormData = z.infer<ReturnType<typeof buildSchema>>;

function StepDot({
  n,
  state,
  label,
}: {
  n: number;
  state: "done" | "active" | "todo";
  label: string;
}) {
  return (
    <span className="flex items-center gap-[10px]">
      <span
        className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full text-[13px] font-medium ${
          state === "todo" ? "bg-[#F4F4F5] text-[#70707B] ring-1 ring-[#E4E4E7]" : "text-white"
        }`}
        style={state === "todo" ? undefined : { background: "var(--grad-brand)" }}
      >
        {state === "done" ? (
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" aria-hidden="true">
            <path
              d="M11.5 2.5L4.75 9.25L1.5 6"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          n
        )}
      </span>
      <span
        className={`text-[14px] leading-none ${
          state === "todo" ? "text-[#70707B]" : "font-medium text-[#131316]"
        }`}
      >
        {label}
      </span>
    </span>
  );
}

const inputCls =
  "mt-[8px] h-[46px] w-full rounded-[10px] bg-white px-[14px] text-[15px] text-[#131316] ring-1 ring-[#E4E4E7] outline-none transition-shadow placeholder:text-[#A0A0AB] focus:ring-2 focus:ring-[#004DFF]";
const labelCls = "block text-[14px] leading-none font-medium text-[#131316]";

function Field({
  label,
  required,
  optionalLabel,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  optionalLabel?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className={labelCls}>
        {label}
        {required ? (
          <span className="ml-[3px] text-[#004DFF]" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-[6px] font-normal text-[#70707B]">{optionalLabel}</span>
        )}
      </span>
      {children}
      {error && <span className="mt-[6px] block text-[12px] leading-[16px] text-[#DC2626]">{error}</span>}
    </label>
  );
}

/**
 * 2ステップの予約導線。ステップ1でご連絡先を受け取り（Discord通知）、
 * ステップ2でGoogleの予約ページへ送る。フォームを先に置くのは、
 * 枠が合わなかった場合でもこちらから追いかけられるようにするため。
 */
export function ContactForm({ planParam }: { planParam?: string }) {
  const t = useTranslations("site.contactPage");
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(buildSchema(t)),
    defaultValues: {
      plan: (planParam && PLAN_BY_PARAM[planParam]) || "",
      employees: "",
    },
  });

  async function onSubmit(data: FormData) {
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          employees: t(`employeeOptions.${data.employees}`),
          plan: data.plan ? t(`planOptions.${data.plan}`) : "",
          contactMethod: `${t("meetingFormat")} / ${t("meetingLength")}`,
        }),
      });
      if (!res.ok) throw new Error();
      setDone(true);
    } catch {
      setSubmitError(t("submitError"));
    }
  }

  return (
    <div className="rounded-[20px] bg-white p-[24px] shadow-[0_2px_14px_rgba(0,0,0,0.05)] ring-1 ring-[#E4E4E7] sm:p-[32px]">
      <div className="flex items-center gap-[14px]">
        <StepDot n={1} state={done ? "done" : "active"} label={t("step1")} />
        <span className="h-px flex-1 bg-[#E4E4E7]" aria-hidden="true" />
        <StepDot n={2} state={done ? "active" : "todo"} label={t("step2")} />
      </div>
      <hr className="mt-[22px] border-0 border-t border-[#E4E4E7]" />

      {done ? (
        <div className="pt-[36px] pb-[12px] text-center">
          <span
            className="mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full"
            style={{ background: "var(--grad-brand)" }}
            aria-hidden="true"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="5"
                width="18"
                height="16"
                rx="3"
                stroke="#fff"
                strokeWidth="1.7"
              />
              <path
                d="M3 10h18M8 3v4M16 3v4"
                stroke="#fff"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <h2 className="mt-[22px] text-[24px] leading-[1.25] font-bold text-[#131316]">
            {t("doneTitle")}
          </h2>
          <p className="mx-auto mt-[10px] max-w-[400px] text-[15px] leading-[23px] text-[#51525C]">
            {t("doneDesc")}
          </p>

          <div className="mt-[22px] inline-flex items-center gap-[12px] rounded-full bg-[#F4F4F5] px-[16px] py-[9px] text-[13px] leading-none text-[#51525C] ring-1 ring-[#E4E4E7]">
            <span>{t("meetingLength")}</span>
            <span className="h-[3px] w-[3px] rounded-full bg-[#D1D1D6]" aria-hidden="true" />
            <span>{t("meetingFormat")}</span>
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-dark mt-[26px] flex h-[50px] w-full items-center justify-center rounded-[10px] text-[16px] font-medium"
          >
            {t("pickTime")}
          </a>
          <p className="mt-[14px] text-[13px] leading-[19px] text-[#70707B]">{t("doneFallback")}</p>
        </div>
      ) : (
        <>
          <h2 className="mt-[22px] text-[20px] leading-[1.3] font-bold text-[#131316]">
            {t("formTitle")}
          </h2>
          <p className="mt-[6px] text-[14px] leading-[21px] text-[#51525C]">{t("formDesc")}</p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-[24px] space-y-[18px]">
            <div className="grid gap-[18px] sm:grid-cols-2">
              <Field label={t("fields.name")} required error={errors.name?.message}>
                <input
                  {...register("name")}
                  className={inputCls}
                  placeholder={t("placeholders.name")}
                  autoComplete="name"
                />
              </Field>
              <Field label={t("fields.company")} required error={errors.company?.message}>
                <input
                  {...register("company")}
                  className={inputCls}
                  placeholder={t("placeholders.company")}
                  autoComplete="organization"
                />
              </Field>
            </div>

            <Field label={t("fields.email")} required error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                className={inputCls}
                placeholder={t("placeholders.email")}
                autoComplete="email"
              />
            </Field>

            <div className="grid gap-[18px] sm:grid-cols-2">
              <Field label={t("fields.role")} required error={errors.role?.message}>
                <input
                  {...register("role")}
                  className={inputCls}
                  placeholder={t("placeholders.role")}
                  autoComplete="organization-title"
                />
              </Field>
              <Field label={t("fields.employees")} required error={errors.employees?.message}>
                <select {...register("employees")} className={inputCls}>
                  <option value="">{t("selectPlaceholder")}</option>
                  {EMPLOYEE_OPTIONS.map((k) => (
                    <option key={k} value={k}>
                      {t(`employeeOptions.${k}`)}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label={t("fields.plan")} optionalLabel={t("optional")}>
              <select {...register("plan")} className={inputCls}>
                <option value="">{t("selectPlaceholder")}</option>
                {PLAN_OPTIONS.map((k) => (
                  <option key={k} value={k}>
                    {t(`planOptions.${k}`)}
                  </option>
                ))}
              </select>
            </Field>

            <Field label={t("fields.message")} optionalLabel={t("optional")}>
              <textarea
                {...register("message")}
                rows={4}
                className={`${inputCls} h-auto resize-y py-[12px] leading-[22px]`}
                placeholder={t("placeholders.message")}
              />
            </Field>

            {submitError && (
              <p className="rounded-[10px] bg-[#FEF2F2] px-[14px] py-[10px] text-[13px] leading-[19px] text-[#DC2626]">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-dark flex h-[50px] w-full items-center justify-center rounded-[10px] text-[16px] font-medium disabled:opacity-60"
            >
              {isSubmitting ? t("submitting") : t("submit")}
            </button>

            <p className="text-[13px] leading-[19px] text-[#70707B]">{t("consent")}</p>
          </form>
        </>
      )}
    </div>
  );
}
