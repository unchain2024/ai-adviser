"use client";

import { useState } from "react";

/* ─── free-mail domain blocklist (subset) ─── */
const FREE_DOMAINS = [
  "gmail.com",
  "yahoo.co.jp",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "outlook.jp",
  "icloud.com",
  "me.com",
  "mail.com",
  "aol.com",
  "protonmail.com",
  "ymail.com",
];

function isFreeMail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();
  return FREE_DOMAINS.includes(domain ?? "");
}

/* ─── data ─── */
const NAV_LINKS = [
  { label: "サービス概要", href: "#services" },
  { label: "料金プラン", href: "#pricing" },
  { label: "導入事例", href: "#testimonials" },
  { label: "代表プロフィール", href: "#founder" },
  { label: "お問い合わせ", href: "#contact" },
];

const PAIN_POINTS = [
  { title: "選べない", desc: "どのAIツールを選ぶべきかわからない" },
  { title: "組み込めない", desc: "業務にどう組み込めばいいかわからない" },
  { title: "止まる", desc: "PoC止まりで実運用に進まない" },
  { title: "担えない", desc: "社内にAIを判断・推進できる責任者がいない" },
];

const TIMELINE = [
  {
    org: "ソフトバンクアカデミア",
    desc: "18歳で採択。次世代リーダー育成プログラム",
  },
  {
    org: "東京大学 松尾研究室",
    desc: "社長室インターン。日本最高峰のAI研究に従事",
  },
  {
    org: "Deepreneur 共同創業",
    desc: "松尾研究室発AIスタートアップで事業経験を積む",
  },
  {
    org: "早稲田大学 研究員",
    desc: "AIセキュリティ研究でForbes掲載",
  },
  {
    org: "米日カウンシル 2025年総会登壇",
    desc: "国際的なAI政策・ビジネスフォーラム",
  },
];

const CORE_SERVICES = [
  {
    title: "AI活用テーマの整理",
    desc: "経営視点・現場視点での優先順位付け",
  },
  {
    title: "ツール選定",
    desc: "ベンダー中立的なLLM・自動化ツールの選定",
  },
  {
    title: "業務設計",
    desc: "既存フローへのAI組み込み設計",
  },
  {
    title: "実装支援",
    desc: "具体的な設定・設計・実行支援",
  },
  {
    title: "ガバナンス構築",
    desc: "社内ルール・セキュリティ・運用方針の整理",
  },
  {
    title: "継続的改善",
    desc: "相談・チューニング・伴走支援",
  },
];

const COMPARISON = [
  {
    them: "ツールの紹介だけ",
    us: "技術的・経営的・リスク的妥当性を総合判断",
  },
  {
    them: "海外事例の横流し",
    us: "日本企業の商習慣に適合する設計",
  },
  {
    them: "実装経験の浅いアドバイス",
    us: "現場の泥臭い課題を理解した実装設計",
  },
  {
    them: "特定ツールの販売目的",
    us: "ベンダー中立の最適選定",
  },
  {
    them: "プロジェクト単発",
    us: "継続的伴走と人材育成",
  },
];

const PILLARS = [
  {
    num: "1",
    title: "構想段階からの伴走支援",
    desc: "AI導入可否の判断から、DX基盤（AWS・Google Workspace等）設計、実装、内製化支援、NVIDIA Jetsonなどのハードウェア連携まで一気通貫で伴走。AIを入れるのではなく、AIが機能する組織構造を設計。",
  },
  {
    num: "2",
    title: "ベンダー中立性",
    desc: "特定ツールの販売目的なし。技術的・経営的・将来拡張性を総合判断し、最適解を選定。",
  },
  {
    num: "3",
    title: "AIガバナンス・セキュリティ",
    desc: "Forbes掲載実績のあるセキュリティ知見。生成AI・Agent時代のリスクを前提とした設計思想。",
  },
  {
    num: "4",
    title: "将来のプロダクト開発まで伴走",
    desc: "顧問・コンサルで終わらない。自社AIプロダクト構想から、設計・実装・インフラ・セキュリティまで一括支援。",
  },
];

const TESTIMONIALS = [
  {
    attr: "米国トップ大学研究機関",
    org: "UC Berkeley (IBI)",
    quote:
      "単なるツール導入ではなく、研究データをどう安全かつ効率的に管理すべきかという設計段階から相談できました。学術機関特有の複雑な要件を、技術と実務の両面から解決してくれました。",
  },
  {
    attr: "子会社・新規事業担当",
    org: "国内最大手ゼネコン",
    quote:
      "新規事業のスピード感を止めることなく、業界標準に依存しない独自の仕組みを提案してくれました。『技術的に可能か、ビジネスとして有利か』を即断即決してくれるため、開発の意思決定が劇的に早まりました。",
  },
  {
    attr: "DX推進担当",
    org: "世界最大手ヘルスケア企業",
    quote:
      "グローバル企業ゆえの厳しいコンプライアンス要件の中で、『どこまでAIに任せるべきか』というガバナンス視点でのアドバイスが非常に助かりました。リスクを回避しながら現場業務に落とし込む設計力は流石です。",
  },
  {
    attr: "経営企画室",
    org: "創業90年 アパレル製造",
    quote:
      "社内にAIの専門家がおらず、何から手をつけるべきか迷っていました。UNCHAINは創業90年の古い業務フローを尊重しつつ、『ここをAI化すれば成果が出る』という優先順位を明確に示してくれたおかげで、スムーズに導入が進みました。",
  },
  {
    attr: "工場長・技術担当",
    org: "光学・脆性材料加工の老舗",
    quote:
      "現場の職人が使う既存システムと最新AIの連携は、普通のITベンダーでは話が通じないことが多いです。しかし彼らは現場の泥臭い課題を理解した上で、工場システムにどう組み込むかという『実装の青写真』を描いてくれました。",
  },
  {
    attr: "開発責任者",
    org: "光学融合カメラベンチャー",
    quote:
      "ハードウェアとAIの連携は難易度が高いですが、研究開発のバックグラウンドを持つ彼らが技術的な『壁打ち相手』になってくれたことで、実現可能性の検証（PoC）から実装まで最短距離で走れています。",
  },
];

const INDUSTRIES = [
  "製造業",
  "建設・不動産",
  "IT・通信",
  "金融・保険",
  "医療・ヘルスケア",
  "小売・流通",
  "教育・研究機関",
  "サービス業",
  "その他",
];

const EMPLOYEE_COUNTS = [
  "1〜50名",
  "51〜100名",
  "101〜300名",
  "301〜1,000名",
  "1,001〜5,000名",
  "5,001名以上",
];

/* ═══════════════════════════════════════════ */

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [emailError, setEmailError] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ───────── Sticky Header ───────── */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight text-black">
            UNCHAIN
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-600 transition hover:text-black"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              無料相談
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-gray-100 px-6 pb-4 md:hidden">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-3 text-sm text-gray-600 transition hover:text-black"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 block rounded bg-black px-5 py-2.5 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              無料相談
            </a>
          </div>
        )}
      </nav>

      {/* ═══════ SECTION 1: HERO ═══════ */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <h1 className="max-w-3xl text-4xl leading-snug font-bold tracking-tight text-black md:text-6xl md:leading-tight">
          社内のDX・AI活用、
          <br />
          丸投げしていませんか？
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
          検討から定着まで。月額制で企業のDX・AI活用を
          <br className="hidden md:block" />
          Forbes掲載・松尾研究室出身代表が一貫して支援します。
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-black px-7 py-3.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            無料相談を予約する
            <ArrowRight />
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-gray-600 underline underline-offset-4 transition hover:text-black"
          >
            サービス詳細を見る
          </a>
        </div>
      </section>

      {/* ═══════ SECTION 2: なぜAI活用が進まないのか ═══════ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black md:text-4xl">
            なぜAI活用が進まないのか
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PAIN_POINTS.map((p) => (
              <div
                key={p.title}
                className="rounded border border-gray-200 bg-white p-8"
              >
                <p className="text-2xl font-bold text-black">「{p.title}」</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-center text-base font-medium text-gray-700 md:text-lg">
            UNCHAINはこれらに対し、
            <span className="font-bold text-black">
              実行できるAI顧問
            </span>
            として機能します。
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 3: なぜ私たちなのか ═══════ */}
      <section id="founder" className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black md:text-4xl">
            研究 × 事業 × 社会実装。
            <br className="sm:hidden" />
            全てを経験したAI顧問。
          </h2>

          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            {/* Profile */}
            <div>
              <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
                Founder
              </p>
              <h3 className="mt-3 text-2xl font-bold text-black">
                朴 善優（バクソンウ）
              </h3>
              <p className="mt-1 text-sm text-gray-500">UNCHAIN代表</p>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                18歳で孫正義氏の後継者育成機関に採択され、AIの研究と事業の両方を歩んできた
              </p>

              <div className="mt-10 rounded border border-gray-200 bg-gray-50 p-6">
                <p className="text-sm leading-loose text-gray-700">
                  &ldquo;理論だけでも、現場だけでもない。だから
                  <span className="font-bold text-black">
                    『技術的に可能か』『経営・リスク上妥当か』『日本企業に定着するか』
                  </span>
                  を、即断即決できます。&rdquo;
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-8">
              <div className="absolute top-0 bottom-0 left-3 w-px bg-gray-200" />
              {TIMELINE.map((t, i) => (
                <div key={i} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-5 top-1.5 h-2.5 w-2.5 rounded-full bg-black" />
                  <p className="text-sm font-bold text-black">{t.org}</p>
                  <p className="mt-1 text-sm text-gray-500">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: AI顧問としての支援 ═══════ */}
      <section id="services" className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black md:text-4xl">
            AIのことは、UNCHAINに聞けばいい
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((s, i) => (
              <div
                key={i}
                className="rounded border border-gray-200 bg-white p-8"
              >
                <p className="text-xs font-bold tracking-widest text-gray-400">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-bold text-black">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-xl text-center text-base font-medium text-gray-700">
            「AIのことはUNCHAINに聞けばいい」状態をつくることが、私たちのゴールです。
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 5: 料金体系 ═══════ */}
      <section id="pricing" className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black md:text-4xl">
            責任者を外部に置く
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-500">
            UNCHAINは、月額顧問契約を基本とし、継続的な伴走支援を提供します。
            <br />
            プロジェクト単発ではなく、中長期的なAI活用パートナーとして機能します。
          </p>

          {/* 3 Plans */}
          <div className="relative mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
            {/* Advisory */}
            <div className="flex flex-col rounded border border-gray-200">
              <div className="border-b border-gray-200 px-6 py-8">
                <p className="text-xs font-bold tracking-widest text-gray-400">
                  01
                </p>
                <h3 className="mt-2 text-xl font-bold text-black">
                  アドバイザリー
                </h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-black">5</span>
                  <span className="ml-1 text-base font-bold text-black">
                    万円
                  </span>
                  <span className="ml-1 text-sm text-gray-400">/ 月</span>
                </p>
              </div>
              <div className="flex flex-1 flex-col px-6 py-6">
                <p className="text-xs font-bold text-gray-400">対象</p>
                <p className="mt-1 text-sm text-gray-600">
                  AI導入の方向性を定めたい企業
                </p>
                <p className="mt-5 text-xs font-bold text-gray-400">内容</p>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check />
                    月180分までの稼働
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    オンライン / オフライン対応
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    チャット相談
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    最新AIトレンド・リスク情報提供
                  </li>
                </ul>
                <p className="mt-auto pt-6 text-xs text-gray-400">
                  「まずは方向性を整理したい」企業向けの戦略設計プラン
                </p>
              </div>
            </div>

            {/* Executive (recommended) */}
            <div className="relative flex flex-col rounded border-2 border-black shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-xs font-bold text-white">
                推奨
              </div>
              <div className="border-b border-gray-200 bg-gray-900 px-6 py-8 rounded-t">
                <p className="text-xs font-bold tracking-widest text-gray-400">
                  02
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  エグゼクティブ
                </h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-white">15</span>
                  <span className="ml-1 text-base font-bold text-white">
                    万円
                  </span>
                  <span className="ml-1 text-sm text-gray-400">/ 月</span>
                </p>
              </div>
              <div className="flex flex-1 flex-col px-6 py-6">
                <p className="text-xs font-bold text-gray-400">対象</p>
                <p className="mt-1 text-sm text-gray-600">
                  業務への実装と成果創出を目指す企業
                </p>
                <p className="mt-5 text-xs font-bold text-gray-400">内容</p>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check />
                    月720分までの稼働
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    オンライン / オフライン対応
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    チャット相談
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    最新AIトレンド・リスク情報提供
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    具体的ツール選定・設計支援
                  </li>
                </ul>
                <p className="mt-auto pt-6 text-xs text-gray-400">
                  戦略設計に加え、実装フェーズまで踏み込む実行型プラン
                </p>
              </div>
            </div>

            {/* Enterprise */}
            <div className="flex flex-col rounded border border-gray-200">
              <div className="border-b border-gray-200 px-6 py-8">
                <p className="text-xs font-bold tracking-widest text-gray-400">
                  03
                </p>
                <h3 className="mt-2 text-xl font-bold text-black">
                  エンタープライズ
                </h3>
                <p className="mt-4">
                  <span className="text-2xl font-bold text-black">
                    Contact Us
                  </span>
                </p>
              </div>
              <div className="flex flex-1 flex-col px-6 py-6">
                <p className="text-xs font-bold text-gray-400">対象</p>
                <p className="mt-1 text-sm text-gray-600">
                  AI部署を丸ごと外注したい企業
                </p>
                <p className="mt-5 text-xs font-bold text-gray-400">内容</p>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check />
                    専用設計（custom）
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    稼働時間・体制を個別設計
                  </li>
                  <li className="flex items-start gap-2">
                    <Check />
                    高度なガバナンス設計・運用構築対応
                  </li>
                </ul>
                <p className="mt-auto pt-6 text-xs text-gray-400">
                  実質的な「外部AI責任者」体制の構築
                </p>
              </div>
            </div>
          </div>

          {/* Time charge + notes */}
          <div className="mx-auto mt-16 max-w-3xl space-y-8">
            <div className="rounded border border-gray-200 bg-gray-50 p-6">
              <h4 className="text-sm font-bold text-black">
                タイムチャージ制度
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                顧問プランの範囲を超える具体的な実装支援、または単発でのご依頼については、時間単位での利用が可能です。
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                <li>原則6分単位で計算（6分未満切上げ）</li>
                <li>
                  設定したAI顧問の時間あたり報酬単価 × 稼働時間
                </li>
                <li>
                  オフラインMTG等の移動時間は上記金額の50%にて計算
                </li>
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "ベンダー中立",
                  desc: "特定ツールの販売目的なし。最適な選定のみを行います。",
                },
                {
                  num: "02",
                  title: "セキュリティ保証",
                  desc: "Forbes掲載実績のあるAIガバナンス知見を標準装備。",
                },
                {
                  num: "03",
                  title: "教育支援",
                  desc: "社内AI担当者育成をオプションで提供可能。",
                },
              ].map((f) => (
                <div key={f.num} className="text-center">
                  <p className="text-xs font-bold text-gray-300">{f.num}</p>
                  <p className="mt-1 text-sm font-bold text-black">{f.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded bg-black px-7 py-3.5 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                まずは無料相談から
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6: 他社との違い ═══════ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black md:text-4xl">
            なぜUNCHAINなのか
          </h2>

          {/* Comparison table */}
          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded border border-gray-200">
            <div className="grid grid-cols-2 bg-gray-100 text-center text-xs font-bold text-gray-500">
              <div className="border-r border-gray-200 px-4 py-3">
                一般的なAIコンサル
              </div>
              <div className="px-4 py-3">UNCHAIN</div>
            </div>
            {COMPARISON.map((c, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-t border-gray-200"
              >
                <div className="border-r border-gray-200 px-4 py-4 text-sm text-gray-400">
                  {c.them}
                </div>
                <div className="px-4 py-4 text-sm font-medium text-black">
                  {c.us}
                </div>
              </div>
            ))}
          </div>

          {/* 4 Pillars */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <div
                key={p.num}
                className="rounded border border-gray-200 bg-white p-8"
              >
                <p className="text-xs font-bold text-gray-300">{p.num}</p>
                <h3 className="mt-2 text-base font-bold text-black">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: 導入企業の声 ═══════ */}
      <section id="testimonials" className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black md:text-4xl">
            AI顧問としての価値、導入企業が語る
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="flex flex-col rounded border border-gray-200 p-8"
              >
                <p className="text-xs font-bold tracking-wide text-gray-400">
                  {t.attr}
                </p>
                <p className="mt-1 text-sm font-bold text-black">{t.org}</p>
                <p className="mt-4 flex-1 text-sm leading-loose text-gray-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 9: UNCHAINとの将来 ═══════ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black md:text-4xl">
            AI顧問は、入口に過ぎない
          </h2>

          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-3">
            {[
              {
                step: "Step 1",
                title: "AI顧問としての継続的伴走",
              },
              {
                step: "Step 2",
                title: "経営レベルのAI意思決定パートナーへ",
              },
              {
                step: "Ultimate Goal",
                title: "長期的なAI戦略共創",
              },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  {s.step}
                </p>
                <p className="mt-3 text-sm font-bold text-black">{s.title}</p>
                {i < 2 && (
                  <div className="mx-auto mt-4 hidden h-px w-16 bg-gray-300 sm:block" />
                )}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-gray-600">
            AI顧問は、UNCHAINが日本企業のAI意思決定レイヤーを握るための入口です。
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 10: CONTACT ═══════ */}
      <section id="contact" className="border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black md:text-4xl">
            まずは、AI活用の現状を話しませんか？
          </h2>
          <p className="mt-4 text-center text-sm text-gray-500">
            初回相談は無料です。経営層・現場担当者の両方でのご参加をお勧めします。
          </p>

          <form
            className="mt-12 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const email = fd.get("email") as string;
              if (isFreeMail(email)) {
                setEmailError(
                  "企業メールアドレスをご入力ください（フリーメール不可）"
                );
                return;
              }
              setEmailError("");
              // TODO: wire up form submission
              alert("送信しました。担当者よりご連絡いたします。");
            }}
          >
            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-black">
                会社名 <span className="text-red-500">*</span>
              </label>
              <input
                name="company"
                required
                className="mt-1 w-full rounded border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                placeholder="株式会社UNCHAIN"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-black">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                placeholder="山田 太郎"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                className={`mt-1 w-full rounded border px-4 py-3 text-sm outline-none transition focus:border-black ${
                  emailError ? "border-red-400" : "border-gray-300"
                }`}
                placeholder="taro@example.co.jp"
                onChange={() => emailError && setEmailError("")}
              />
              {emailError && (
                <p className="mt-1 text-xs text-red-500">{emailError}</p>
              )}
            </div>

            {/* Industry + Employee count */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-black">
                  業種
                </label>
                <select
                  name="industry"
                  className="mt-1 w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-black"
                  defaultValue=""
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  従業員数
                </label>
                <select
                  name="employees"
                  className="mt-1 w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-black"
                  defaultValue=""
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  {EMPLOYEE_COUNTS.map((ec) => (
                    <option key={ec} value={ec}>
                      {ec}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-black">
                ご相談内容
              </label>
              <textarea
                name="message"
                rows={5}
                className="mt-1 w-full rounded border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                placeholder="現在のAI活用状況やご相談したい内容をお書きください"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded bg-black py-4 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              無料相談を申し込む
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-400">
            メールでのお問い合わせは{" "}
            <a
              href="mailto:contact@unchain.tech"
              className="underline underline-offset-2"
            >
              contact@unchain.tech
            </a>
          </p>
        </div>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <span className="text-xs text-gray-400">
            &copy; 2025 UNCHAIN Inc.
          </span>
          <a
            href="#"
            className="text-xs text-gray-400 underline underline-offset-2 transition hover:text-gray-600"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

/* ─── tiny icon components ─── */

function ArrowRight() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function Check() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-black"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
