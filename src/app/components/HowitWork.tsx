import Image from "next/image";

export default function HowItWork() {
    return (
    <div className="bg-[url('/howit-work.png')] bg-cover bg-no-repeat bg-center py-20">
        <div className="container mx-auto">
          <div className="pb-10">
            <h2 className="text-center font-bold text-secondary sm:text-[50px] text-[30px]">How it <span className="text-primary">works</span></h2>          
            <div className="w-40 h-1 mx-auto my-2 rounded-full 
                bg-gradient-to-r from-primary via-secondary to-primary 
                bg-[length:200%_100%]"></div>          
            </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-15 gap-x-30 p-4">
            <div className="group overflow-hidden relative border-b-[1px] border-primary pb-10 transition-all transform hover:-translate-y-2 hover:cursor-pointer">
              <strong className="text-secondary font-bold group-hover:pl-2 transition-all">STEP 1</strong>
              <h3 className="flex gap-2 text-primary sm:text-[40px] text-[28px] font-bold">
                STRATEGY
                <Image
                  src="/strategy-icon.png"
                  alt="Strategy Icon"
                  width={45}   
                  height={45} 
                  className="object-contain transform group-hover:rotate-[50deg] transition-all"
                />
              </h3>
                <p>
                  {"Before anything else, we immerse ourselves in understanding your project's unique identity. This isn't a one-size-fits-all approach; it's a deep dive into your core values, your existing community's dynamics, and your precise growth objectives."}
                </p>
                <p>
                  {"We sit down for a collaborative session to pinpoint exactly what you aim to achieve through partnerships, outlining your ideal target audience and preferred collaboration types. This comprehensive conceptualization phase allows us to craft a bespoke partnership strategy, acting as the essential blueprint for identifying truly synergistic connections that resonate with your long-term vision."}
                </p>
                <p>
                  {"It ensures every following step is perfectly aligned with your specific needs."}
                </p>
            </div>
            <div className="group overflow-hidden relative border-b-[1px] border-primary pb-10 transition-all transform hover:-translate-y-2 hover:cursor-pointer">
              <strong className="text-secondary font-bold group-hover:pl-2 transition-all">STEP 2</strong>
              <h3 className="flex gap-2 text-primary sm:text-[40px] text-[28px] font-bold">
                MATCHMAKING
                <Image
                  src="/matchmaking.png"
                  alt="Strategy Icon"
                  width={45}   
                  height={55} 
                  className="object-contain transform group-hover:rotate-[50deg] transition-all"
                />
              </h3>
                <p>
                  {"With a clear, tailored strategy in place, we activate our extensive, carefully curated network to identify the perfect collaborative partners for your project."}
                </p>
                <p>
                  {"Our process goes beyond superficial metrics; we're looking for projects that not only align seamlessly with your strategic vision but also share complementary goals and offer a genuine, mutually beneficial win-win scenario.This matchmaking stage involves detailed analysis to ensure cultural fit and audience overlap"}
                </p>
                <p>
                  {"Once identified, we orchestrate the initial introductions, setting the optimal stage for productive conversations and laying the groundwork for partnerships that promise significant shared value and amplified reach."}
                </p>
            </div>
            <div className="group overflow-hidden relative border-b-[1px] border-primary pb-10 transition-all transform hover:-translate-y-2 hover:cursor-pointer">
              <strong className="text-secondary font-bold group-hover:pl-2 transition-all">STEP 3</strong>
              <h3 className="flex gap-2 text-primary sm:text-[40px] text-[28px] font-bold">
                LIVE SUPPORT
                <Image
                  src="/support-icon.png"
                  alt="Strategy Icon"
                  width={33}   
                  height={33} 
                  className="object-contain transform group-hover:rotate-[50deg] transition-all"
                />
              </h3>
                <p>
                  {"Our commitment to your success extends far beyond initial introductions. We provide continuous, hands-on support throughout the entire lifecycle of your partnerships, acting as your dedicated navigators."}
                </p>
                <p>
                  {"Whether you're facing early-stage coordination challenges, require assistance in structuring joint marketing campaigns, or need strategic advice on co-developing features or content, our team is actively involved.We proactively monitor progress, mediate discussions if needed, and offer practical solutions to ensure every collaborative effort runs smoothly and delivers tangible, impactful results."}
                </p>
                <p>
                  {"Our goal is to ensure your partnerships not only launch successfully but also thrive and achieve their full potential."}
                </p>
            </div>
            <div className="group overflow-hidden relative border-b-[1px] border-primary pb-10 transition-all transform hover:-translate-y-2 hover:cursor-pointer">
              <strong className="text-secondary font-bold group-hover:pl-2 transition-all">STEP 4</strong>
              <h3 className="flex gap-2 text-primary sm:text-[40px] text-[28px] font-bold">
                REGULAR REPORTS
                <Image
                  src="/reports-icon.png"
                  alt="Strategy Icon"
                  width={33}   
                  height={33} 
                  className="object-contain transform group-hover:rotate-[50deg] transition-all"
                />
              </h3>
                <p>
                  {"Transparency and data-driven insights are paramount to our process. At the close of each month, you'll receive comprehensive, easy-to-understand reports detailing the performance and impact of all your active partnerships"}
                </p>
                <p>
                  {"These reports offer a clear overview of key metrics, collaborative achievements, and community engagement results. This invaluable feedback loop allows us to collectively assess what's working best, identify areas for optimization, and fine-tune ongoing strategies to maximize their effectiveness."}
                </p>
                <p>
                  {"It's a crucial step for ensuring continuous improvement, providing you with the clarity needed to make informed decisions and sustain your community's organic growth trajectory."}
                </p>
            </div>
          </div>
        </div>
    </div>
    );
}