import Link from 'next/link';
import footerImageOne from "@/images/footer-RIBA-logo.png";
import footerImageTwo from "@/images/footer-ARB-logo.png";
import footerImageThree from "@/images/footer-New+London+1.png";
import footerImageFour from "@/images/footer-Haringey.png";
import footerImageFive from "@/images/footer-Evening+Standard+1.png";


export default function Footer() {
    return (
        <>
            <footer className="bg-[#1E373B] text-white px-6 md:px-16 py-12">
                <div className="grid lg:grid-cols-4 sm:gap-6 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-4 text-lg">
                        <div>
                            <p>info@pinchinarchitects.com</p>
                            <p>020 7183 1456</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" aria-label="Instagram" className="hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><defs><path id="lineiconsInstagram0" fill="#fff" d="M8.667 12a3.333 3.333 0 1 1 6.667 0a3.333 3.333 0 0 1-6.667 0m-1.802 0a5.135 5.135 0 1 0 10.27 0a5.135 5.135 0 0 0-10.27 0m9.273-5.338a1.2 1.2 0 1 0 1.2-1.2a1.2 1.2 0 0 0-1.2 1.2M7.96 20.14c-.975-.045-1.505-.207-1.857-.344a3.1 3.1 0 0 1-1.15-.748a3.1 3.1 0 0 1-.748-1.15c-.138-.352-.3-.882-.344-1.857c-.049-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042c.044-.975.208-1.504.344-1.857c.181-.467.398-.8.748-1.15s.682-.567 1.15-.748c.352-.138.882-.3 1.857-.344C9.014 3.81 9.33 3.8 12 3.8s2.986.01 4.041.059c.975.044 1.504.208 1.857.344c.467.18.8.398 1.15.748s.567.683.749 1.15c.137.352.3.882.343 1.857c.049 1.055.059 1.37.059 4.041c0 2.67-.01 2.986-.059 4.041c-.044.975-.207 1.505-.343 1.857a3.1 3.1 0 0 1-.748 1.15a3.1 3.1 0 0 1-1.15.748c-.353.137-.883.3-1.858.344c-1.054.048-1.37.058-4.041.058c-2.67 0-2.986-.01-4.04-.058M7.877 2.06c-1.064.049-1.792.218-2.427.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.636-.416 1.363-.464 2.427C2.01 8.943 2 9.284 2 12s.011 3.057.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.771a4.9 4.9 0 0 0 1.772 1.154c.636.247 1.363.416 2.427.464C8.944 21.988 9.284 22 12 22s3.057-.011 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.9 4.9 0 0 0 1.771-1.154a4.9 4.9 0 0 0 1.154-1.77c.247-.637.417-1.364.464-2.428c.049-1.067.06-1.407.06-4.123s-.011-3.057-.06-4.123c-.048-1.064-.217-1.792-.464-2.427a4.9 4.9 0 0 0-1.154-1.772a4.9 4.9 0 0 0-1.77-1.153c-.637-.247-1.364-.417-2.427-.464C15.057 2.012 14.717 2 12 2s-3.057.011-4.124.06"></path></defs><use href="#lineiconsInstagram0"></use><use href="#lineiconsInstagram0"></use></svg>            </a>
                            <a href="#" aria-label="Pinterest" className="hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><defs><path id="akarIconsPinterestFill0" fill="#fff" d="M0 0h24v24H0z"></path></defs><g fill="none"><g clipPath="url(#akarIconsPinterestFill1)"><g clipPath="url(#akarIconsPinterestFill2)"><path fill="#fff" d="M0 12c0 5.123 3.211 9.497 7.73 11.218c-.11-.937-.227-2.482.025-3.566c.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9c1.02 0 1.512.765 1.512 1.682c0 1.025-.653 2.557-.99 3.978c-.281 1.189.597 2.159 1.769 2.159c2.123 0 3.756-2.239 3.756-5.471c0-2.861-2.056-4.86-4.991-4.86c-3.398 0-5.393 2.549-5.393 5.184c0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355c-.053.218-.173.265-.4.159c-1.492-.694-2.424-2.875-2.424-4.627c0-3.769 2.737-7.229 7.892-7.229c4.144 0 7.365 2.953 7.365 6.899c0 4.117-2.595 7.431-6.199 7.431c-1.211 0-2.348-.63-2.738-1.373c0 0-.599 2.282-.744 2.84c-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0S0 5.373 0 12"></path></g></g><defs><clipPath id="akarIconsPinterestFill1"><use href="#akarIconsPinterestFill0"></use></clipPath><clipPath id="akarIconsPinterestFill2"><use href="#akarIconsPinterestFill0"></use></clipPath></defs></g></svg>                        </a>
                        </div>
                        <Link href="#" className="inline-block pt-4 text-white text-sm hover:underline">
                            Back To Top →
                        </Link>
                    </div>

                    {/* Services */}
                    <div className="space-y-2 text-lg flex flex-col">
                        <Link href="/">Home</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/bespoke-homes">Bespoke Homes</Link>
                        <Link href="/architects-home-visit">Architects Home Visit</Link>
                        <Link href="/design-service">Design Service</Link>
                    </div>

                    {/* Company Info */}
                    <div className="space-y-2 text-lg flex flex-col">
                        <Link href="/our-process">Our Process</Link>
                        <Link href="/about">About</Link>
                        <Link href="/zero-carbon">Zero Carbon</Link>
                        <Link href="/journal">Journal</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                    {/* Locations */}
                    <div className="space-y-2 text-lg flex flex-col ">
                        <Link href="/locations/watford">Watford</Link>
                        <Link href="/locations/berkhamsted">Berkhamsted</Link>
                        <Link href="/locations/hemel-hempstead">Hemel Hempstead</Link>
                        <Link href="/locations/st-albans">St Albans</Link>
                        <Link href="/locations/harpenden">Harpenden</Link>
                        <Link href="/locations/tring">Tring</Link>
                        <Link href="/locations/hitchin">Hitchin</Link>
                        <Link href="/locations/welwyn-garden-city">Welwyn Garden City</Link>
                        <Link href="/locations/stevenage">Stevenage</Link>
                        <Link href="/locations/marlow">Marlow</Link>
                        <Link href="/locations/bishops-stortford">Bishop’s Stortford</Link>
                        <Link href="/locations/hampstead">Hampstead</Link>
                    </div>
                </div>

                {/* Logos */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 items-center">
                    <img src={footerImageOne.src} alt="RIBA" className="h-16" />
                    <img src={footerImageTwo.src} alt="ARB" className="h-12" />
                    <img src={footerImageThree.src} alt="New London Award" className="h-12" />
                    <img src={footerImageFour.src} alt="Haringey Winner" className="h-14" />
                    <img src={footerImageFive.src} alt="Evening Standard" className="h-14" />
                </div>
            </footer>
            <div className='block h-4 bg-yellow-700 w-full'></div>
        </>
    );
}
