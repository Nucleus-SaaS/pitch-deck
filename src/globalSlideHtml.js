/**
 * USD pricing HTML for non-India visitors. Only currency-related text differs from default slides.
 */
export const globalHtmlById = {
  2: `<div class="slide-container">
            <!-- Decorative Background -->
            <div class="circle-decor"></div>
            <!-- Left Content -->
            <div class="content-left">
                <h1 class="title">The Hidden Tax on Your Time</h1>
                <p class="subtitle">
                    Your leadership effectiveness is being drained by manual
                    reporting.
                </p>
                <p class="description">
                    Every hour spent compiling updates is an hour lost on
                    strategic thinking, mentoring, and building the future of
                    your product.
                </p>
            </div>
            <!-- Right Content -->
            <div class="content-right">
                <!-- Box 1 -->
                <div class="number-box">
                    <div class="number">01.</div>
                    <div class="number-content">
                        <span class="day-title">Monday Morning</span>
                        <ul class="task-list">
                            <li>1 hour: Compile updates for CEO</li>
                            <li>30 mins: Prepare for standup</li>
                        </ul>
                    </div>
                </div>
                <!-- Box 2 -->
                <div class="number-box">
                    <div class="number">02.</div>
                    <div class="number-content">
                        <span class="day-title">Mid-Week</span>
                        <ul class="task-list">
                            <li>2 hours: Board deck preparation</li>
                            <li>45 mins: Answer "Why are we behind?"</li>
                        </ul>
                    </div>
                </div>
                <!-- Box 3 -->
                <div class="number-box">
                    <div class="number">03.</div>
                    <div class="number-content">
                        <span class="day-title">Friday</span>
                        <ul class="task-list">
                            <li>1 hour: Sprint retrospective prep</li>
                            <li>30 mins: Weekly team summary</li>
                        </ul>
                    </div>
                </div>
                <!-- Summary Box -->
                <div class="summary-box">
                    <span class="summary-total"
                        >TOTAL: 6 hours/week = 300 hours/year</span
                    >
                    <div class="summary-stat">
                        <span
                            >Real Cost:
                            <span class="summary-highlight"
                                >$20-25k per year</span
                            ></span
                        >
                    </div>
                    <div
                        class="summary-stat"
                        style="font-size: 16px; margin-top: 5px; opacity: 0.9"
                    >
                        <span
                            >That's 25% of your week on "reporting and
                            explaining"</span
                        >
                    </div>
                </div>
            </div>
        </div>`,

  7: `<div class="slide-container">
            <!-- Decorative Background -->
            <div class="circle-decor"></div>
            <div class="circle-decor-2"></div>
            <!-- Left Content -->
            <div class="content-left">
                <h1 class="title">How It Works</h1>
                <p class="subtitle">Up and running in 24 hours</p>
                <p class="description">
                    It's like hiring a Chief of Staff who attends every standup,
                    reads every commit, never sleeps—but costs
                    <span class="highlight-text">$349/month</span>, not
                    <span class="highlight-text">$350k/year</span>.
                </p>
            </div>
            <!-- Right Content -->
            <div class="content-right">
                <!-- Box 1 -->
                <div class="number-box">
                    <div class="number">01.</div>
                    <div class="number-content">
                        <span class="step-title"
                            >Connect Your Tools (10 min)</span
                        >
                        <p class="step-desc">
                            Simple OAuth connections: GitHub/GitLab,
                            Jira/Linear, Slack, Gmail, WhatsApp.
                        </p>
                        <span class="step-details"
                            >No API keys. No code changes. Read-only
                            access.</span
                        >
                    </div>
                </div>
                <!-- Box 2 -->
                <div class="number-box">
                    <div class="number">02.</div>
                    <div class="number-content">
                        <span class="step-title"
                            >AI Learns Your Org (24 hours)</span
                        >
                        <p class="step-desc">
                            Analyzes 90 days of commits, PRs, tickets. Learns
                            team structure, project patterns, communication
                            norms.
                        </p>
                    </div>
                </div>
                <!-- Box 3 -->
                <div class="number-box">
                    <div class="number">03.</div>
                    <div class="number-content">
                        <span class="step-title"
                            >Start Asking Questions (Forever)</span
                        >
                        <p class="step-desc">
                            Via Slack bot, WhatsApp, Web dashboard, Daily email.
                        </p>
                        <span class="step-details"
                            >Example queries: "What shipped?", "Why behind?",
                            "P0 risks?"</span
                        >
                    </div>
                </div>
            </div>
        </div>`,

  9: `<div class="slide-container relative">
            <!-- Decorative Backgrounds -->
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <!-- Left Content: Title + ROI -->
            <div class="w-1/2 p-16 flex flex-col justify-center z-10">
                <h1
                    class="text-6xl font-bold text-purple-primary mb-8 leading-tight"
                >
                    What This Means for You
                </h1>
                <div class="roi-card bg-purple-faint rounded-r-xl p-8 mt-4">
                    <h3
                        class="text-2xl font-bold text-purple-primary mb-6 border-b border-purple-200 pb-2"
                    >
                        ROI CALCULATION
                    </h3>
                    <div class="space-y-4 mb-6">
                        <div class="flex justify-between items-center">
                            <p class="text-lg text-gray-600 font-medium">
                                Cost of Nucleus
                            </p>
                            <p class="text-xl font-bold text-gray-800">
                                $349<span
                                    class="text-sm font-normal text-gray-500"
                                    >/mo</span
                                >
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <p class="text-lg text-gray-600 font-medium">
                                Your time saved
                            </p>
                            <p class="text-xl font-bold text-gray-800">
                                24 hours<span
                                    class="text-sm font-normal text-gray-500"
                                    >/mo</span
                                >
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <p class="text-lg text-gray-600 font-medium">
                                Your hourly rate
                            </p>
                            <p class="text-xl font-bold text-gray-800">
                                $150<span
                                    class="text-sm font-normal text-gray-500"
                                    >/hr</span
                                >
                            </p>
                        </div>
                        <div
                            class="flex justify-between items-center pt-2 border-t border-purple-200"
                        >
                            <p class="text-lg text-purple-primary font-bold">
                                Value of time saved
                            </p>
                            <p class="text-2xl font-bold text-purple-primary">
                                $3,600<span
                                    class="text-sm font-normal text-gray-500"
                                    >/mo</span
                                >
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-purple-primary text-white rounded-lg p-4 text-center transform scale-105 shadow-lg"
                    >
                        <p class="text-3xl font-bold">ROI: 10x</p>
                        <p class="text-sm opacity-90">
                            You save ~$3.5k, spend $349
                        </p>
                    </div>
                </div>
            </div>
            <!-- Right Content: Benefits -->
            <div
                class="w-1/2 p-16 pl-0 flex flex-col justify-center z-10 space-y-8"
            >
                <div
                    class="bg-white rounded-xl shadow-sm border border-purple-100 p-6 relative"
                >
                    <div
                        class="absolute -left-3 top-6 w-6 h-6 bg-purple-primary transform rotate-45"
                    ></div>
                    <h3 class="text-xl font-bold text-purple-primary mb-3 pl-4">
                        FOR YOU
                    </h3>
                    <ul class="space-y-2 text-gray-700 pl-4">
                        <li class="flex items-start">
                            <span class="text-purple-primary mr-3 mt-1"
                                ><i class="fas fa-clock"></i
                            ></span>
                            <span>6 hours back per week</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-purple-primary mr-3 mt-1"
                                ><i class="fas fa-mug-hot"></i
                            ></span>
                            <span>Sunday evening confidence</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-purple-primary mr-3 mt-1"
                                ><i class="fas fa-bullseye"></i
                            ></span>
                            <span>Board meeting prep: 5 mins</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-purple-primary mr-3 mt-1"
                                ><i class="fas fa-chart-line"></i
                            ></span>
                            <span>Data-backed decisions</span>
                        </li>
                    </ul>
                </div>
                <div
                    class="bg-white rounded-xl shadow-sm border border-purple-100 p-6 relative"
                >
                    <div
                        class="absolute -left-3 top-6 w-6 h-6 bg-purple-300 transform rotate-45"
                    ></div>
                    <h3 class="text-xl font-bold text-purple-primary mb-3 pl-4">
                        FOR YOUR TEAM
                    </h3>
                    <ul class="space-y-2 text-gray-700 pl-4">
                        <li class="flex items-start">
                            <span class="text-purple-primary mr-3 mt-1"
                                ><i class="fas fa-eye"></i
                            ></span>
                            <span>Work is finally visible</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-purple-primary mr-3 mt-1"
                                ><i class="fas fa-users-cog"></i
                            ></span>
                            <span>Better task matching</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-purple-primary mr-3 mt-1"
                                ><i class="fas fa-triangle-exclamation"></i
                            ></span>
                            <span>Proactive risk detection</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-purple-primary mr-3 mt-1"
                                ><i class="fas fa-arrow-trend-up"></i
                            ></span>
                            <span>Clear prioritization</span>
                        </li>
                    </ul>
                </div>
                <div
                    class="bg-white rounded-xl shadow-sm border border-purple-100 p-6 relative"
                >
                    <div
                        class="absolute -left-3 top-6 w-6 h-6 bg-purple-100 transform rotate-45"
                    ></div>
                    <h3 class="text-xl font-bold text-purple-primary mb-3 pl-4">
                        FOR STAKEHOLDERS
                    </h3>
                    <ul class="space-y-2 text-gray-700 pl-4">
                        <li class="flex items-start">
                            <span class="text-purple-primary mr-3 mt-1"
                                ><i class="fas fa-file-invoice"></i
                            ></span>
                            <span>Auto-generated updates</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-purple-primary mr-3 mt-1"
                                ><i class="fas fa-magnifying-glass"></i
                            ></span>
                            <span>Transparency without bother</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-purple-primary mr-3 mt-1"
                                ><i class="fas fa-handshake"></i
                            ></span>
                            <span>Tech work made understandable</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`,

  10: `<div class="slide-container">
            <!-- Decorative Background -->
            <div class="circle-decor"></div>
            <!-- Left Content -->
            <div class="content-left">
                <h1 class="title">Simple, Transparent Pricing</h1>
                <p class="description">
                    Flat pricing — not per-seat. You pay the same whether you
                    have 30 or 90 engineers. We believe in scaling with your
                    value, not your headcount.
                </p>
                <div class="comparison-box">
                    <span class="comparison-title"
                        >COMPETITOR COMPARISON (50 engineers)</span
                    >
                    <div class="comparison-row">
                        <span>LinearB ($60/dev × 50)</span>
                        <span>$3,000/mo</span>
                    </div>
                    <div class="comparison-row">
                        <span>Nucleus (Flat Rate)</span>
                        <span>$349/mo</span>
                    </div>
                    <div class="comparison-row savings">
                        <span>YOU SAVE:</span>
                        <span>$2,651/mo (88%)</span>
                    </div>
                </div>
            </div>
            <!-- Right Content -->
            <div class="content-right">
                <!-- Box 1: Starter -->
                <div class="pricing-card">
                    <div class="card-number">01</div>
                    <div class="card-content">
                        <div class="plan-header">
                            <span class="plan-name">STARTER</span>
                            <span class="plan-price">$149/mo</span>
                        </div>
                        <ul class="feature-list">
                            <li>For teams of 10-30 engineers</li>
                            <li>3 core integrations</li>
                            <li>Weekly AI summaries &amp; basic dashboard</li>
                        </ul>
                        <p class="perfect-for">
                            Perfect for: "Testing if this works for us"
                        </p>
                    </div>
                </div>
                <!-- Box 2: Professional -->
                <div class="pricing-card popular">
                    <div class="popular-badge">MOST POPULAR</div>
                    <div class="card-number">02</div>
                    <div class="card-content">
                        <div class="plan-header">
                            <span class="plan-name">PROFESSIONAL</span>
                            <span class="plan-price">$349/mo</span>
                        </div>
                        <ul class="feature-list">
                            <li>For teams of 30-100 engineers</li>
                            <li>All 6 integrations + Daily AI insights</li>
                            <li>
                                Unlimited queries, Analytics &amp; Risk
                                detection
                            </li>
                            <li>
                                Developer skill matching &amp; Tech debt
                                prioritization
                            </li>
                        </ul>
                        <p class="perfect-for">
                            Perfect for: "Complete engineering visibility"
                        </p>
                    </div>
                </div>
                <!-- Box 3: Enterprise -->
                <div class="pricing-card">
                    <div class="card-number">03</div>
                    <div class="card-content">
                        <div class="plan-header">
                            <span class="plan-name">ENTERPRISE</span>
                            <span class="plan-price">Custom</span>
                        </div>
                        <ul class="feature-list">
                            <li>For teams of 100+ engineers</li>
                            <li>Everything + SSO &amp; custom integrations</li>
                            <li>SLA guarantees &amp; dedicated support</li>
                        </ul>
                        <p class="perfect-for">
                            Perfect for: "Multi-team organizations"
                        </p>
                    </div>
                </div>
                <div class="footer-note">
                    <p>14-day free trial. No credit card required.</p>
                </div>
            </div>
        </div>`,

  11: `<div class="slide-container relative">
            <!-- Decorative Backgrounds -->
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <!-- Left Content -->
            <div
                class="w-7/12 p-12 pr-6 flex flex-col justify-center z-10 h-full"
            >
                <div class="flex items-center mb-6">
                    <h1
                        class="text-5xl font-bold text-purple-primary leading-tight mr-4"
                    >
                        🚀 Pilot Program
                    </h1>
                    <span
                        class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold border border-red-200 shadow-sm animate-pulse"
                    >
                        ONLY 10 SPOTS LEFT
                    </span>
                </div>
                <div class="grid grid-cols-2 gap-6 mb-6">
                    <div
                        class="bg-white rounded-xl shadow-sm border border-purple-100 p-5"
                    >
                        <h3
                            class="text-lg font-bold text-purple-primary mb-3 border-b border-purple-100 pb-2"
                        >
                            <i class="fas fa-gift mr-2"></i>WHAT YOU GET
                        </h3>
                        <ul class="space-y-2 text-gray-700 text-sm">
                            <li class="flex items-start">
                                <i
                                    class="fas fa-check-circle text-green-500 mt-1 mr-2 text-xs"
                                ></i>
                                <span class="font-bold"
                                    >3 months completely FREE ($0)</span
                                >
                            </li>
                            <li class="flex items-start">
                                <i
                                    class="fas fa-check-circle text-green-500 mt-1 mr-2 text-xs"
                                ></i>
                                <span
                                    >Lifetime pricing:
                                    <strong>$70/mo</strong> (vs $349)</span
                                >
                            </li>
                            <li class="flex items-start">
                                <i
                                    class="fas fa-check-circle text-green-500 mt-1 mr-2 text-xs"
                                ></i>
                                <span>All Professional features included</span>
                            </li>
                            <li class="flex items-start">
                                <i
                                    class="fas fa-check-circle text-green-500 mt-1 mr-2 text-xs"
                                ></i>
                                <span
                                    >Direct line to founder (priority
                                    support)</span
                                >
                            </li>
                            <li class="flex items-start">
                                <i
                                    class="fas fa-check-circle text-green-500 mt-1 mr-2 text-xs"
                                ></i>
                                <span>Your feedback shapes the product</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="bg-purple-faint rounded-xl border border-purple-100 p-5"
                    >
                        <h3
                            class="text-lg font-bold text-purple-primary mb-3 border-b border-purple-200 pb-2"
                        >
                            <i class="fas fa-hand-holding-heart mr-2"></i>WHAT
                            WE ASK
                        </h3>
                        <ul class="space-y-2 text-gray-700 text-sm">
                            <li class="flex items-start">
                                <i
                                    class="fas fa-arrow-right text-purple-primary mt-1 mr-2 text-xs"
                                ></i>
                                <span
                                    >Minimum tech. team size should be 10</span
                                >
                            </li>
                            <li class="flex items-start">
                                <i
                                    class="fas fa-arrow-right text-purple-primary mt-1 mr-2 text-xs"
                                ></i>
                                <span
                                    >Use it actively for 6 months minimum</span
                                >
                            </li>
                            <li class="flex items-start">
                                <i
                                    class="fas fa-arrow-right text-purple-primary mt-1 mr-2 text-xs"
                                ></i>
                                <span>Give us honest feedback</span>
                            </li>
                            <li class="flex items-start">
                                <i
                                    class="fas fa-arrow-right text-purple-primary mt-1 mr-2 text-xs"
                                ></i>
                                <span>Optional: Let us write a case study</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    class="bg-purple-primary text-white rounded-xl p-5 shadow-lg relative overflow-hidden"
                >
                    <div
                        class="absolute right-0 top-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"
                    ></div>
                    <h3
                        class="text-lg font-bold mb-3 border-b border-white border-opacity-20 pb-2"
                    >
                        THE MATH (Year 1)
                    </h3>
                    <div class="flex justify-between items-end">
                        <div>
                            <p class="text-sm opacity-80 mb-1">
                                Regular Price: $4,188/yr
                            </p>
                            <p class="text-sm opacity-80">
                                Pilot Program:
                                <span class="font-bold text-yellow-300"
                                    >$630/yr</span
                                >
                            </p>
                        </div>
                        <div class="text-right">
                            <p class="text-sm font-bold text-yellow-300 mb-0">
                                YOU SAVE
                            </p>
                            <p class="text-3xl font-bold leading-none">
                                $3,558
                            </p>
                            <p
                                class="text-xs bg-white text-purple-primary inline-block px-2 py-0.5 rounded mt-1 font-bold"
                            >
                                85% DISCOUNT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Right Content: Timeline -->
            <div
                class="w-5/12 p-12 pl-6 flex flex-col justify-center z-10 h-full bg-purple-50 border-l border-purple-100"
            >
                <h3
                    class="text-2xl font-bold text-purple-primary mb-8 pl-4 border-l-4 border-purple-primary"
                >
                    Activation Timeline
                </h3>
                <div class="relative pl-4">
                    <div class="timeline-line"></div>
                    <div class="flex mb-8 relative">
                        <div class="mr-4 flex flex-col items-center">
                                                    </div>
                        <div>
                            <h4 class="text-lg font-bold text-purple-primary">
                                This Week
                            </h4>
                            <p class="text-gray-600 text-sm">
                                Sign up &amp; secure your spot
                            </p>
                            <span
                                class="inline-block bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded mt-1 font-medium"
                                >No payment needed</span
                            >
                        </div>
                    </div>
                    <div class="flex mb-8 relative">
                        <div class="mr-4 flex flex-col items-center">
                            <div
                                class="timeline-dot bg-purple-light border-purple-light"
                            ></div>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-gray-700">
                                Next Week
                            </h4>
                            <p class="text-gray-500 text-sm">
                                1-hour onboarding call with founder
                            </p>
                            <p class="text-gray-500 text-sm">
                                Connect tools (10 mins)
                            </p>
                        </div>
                    </div>
                    <div class="flex mb-8 relative">
                        <div class="mr-4 flex flex-col items-center">
                            <div
                                class="timeline-dot bg-purple-light border-purple-light"
                            ></div>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-gray-700">
                                Week After
                            </h4>
                            <p class="text-gray-500 text-sm">
                                Go Live: Start getting AI insights
                            </p>
                            <p class="text-gray-500 text-sm">Daily check-ins</p>
                        </div>
                    </div>
                    <div class="flex relative">
                        <div class="mr-4 flex flex-col items-center">
                            <div
                                class="timeline-dot bg-purple-light border-purple-light"
                            ></div>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-gray-700">
                                Month 4
                            </h4>
                            <p class="text-gray-500 text-sm">
                                First payment ($70)
                            </p>
                            <p class="text-gray-500 text-sm">
                                Locked in forever
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="mt-10 bg-white p-4 rounded-lg border border-purple-100 shadow-sm text-center"
                >
                    <p class="text-purple-primary font-bold mb-1">
                        Why act now?
                    </p>
                    <p class="text-gray-600 text-sm">
                        Once the 10 spots are gone, the price goes back to
                        $349/mo.
                    </p>
                </div>
            </div>
        </div>`,

  13: `<div class="slide-container">
            <!-- Decorative Backgrounds -->
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
            <div class="w-full flex p-12 relative z-10 h-full">
                <div class="w-1/3 flex flex-col justify-center pr-8">
                    <h1
                        class="text-6xl font-bold text-purple-primary mb-4 leading-tight"
                    >
                        Where Do We Go From Here?
                    </h1>
                    <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                        Based on your team's needs and current growth stage, I
                        strongly recommend we start with the Pilot
                        program to maximize ROI immediately.
                    </p>
                    <div class="mt-auto">
                        <div
                            class="bg-purple-faint border-l-4 border-purple-primary p-6 rounded-r-lg"
                        >
                            <p
                                class="text-gray-500 text-sm font-semibold uppercase mb-2 tracking-wider"
                            >
                                My Recommendation
                            </p>
                            <p class="text-xl font-bold text-gray-800 mb-2">
                                Pilot Program
                            </p>
                            <ul class="text-sm text-gray-600 space-y-1 mb-4">
                                <li class="flex items-center">
                                    <i
                                        class="fas fa-check text-purple-primary text-xs mr-2"
                                    ></i>
                                    Save ~$3.5k in Year 1
                                </li>
                                <li class="flex items-center">
                                    <i
                                        class="fas fa-check text-purple-primary text-xs mr-2"
                                    ></i>
                                    Lock in $70/mo forever
                                </li>
                                <li class="flex items-center">
                                    <i
                                        class="fas fa-check text-purple-primary text-xs mr-2"
                                    ></i>
                                    Help shape the product
                                </li>
                                <li class="flex items-center">
                                    <i
                                        class="fas fa-exclamation-circle text-purple-primary text-xs mr-2"
                                    ></i>
                                    Only 10 spots left
                                </li>
                            </ul>
                            <div class="pt-4 border-t border-purple-200">
                                <p
                                    class="text-lg font-bold text-purple-primary leading-tight"
                                >
                                    So, what do you think? Should we get you set
                                    up this week?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-2/3 grid grid-cols-3 gap-5 items-stretch py-4">
                    <div class="flex flex-col">
                        <div
                            class="option-card standard rounded-xl p-6 flex flex-col h-full opacity-80 hover:opacity-100"
                        >
                            <div class="text-center mb-6">
                                <h3 class="text-lg font-bold text-gray-700">
                                    Standard Trial
                                </h3>
                                <p class="text-sm text-gray-500 mt-1">
                                    14-Day Free Access
                                </p>
                            </div>
                            <div class="relative pl-5 flex-grow space-y-6">
                                <div class="timeline-line"></div>
                                <div class="relative">
                                                                        <p
                                        class="text-xs font-bold text-gray-400 uppercase"
                                    >
                                        TODAY
                                    </p>
                                    <p
                                        class="text-sm font-medium text-gray-800"
                                    >
                                        Sign up for free trial
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        Choose plan
                                    </p>
                                </div>
                                <div class="relative">
                                                                        <p
                                        class="text-xs font-bold text-gray-400 uppercase"
                                    >
                                        THIS WEEK
                                    </p>
                                    <p
                                        class="text-sm font-medium text-gray-800"
                                    >
                                        Self-serve setup
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        Guides + videos provided
                                    </p>
                                </div>
                                <div class="relative">
                                                                        <p
                                        class="text-xs font-bold text-gray-400 uppercase"
                                    >
                                        NEXT 14 DAYS
                                    </p>
                                    <p
                                        class="text-sm font-medium text-gray-800"
                                    >
                                        Test features
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        Auto check-ins Day 3, 7, 13
                                    </p>
                                </div>
                                <div class="relative">
                                                                        <p
                                        class="text-xs font-bold text-gray-400 uppercase"
                                    >
                                        DAY 14
                                    </p>
                                    <p
                                        class="text-sm font-medium text-gray-800"
                                    >
                                        Subscribe or cancel
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        No charge if you don't
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col -mt-4 mb-4 z-10">
                        <div
                            class="option-card recommended rounded-xl p-6 flex flex-col h-full shadow-xl"
                        >
                            <div class="recommended-badge">RECOMMENDED</div>
                            <div class="text-center mb-6 mt-2">
                                <h3
                                    class="text-xl font-bold text-purple-primary"
                                >
                                    Pilot Program
                                </h3>
                                <p class="text-sm text-gray-500 mt-1">
                                    Limited Availability
                                </p>
                            </div>
                            <div class="relative pl-5 flex-grow space-y-6">
                                <div class="timeline-line"></div>
                                <div class="relative">
                                                                        <p
                                        class="text-xs font-bold text-purple-primary uppercase"
                                    >
                                        TODAY
                                    </p>
                                    <p class="text-sm font-bold text-gray-800">
                                        Sign agreement
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        No payment for 3 months
                                    </p>
                                </div>
                                <div class="relative">
                                                                        <p
                                        class="text-xs font-bold text-purple-primary uppercase"
                                    >
                                        THIS WEEK
                                    </p>
                                    <p class="text-sm font-bold text-gray-800">
                                        1-hr onboarding call
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        I walk you through setup
                                    </p>
                                </div>
                                <div class="relative">
                                                                        <p
                                        class="text-xs font-bold text-purple-primary uppercase"
                                    >
                                        NEXT WEEK
                                    </p>
                                    <p class="text-sm font-bold text-gray-800">
                                        First AI insights
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        Daily personal check-ins
                                    </p>
                                </div>
                                <div class="relative">
                                                                        <p
                                        class="text-xs font-bold text-purple-primary uppercase"
                                    >
                                        MONTH 4
                                    </p>
                                    <p class="text-sm font-bold text-gray-800">
                                        First payment
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        $70 locked in forever
                                    </p>
                                </div>
                            </div>
                            <div
                                class="mt-4 pt-4 border-t border-purple-100 text-center"
                            >
                                <button
                                    class="bg-purple-primary text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition w-full"
                                >
                                    Select This Option
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div
                            class="option-card standard rounded-xl p-6 flex flex-col h-full opacity-80 hover:opacity-100"
                        >
                            <div class="text-center mb-6">
                                <h3 class="text-lg font-bold text-gray-700">
                                    Follow-Up
                                </h3>
                                <p class="text-sm text-gray-500 mt-1">
                                    Discuss with Team
                                </p>
                            </div>
                            <div class="relative pl-5 flex-grow space-y-6">
                                <div class="timeline-line"></div>
                                <div class="relative">
                                                                        <p
                                        class="text-xs font-bold text-gray-400 uppercase"
                                    >
                                        TODAY
                                    </p>
                                    <p
                                        class="text-sm font-medium text-gray-800"
                                    >
                                        Take this deck
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        Discuss with co-founders
                                    </p>
                                </div>
                                <div class="relative">
                                                                        <p
                                        class="text-xs font-bold text-gray-400 uppercase"
                                    >
                                        THIS WEEK
                                    </p>
                                    <p
                                        class="text-sm font-medium text-gray-800"
                                    >
                                        Schedule call
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        30-min follow-up Q&amp;A
                                    </p>
                                </div>
                                <div class="relative">
                                                                        <p
                                        class="text-xs font-bold text-gray-400 uppercase"
                                    >
                                        NEXT WEEK
                                    </p>
                                    <p
                                        class="text-sm font-medium text-gray-800"
                                    >
                                        Decision time
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        Choose path forward
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
}
