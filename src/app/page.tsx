"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/19867468/pexels-photo-19867468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Wooden letter tiles spelling SaaS on rustic wood. Ideal for cloud computing and business concepts." },
  { "id": "features-image", "url": "https://images.pexels.com/photos/7679829/pexels-photo-7679829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Man reviewing sneakers in-store captured on smartphone, showcasing footwear." },
  { "id": "product-image", "url": "https://images.pexels.com/photos/8000536/pexels-photo-8000536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two colleagues collaborate on a project using laptops and large monitors in a modern office setting." },
  { "id": "team-image", "url": "https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A diverse team of women brainstorming ideas in a modern office setting, fostering collaboration and creativity." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="MVPBlocks"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to MVPBlocks"
            description="Your platform to create MVPs efficiently."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" }
            ]}
            className="bg-blue-50"
            titleClassName="text-blue-900"
            descriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We build tools that empower you to create exceptional MVPs."
            buttons={[{ text: "Get Started", href: "https://example.com" }]}
            className="bg-blue-50"
            titleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: "Easy Integration", description: "Integrate with existing tools effortlessly.", imageSrc: assetMap.find(a => a.id === "features-image")?.url, button: { text: "Learn More", href: "#" } }
            ]}
            className="bg-blue-50"
            cardTitleClassName="text-blue-900"
            cardDescriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardOne
            plans={[
              { id: "basic", badge: "Starter", price: "$19/mo", subtitle: "For solo creators", features: ["Unlimited projects", "Email support"] },
              { id: "pro", badge: "Pro", price: "$49/mo", subtitle: "For teams", features: ["Everything in Starter", "Priority support"], badgeIcon: "asset://sparkles" }
            ]}
            className="bg-blue-50"
            priceClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Join our community"
            description="Subscribe for updates and exclusive content."
            onSubmit={(email) => console.log(email)}
            className="bg-blue-50"
            titleClassName="text-blue-900"
            descriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 MVPBlocks"
            className="bg-blue-50"
            columnsClassName="text-blue-900"
            copyrightTextClassName="text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}