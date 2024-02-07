import LogoIpsum from '../../assets/svg/LogoIpsum.svg'
import Facebook from '../../assets/svg/Facebook.svg'
import Instagram from '../../assets/svg/Instagram.svg'
import Twitter from '../../assets/svg/Twitter.svg'
import Github from '../../assets/svg/Github.svg'
import Website from '../../assets/svg/Website.svg'
export default function Footer() {
  return (
    <>
      <h2 className='bg-red-300'>oi teste aaaaaaaa</h2>
      <footer className="bg-gray-900">
        <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-300 sm:justify-start">
                <img src={LogoIpsum} alt="Logo" />
              </div>

              <p
                className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                consequuntur amet culpa cum itaque neque.
              </p>

              <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-teal-500 transition hover:text-teal-500/75"
                  >
                    <span className="sr-only">Facebook</span>
                    <img className='w-8' src={Facebook} alt="Facebook Icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-teal-500 transition hover:text-teal-500/75"
                  >
                    <span className="sr-only">Instagram</span>
                    <img className='w-8' src={Instagram} alt="Instagram Icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-teal-500 transition hover:text-teal-500/75"
                  >
                    <span className="sr-only">Twitter</span>
                    <img className="w-8" src={Twitter} alt="Twitter Icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-teal-500 transition hover:text-teal-500/75"
                  >
                    <span className="sr-only">GitHub</span>
                    <img className="w-8" src={Github} alt="github Icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-teal-500 transition hover:text-teal-500/75"
                  >
                    <img className="w-8" src={Website} alt="" />
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4"
            >
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Sobre nós</p>

                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-white transition hover:text-white/75" href="/">
                        Nossa historia
                      </a>
                    </li>

                    <li>
                      <a className="text-white transition hover:text-white/75" href="/">
                        Nosso time
                      </a>
                    </li>

                    <li>
                      <a className="text-white transition hover:text-white/75" href="/">
                        Lorem Impsu
                      </a>
                    </li>

                    <li>
                      <a className="text-white transition hover:text-white/75" href="/">
                        Carreiras
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Nosso Serviço</p>

                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-white transition hover:text-white/75" href="/">
                        Desenvolvimentos
                      </a>
                    </li>

                    <li>
                      <a className="text-white transition hover:text-white/75" href="/">
                        Projetos
                      </a>
                    </li>

                    <li>
                      <a className="text-white transition hover:text-white/75" href="/">
                        Marketing
                      </a>
                    </li>

                    <li>
                      <a className="text-white transition hover:text-white/75" href="/">
                        Google Ads
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Links de ajuda</p>

                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-white transition hover:text-white/75" href="/">
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a className="text-white transition hover:text-white/75" href="/">
                        Suporte
                      </a>
                    </li>

                    <li>
                      <a
                        className="flex group justify-center sm:justify-start gap-1.5"
                        href="/"
                      >
                        <span className="text-white transition group-hover:text-white/75">
                          Chat WPP
                        </span>

                        <span className="relative flex w-2 h-2 -mr-2">
                          <span
                            className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"
                          ></span>
                          <span
                            className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"
                          ></span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center sm:justify-start gap-1.5 group"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="text-white transition group-hover:text-white/75">
                        lgpd@unimake.com.br
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center sm:justify-start gap-1.5 group"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="text-white transition group-hover:text-white/75">
                        0123456789
                      </span>
                    </a>
                  </li>

                  <li
                    className="flex items-start justify-center gap-1.5 sm:justify-start"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address className="-mt-0.5 not-italic text-white">
                      Paranavaí
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-12 border-t border-gray-800">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-400">
                <span className="block sm:inline">Todos os direitos reservados.</span>

                <a
                  className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                  href="/"
                >
                  termos e condições
                </a>

                <span>&middot;</span>

                <a
                  className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                  href="/"
                >
                  Politica de privacidade
                </a>
              </p>

              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; 2024 Unimake Software
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}