import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ===== Top Nav ===== */}
      <nav className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold text-black">AI Adviser</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500">AIアドバイザリー</span>
        </div>
        <a
          href="#contact"
          className="rounded-sm bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          お問い合わせ
        </a>
      </nav>

      {/* ===== Sub Nav ===== */}
      <div className="border-b border-gray-200 px-8">
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#overview" className="border-b-2 border-black pb-3 font-medium text-black">
            概要
          </a>
          <a href="#features" className="pb-3 transition hover:text-black">
            特徴
          </a>
          <a href="#plans" className="pb-3 transition hover:text-black">
            料金プラン
          </a>
        </div>
      </div>

      {/* ===== Hero (Text left + Image right) ===== */}
      <section id="overview" className="grid min-h-screen md:grid-cols-[1fr_2fr]">
        {/* Left: Text */}
        <div className="flex flex-col justify-center px-8 py-16 md:py-24 md:pl-8 md:pr-12">
          <h1 className="text-5xl leading-tight font-bold tracking-tight text-black md:text-7xl md:leading-[1.05]">
            AI Adviser
          </h1>
          <p className="mt-5 text-xl text-gray-600 md:text-2xl">
            AI導入・活用を、現場から支える。
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-sm bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            無料相談を申し込む
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        {/* Right: Image (landscape ratio, vertically centered) */}
        <div className="flex items-start px-8 pt-8 pb-8 md:px-0 md:pt-16 md:pr-8">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-sm bg-gray-100">
            <Image
              src="/hero.jpg"
              alt="AIアドバイザーがオンサイトで現場を確認する様子"
              fill
              className="object-cover"
              priority
              unoptimized
            />
            {/* Fallback if no image */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                  <svg className="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400">現場訪問イメージ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="border-t border-gray-200 px-8 py-24">
        <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
          3つの特徴
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Card 1 - On-site (emphasized) */}
          <div className="md:col-span-2 md:row-span-2">
            <div className="relative h-full overflow-hidden rounded-sm bg-gray-900">
              <Image
                src="/onsite.jpg"
                alt="オンサイト訪問"
                fill
                className="object-cover opacity-60"
                unoptimized
              />
              {/* Fallback + Overlay */}
              <div className="relative flex h-full min-h-[400px] flex-col justify-end p-8">
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  最大の強み
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  オンサイト訪問で
                  <br />
                  現場を徹底理解
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-300">
                  実際にオフィスや現場に伺い、業務フローを直接確認。オンラインだけでは見落としがちなボトルネックを発見し、現場に即した実践的なAI活用をご提案します。
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-sm bg-gray-100 p-8">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              ロードマップ
            </p>
            <h3 className="mt-3 text-lg font-bold text-black">
              「AIを使いたい」を
              <br />
              具体的な計画に
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              漠然とした「AIを活用したい」というご要望を、御社の業務に合わせた具体的な段階的導入計画に落とし込みます。何を、いつ、どの順番で進めるかを明確にします。
            </p>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-sm bg-gray-100 p-8">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              専任制
            </p>
            <h3 className="mt-3 text-lg font-bold text-black">
              専任アドバイザーが
              <br />
              継続的に伴走
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              導入から運用まで一人のアドバイザーが責任をもってサポート。社内にAI人材がいなくても安心してAI導入を進められます。
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-200 pt-12">
          {[
            { number: "100+", label: "AI導入支援の実績" },
            { number: "92%", label: "クライアント満足度" },
            { number: "2週間〜", label: "最短導入期間" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-black md:text-4xl">{stat.number}</p>
              <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Plans ===== */}
      <section id="plans" className="border-t border-gray-200 px-8 py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-black md:text-4xl">
          料金プラン
        </h2>

        {/* Spot Plans */}
        <div className="mt-20">
          <h3 className="text-center text-lg font-bold text-black">スポットプラン</h3>
          <p className="mt-2 text-center text-sm text-gray-500">
            まずは気軽にご相談いただけるスポットプランです。
          </p>
          <div className="mx-auto mt-10 grid max-w-2xl md:grid-cols-2">
            <div className="border border-gray-200 p-10 text-center">
              <p className="text-sm text-gray-500">オンライン相談</p>
              <p className="mt-1 text-xs text-gray-400">1時間</p>
              <p className="mt-5">
                <span className="text-5xl font-bold text-black">3</span>
                <span className="ml-1 text-lg font-bold text-black">万円</span>
                <span className="ml-1 text-sm text-gray-400">（税抜）</span>
              </p>
            </div>
            <div className="border border-l-0 border-gray-200 p-10 text-center max-md:border-l max-md:border-t-0">
              <p className="text-sm text-gray-500">オンサイト訪問</p>
              <p className="mt-1 text-xs text-gray-400">1時間</p>
              <p className="mt-5">
                <span className="text-5xl font-bold text-black">5</span>
                <span className="ml-1 text-lg font-bold text-black">万円</span>
                <span className="ml-1 text-sm text-gray-400">（税抜）</span>
              </p>
            </div>
          </div>
        </div>

        {/* Monthly Plans */}
        <div className="mt-24">
          <h3 className="text-center text-lg font-bold text-black">月額プラン</h3>
          <p className="mt-2 text-center text-sm text-gray-500">
            継続的なAI導入支援をご希望の方へ。
          </p>

          <div className="relative mx-auto mt-14 grid max-w-5xl md:grid-cols-3">
            {/* Light */}
            <div className="border border-gray-200">
              <div className="border-b border-gray-200 px-6 py-8 text-center">
                <h4 className="text-xl font-bold text-black">ライトプラン</h4>
                <p className="mt-2 text-xs text-gray-400">まずは気軽に試したい方へ</p>
              </div>
              <div className="divide-y divide-gray-200 px-6">
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">月額費用</p>
                  <p className="mt-2">
                    <span className="text-5xl font-bold text-black">15</span>
                    <span className="ml-1 text-base font-bold text-black">万円</span>
                    <span className="ml-1 text-xs text-gray-400">（税抜）</span>
                  </p>
                </div>
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">オンライン連絡</p>
                  <p className="mt-2 text-2xl font-bold text-black">無制限</p>
                </div>
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">オンライン会議</p>
                  <p className="mt-2">
                    <span className="text-4xl font-bold text-black">4</span>
                    <span className="ml-1 text-sm text-gray-500">回/月</span>
                  </p>
                </div>
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">オンサイト訪問</p>
                  <p className="mt-2 text-sm text-gray-300">対応していません</p>
                </div>
              </div>
            </div>

            {/* Standard (recommended) */}
            <div className="relative z-10 -mx-px border-2 border-black shadow-lg max-md:mt-8">
              <div className="bg-[#1e293b] px-6 py-8 text-center">
                <h4 className="text-xl font-bold text-white">スタンダードプラン</h4>
                <p className="mt-2 text-xs text-gray-300">本格的にAIを導入したい方へ</p>
              </div>
              <div className="divide-y divide-gray-200 px-6">
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">月額費用</p>
                  <p className="mt-2">
                    <span className="text-5xl font-bold text-black">30</span>
                    <span className="ml-1 text-base font-bold text-black">万円</span>
                    <span className="ml-1 text-xs text-gray-400">（税抜）</span>
                  </p>
                </div>
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">オンライン連絡</p>
                  <p className="mt-2 text-2xl font-bold text-black">無制限</p>
                </div>
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">オンライン会議</p>
                  <p className="mt-2">
                    <span className="text-4xl font-bold text-black">4</span>
                    <span className="ml-1 text-sm text-gray-500">回/月</span>
                  </p>
                </div>
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">オンサイト訪問</p>
                  <p className="mt-2">
                    <span className="text-4xl font-bold text-black">2</span>
                    <span className="ml-1 text-sm text-gray-500">回/月</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Premium */}
            <div className="border border-l-0 border-gray-200 max-md:border-l max-md:border-t-0 max-md:mt-8">
              <div className="border-b border-gray-200 px-6 py-8 text-center">
                <h4 className="text-xl font-bold text-black">プレミアムプラン</h4>
                <p className="mt-2 text-xs text-gray-400">AI活用で業務効率をより高めたい方へ</p>
              </div>
              <div className="divide-y divide-gray-200 px-6">
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">月額費用</p>
                  <p className="mt-2 text-2xl font-bold text-black">要相談</p>
                </div>
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">オンライン連絡</p>
                  <p className="mt-2 text-2xl font-bold text-black">無制限</p>
                </div>
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">オンライン会議</p>
                  <p className="mt-2 text-2xl font-bold text-black">無制限</p>
                </div>
                <div className="py-6 text-center">
                  <p className="text-xs text-gray-500">オンサイト訪問</p>
                  <p className="mt-2 text-2xl font-bold text-black">無制限</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-gray-400">
            ※ ライトプランは最低6ヶ月、スタンダードプランは最低3ヶ月からのご利用をお願いしております。
          </p>
        </div>
      </section>

      {/* ===== CTA (Schedule section like Palantir) ===== */}
      <section id="contact" className="border-t border-gray-200 px-8 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
            まずはお気軽にご相談ください
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            AI導入に関するお悩みやご質問がありましたら、お気軽にお問い合わせください。初回のご相談は無料です。御社の状況をお聞きした上で、最適なプランをご提案いたします。
          </p>
          <a
            href="mailto:contact@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            無料相談を申し込む
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>&copy; {new Date().getFullYear()} AI Adviser</span>
        </div>
      </footer>
    </div>
  );
}

