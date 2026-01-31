import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="container mx-auto px-6">

        <div className="py-20 grid gap-12 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold text-white">LearnLink</h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              LearnLink connects learners with expert tutors for personalized,
              flexible, and trusted learning experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              For Students
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/tutors" className="hover:text-white">Find Tutors</Link></li>
              <li><Link href="/categories" className="hover:text-white">Browse Categories</Link></li>
              <li><Link href="/" className="hover:text-white">How It Works</Link></li>
              <li><Link href="/" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              For Tutors
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/become-tutor" className="hover:text-white">Become a Tutor</Link></li>
              <li><Link href="/dashboard" className="hover:text-white">Tutor Dashboard</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/support" className="hover:text-white">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Platform
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} LearnLink. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-white">Facebook</Link>
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">LinkedIn</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
