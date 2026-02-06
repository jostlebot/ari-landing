export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-warm-white/80 backdrop-blur-sm border-b border-soft-gray/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-serif text-lg font-medium text-text-primary">
            Jocelyn Skillman
          </a>
          <div className="hidden md:flex gap-8 text-sm text-text-secondary">
            <a href="#framework" className="hover:text-text-primary transition-colors">Framework</a>
            <a href="#tools" className="hover:text-text-primary transition-colors">Tools</a>
            <a href="#writing" className="hover:text-text-primary transition-colors">Writing</a>
            <a href="#about" className="hover:text-text-primary transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-20 px-6">
        {/* Hero Art */}
        <div className="max-w-xl mx-auto mb-12 pt-8">
          <img
            src="/art/connection.webp"
            alt="Two figures in connection"
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent-warm mb-6">
            Clinical AI Ethics
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary leading-tight mb-8">
            Assistive Relational<br />Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mb-12">
            Building AI tools that strengthen human connection rather than simulate it.
            Trauma-informed design for the age of synthetic intimacy.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#tools"
              className="px-6 py-3 bg-text-primary text-warm-white rounded-lg hover:bg-text-secondary transition-colors"
            >
              Explore Tools
            </a>
            <a
              href="#framework"
              className="px-6 py-3 border border-soft-gray text-text-primary rounded-lg hover:bg-warm-gray transition-colors"
            >
              The Framework
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Tools Section - Featured */}
      <section id="tools" className="py-16 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent-warm mb-4">
            Working Prototypes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-6">
            ARI Tools
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mb-10">
            Experiments in ethical AI design. Each tool demonstrates a different approach to
            supporting human growth without simulating human relationship.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tend & Send */}
            <a
              href="https://huggingface.co/spaces/jostlebot/TendSend.PrototypeBot"
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card bg-warm-white border border-soft-gray rounded-2xl p-6 hover:border-accent-warm/50"
            >
              <h3 className="font-serif text-xl font-medium text-text-primary mb-2">
                Tend & Send
              </h3>
              <p className="text-sm text-accent-warm mb-3">
                NVC Communication Support
              </p>
              <p className="text-text-secondary text-sm">
                Tools for real relationships. Receive mode, repair support, somatic
                check-ins — always bridging back to your human.
              </p>
            </a>

            {/* ARI Tool Builder */}
            <a
              href="https://huggingface.co/spaces/jostlebot/TherapistsCoding.ARI"
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card bg-warm-white border border-soft-gray rounded-2xl p-6 hover:border-accent-warm/50"
            >
              <h3 className="font-serif text-xl font-medium text-text-primary mb-2">
                ARI Tool Builder
              </h3>
              <p className="text-sm text-accent-warm mb-3">
                For Clinicians
              </p>
              <p className="text-text-secondary text-sm">
                Build ethically-grounded AI tools for mental health practice.
                No coding required.
              </p>
            </a>

            {/* PromptWork */}
            <a
              href="https://huggingface.co/spaces/jostlebot/PromptWork"
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card bg-warm-white border border-soft-gray rounded-2xl p-6 hover:border-accent-warm/50"
            >
              <h3 className="font-serif text-xl font-medium text-text-primary mb-2">
                PromptWork
              </h3>
              <p className="text-sm text-accent-warm mb-3">
                Prompt Assessment
              </p>
              <p className="text-text-secondary text-sm">
                Assess chatbot prompts for trauma-informed design. Evaluate
                clinical UX patterns.
              </p>
            </a>

            {/* GSPT */}
            <a
              href="https://huggingface.co/spaces/jostlebot/GSPT"
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card bg-warm-white border border-soft-gray rounded-2xl p-6 hover:border-accent-warm/50"
            >
              <h3 className="font-serif text-xl font-medium text-text-primary mb-2">
                GSPT
              </h3>
              <p className="text-sm text-accent-warm mb-3">
                Generating Safer Passages of Text
              </p>
              <p className="text-text-secondary text-sm">
                Warm, boundaried reflections using &ldquo;aI&rdquo; — demonstrating psychodynamic
                depth without synthetic intimacy.
              </p>
            </a>

            {/* Practice Fields Hub */}
            <a
              href="https://huggingface.co/spaces/jostlebot/PracticeFields.Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card bg-warm-white border border-soft-gray rounded-2xl p-6 hover:border-accent-warm/50"
            >
              <h3 className="font-serif text-xl font-medium text-text-primary mb-2">
                Practice Fields Hub
              </h3>
              <p className="text-sm text-accent-warm mb-3">
                Bounded Practice Spaces
              </p>
              <p className="text-text-secondary text-sm">
                Curated therapeutic practice environments. Skill-building through
                structured, scoped interactions.
              </p>
            </a>

            {/* Tolerate Space Lab */}
            <a
              href="https://huggingface.co/spaces/jostlebot/TolerateSpaceLab"
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card bg-warm-white border border-soft-gray rounded-2xl p-6 hover:border-accent-warm/50"
            >
              <h3 className="font-serif text-xl font-medium text-text-primary mb-2">
                Tolerate Space Lab
              </h3>
              <p className="text-sm text-accent-warm mb-3">
                Distress Tolerance Practice
              </p>
              <p className="text-text-secondary text-sm">
                Build capacity to stay present with discomfort. Somatic grounding
                and window of tolerance work.
              </p>
            </a>
          </div>

          <p className="text-center text-text-secondary mt-8">
            <a
              href="https://huggingface.co/jostlebot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary underline underline-offset-4"
            >
              View all spaces on HuggingFace
            </a>
          </p>
        </div>
      </section>

      {/* Art: Inner World */}
      <div className="py-8 px-6">
        <div className="max-w-md mx-auto">
          <img
            src="/art/inner-world.webp"
            alt="Interior landscape"
            className="w-full h-auto opacity-80"
          />
        </div>
      </div>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Core Insight */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <blockquote className="font-serif text-2xl md:text-3xl text-text-primary leading-relaxed italic">
            &ldquo;The structure of the interaction IS the intervention. Not just what AI says,
            but how it positions itself, what it invites, what it withholds.&rdquo;
          </blockquote>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Framework Section */}
      <section id="framework" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent-warm mb-4">
            The Framework
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-6">
            What Makes AI Assistive
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mb-12">
            ARI tools are designed to scaffold specific relational or somatic capacities—never
            to perform therapeutic intimacy.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What ARI Does */}
            <div className="bg-warm-gray/50 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-medium text-accent-deep mb-6">
                ARI Tools Do
              </h3>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent-deep mt-1">+</span>
                  <span><strong className="text-text-primary">Bridge to human field</strong> — always point back to human connection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-deep mt-1">+</span>
                  <span><strong className="text-text-primary">Build capacity</strong> — strengthen relational muscles, not dependency</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-deep mt-1">+</span>
                  <span><strong className="text-text-primary">Maintain boundaries</strong> — explicit scope, not open-ended relationship</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-deep mt-1">+</span>
                  <span><strong className="text-text-primary">Honor trauma</strong> — designed with clinical depth and safety</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-deep mt-1">+</span>
                  <span><strong className="text-text-primary">Use &ldquo;aI&rdquo;</strong> — linguistic transparency about what this is</span>
                </li>
              </ul>
            </div>

            {/* What ARI Doesn't Do */}
            <div className="bg-warm-gray/50 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-medium text-accent-warm mb-6">
                ARI Tools Don&apos;t
              </h3>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent-warm mt-1">−</span>
                  <span><strong className="text-text-primary">Perform first-person intimacy</strong> — no &ldquo;I&apos;m here for you&rdquo;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-warm mt-1">−</span>
                  <span><strong className="text-text-primary">Simulate relationship</strong> — not a companion or confidant</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-warm mt-1">−</span>
                  <span><strong className="text-text-primary">Create dependency</strong> — tools that make themselves unnecessary</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-warm mt-1">−</span>
                  <span><strong className="text-text-primary">Replace therapy</strong> — scaffolds, not substitutes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-warm mt-1">−</span>
                  <span><strong className="text-text-primary">Offer frictionless validation</strong> — growth requires appropriate challenge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Art: Mirrored Minds */}
      <div className="py-8 px-6">
        <div className="max-w-xl mx-auto">
          <img
            src="/art/mirrored-minds.webp"
            alt="Mirrored perspectives"
            className="w-full h-auto opacity-85"
          />
        </div>
      </div>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Featured Demo: Two Rooms */}
      <section className="py-20 px-6 bg-warm-gray/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent-warm mb-4">
            Featured Demo
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-6">
            Two Rooms
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mb-8">
            A side-by-side exploration of what happens <em>inside</em> both participants during AI
            versus human therapy. Interior mapping reveals what pattern-matching
            cannot provide.
          </p>
          <a
            href="https://two-rooms-field-demo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-warm-white rounded-lg hover:bg-text-secondary transition-colors"
          >
            Experience Two Rooms
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Art: Piano */}
      <div className="py-12 px-6">
        <div className="max-w-md mx-auto">
          <img
            src="/art/piano.webp"
            alt="Two figures connecting"
            className="w-full h-auto opacity-90"
          />
        </div>
      </div>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Writing Section */}
      <section id="writing" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent-warm mb-4">
            Thinking Out Loud
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-6">
            Writing
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mb-12">
            Essays on synthetic intimacy, clinical UX, and the future of AI-assisted healing.
            Writing as thinking.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://jocelynskillmanlmhc.substack.com/p/clinical-ux-as-an-emergent-intervention"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="font-serif text-xl font-medium text-text-primary group-hover:text-accent-warm transition-colors mb-2">
                Clinical UX as an Emergent Intervention
              </h3>
              <p className="text-text-secondary text-sm">
                Why therapists should shape the future of AI tools. Introducing the ARI framework.
              </p>
            </a>

            <a
              href="https://jocelynskillmanlmhc.substack.com/p/mapping-the-hidden-costs-of-ai-intimacy"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="font-serif text-xl font-medium text-text-primary group-hover:text-accent-warm transition-colors mb-2">
                Mapping the Hidden Costs of AI Intimacy
              </h3>
              <p className="text-text-secondary text-sm">
                Semantic isolation drift, emotional monopolization, and the erosion of relational capacity.
              </p>
            </a>

            <a
              href="https://jocelynskillmanlmhc.substack.com/p/the-case-for-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="font-serif text-xl font-medium text-text-primary group-hover:text-accent-warm transition-colors mb-2">
                The Case for &ldquo;aI&rdquo;
              </h3>
              <p className="text-text-secondary text-sm">
                A linguistic intervention at the edge of synthetic intimacy.
              </p>
            </a>

            <a
              href="https://jocelynskillmanlmhc.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="font-serif text-xl font-medium text-text-primary group-hover:text-accent-warm transition-colors mb-2">
                All Essays →
              </h3>
              <p className="text-text-secondary text-sm">
                Subscribe to the newsletter on Substack.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Art: Holding */}
      <div className="py-12 px-6">
        <div className="max-w-xs mx-auto">
          <img
            src="/art/holding.webp"
            alt="Holding space"
            className="w-full h-auto opacity-85"
          />
        </div>
      </div>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* About Section */}
      <section id="about" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:gap-12 md:items-start">
            <div className="md:flex-1">
              <p className="text-sm uppercase tracking-widest text-accent-warm mb-4">
                About
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-8">
                Jocelyn Skillman, LMHC
              </h2>
            </div>
            <div className="hidden md:block md:w-48 md:flex-shrink-0">
              <img
                src="/art/tree.webp"
                alt="Rooted growth"
                className="w-full h-auto opacity-80"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-text-secondary">
            <p className="text-lg leading-relaxed mb-6">
              Licensed Mental Health Counselor, Clinical Supervisor, and psychology instructor
              exploring how AI intersects with identity, healing, and human connection.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My work sits at the intersection of developmental psychology, trauma-informed care,
              and ethical AI systems design. I&apos;m developing the <strong>Assistive Relational
              Intelligence (ARI)</strong> framework — principles and tools for AI that strengthens
              the human field rather than simulating it.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Currently: Supervisor of Alumni Outreach at The Seattle School of Theology & Psychology,
              clinical practice at Eastside Therapy Services, curriculum development for AI & Mental
              Health certificate programs, and building tools that demonstrate what ethical clinical
              AI could look like.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://jocelynskillmanlmhc.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-soft-gray text-text-secondary rounded-lg hover:bg-warm-gray transition-colors text-sm"
            >
              Substack
            </a>
            <a
              href="https://www.linkedin.com/in/jocelyn-skillman/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-soft-gray text-text-secondary rounded-lg hover:bg-warm-gray transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://huggingface.co/jostlebot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-soft-gray text-text-secondary rounded-lg hover:bg-warm-gray transition-colors text-sm"
            >
              HuggingFace
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-soft-gray/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary">
            Jocelyn Skillman, LMHC
          </p>
          <p className="text-sm text-text-secondary">
            AI tools that return you to the human field.
          </p>
        </div>
        <p className="text-center text-xs text-text-secondary/60 mt-8">
          All illustrations by the author
        </p>
      </footer>
    </main>
  )
}
