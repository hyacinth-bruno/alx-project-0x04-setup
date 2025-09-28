// pages/index.tsx

import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { FaArrowRight, FaImage, FaPenFancy, FaRocket, FaShieldAlt, FaUsers } from "react-icons/fa";
import { PageRouteProps } from "../interface";

export default function Home() {
  const router = useRouter();

  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="relative isolate overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl sm:left-[15%]"></div>
        <div className="absolute -bottom-40 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-purple-500/30 blur-3xl sm:right-[10%]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_rgba(15,23,42,0.9))]"></div>
      </div>

      <section className="container mx-auto flex min-h-[70vh] flex-col items-center gap-12 px-6 pb-24 pt-24 text-center lg:pt-32">
        <div className="space-y-6 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-widest text-white/80 backdrop-blur">
            <FaRocket className="text-orange-300" aria-hidden="true" />
            Launch faster with AI copilots
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Create, iterate, and launch AI experiences with <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Splash App</span>
          </h1>
          <p className="text-base text-slate-200/80 sm:text-lg">
            Build high-impact content, visuals, and interactions in seconds. Splash App brings your ideas to life with curated AI workflows designed for teams that move quickly.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
            buttonLabel="Generate Text"
            buttonBackgroundColor="blue"
            icon={<FaPenFancy />}
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
            buttonLabel="Text to Image"
            buttonBackgroundColor="green"
            icon={<FaImage />}
            className="bg-opacity-80"
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/counter-app" })}
            buttonLabel="Contact Us"
            buttonBackgroundColor="orange"
            icon={<FaArrowRight />}
          />
        </div>

        <dl className="grid w-full max-w-4xl grid-cols-1 gap-6 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <dt className="text-sm uppercase tracking-wide text-slate-300">Automation speed</dt>
            <dd className="mt-2 text-3xl font-semibold text-white">10x faster</dd>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <dt className="text-sm uppercase tracking-wide text-slate-300">Teams onboarded</dt>
            <dd className="mt-2 text-3xl font-semibold text-white">1.5k+</dd>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <dt className="text-sm uppercase tracking-wide text-slate-300">Output quality</dt>
            <dd className="mt-2 text-3xl font-semibold text-white">98% approval</dd>
          </div>
        </dl>
      </section>

      <section className="container mx-auto grid gap-8 px-6 pb-32 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <h2 className="text-3xl font-semibold text-white">Everything you need to ship delightful AI surfaces</h2>
          <p className="text-base text-slate-200/80">
            Splash App combines intelligent drafting, design-ready imagery, and collaborative review in one visually rich canvas. Switch between flows instantly and keep your brand voice aligned across every channel.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 rounded-2xl bg-white/5 p-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                <FaPenFancy aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">Guided copywriting</h3>
                <p className="text-sm text-slate-300">Fine-tuned prompts help you storyboard campaigns, launch updates, and answer customers effortlessly.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-2xl bg-white/5 p-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                <FaImage aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">On-brand visuals</h3>
                <p className="text-sm text-slate-300">Spin up illustration-ready assets with color palettes, depth, and lighting tuned to your brand identity.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-2xl bg-white/5 p-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-300">
                <FaUsers aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">Real-time review</h3>
                <p className="text-sm text-slate-300">Collaborate with your teammates in context, assign tasks, and publish when everyone gives the green light.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/15 via-white/5 to-white/0 p-8 backdrop-blur">
            <h3 className="text-2xl font-semibold text-white">Security-first by design</h3>
            <p className="mt-3 text-sm text-slate-200/80">
              Enterprise-grade safeguards keep your data protected while custom guardrails ensure every output stays compliant.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100/90">
              <FaShieldAlt className="text-sky-300" aria-hidden="true" />
              SOC2, GDPR, and AI governance friendly
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Need a custom flow?</h3>
            <p className="mt-3 text-sm text-slate-300">
              We tailor playbooks for your industry with human-in-the-loop checkpoints from strategy to shipping.
            </p>
            <div className="mt-6">
              <Button
                action={() => routeToNextPage({ pageRoute: "/counter-app" })}
                buttonLabel="Talk with our team"
                buttonBackgroundColor="purple"
                fullWidth
                icon={<FaArrowRight />}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
