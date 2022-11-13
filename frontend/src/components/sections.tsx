import { HeroProps } from "./Hero"
import { ProductListProps } from "./ProductList"
import { FeatureListProps } from "./FeatureList"
import { BenefitListProps } from "./BenefitList"
import { StatListProps } from "./StatList"
import { TestimonialListProps } from "./TestimonialList"
import { CtaProps } from "./Cta"
import { LogoListProps } from "./LogoList"
import { AboutHeroProps } from "./about-hero"
import { AboutStatListProps } from "./about-stat-list"
import { AboutLeadershipProps } from "./about-leadership"
import { AboutLogoListProps } from "./about-logo-list"

export { default as HomepageHero } from "./Hero"
export { default as HomepageProductList } from "./ProductList"
export { default as HomepageFeatureList } from "./FeatureList"
export { default as HomepageBenefitList } from "./BenefitList"
export { default as HomepageStatList } from "./StatList"
export { default as HomepageTestimonialList } from "./TestimonialList"
export { default as HomepageCta } from "./Cta"
export { default as HomepageLogoList } from "./LogoList"
export { default as AboutHero } from "./about-hero"
export { default as AboutStatList } from "./about-stat-list"
export { default as AboutLeadership } from "./about-leadership"
export { default as AboutLogoList } from "./about-logo-list"

export type SectionProps =
  | HeroProps
  | LogoListProps
  | ProductListProps
  | FeatureListProps
  | BenefitListProps
  | StatListProps
  | TestimonialListProps
  | CtaProps
  | AboutHeroProps
  | AboutStatListProps
  | AboutLeadershipProps
  | AboutLogoListProps

type Blocktypes =
  | "HomepageHero"
  | "HomepageProductList"
  | "HomepageFeatureList"
  | "HomepageBenefitList"
  | "HomepageStatList"
  | "HomepageTestimonialList"
  | "HomepageCta"
  | "HomepageLogoList"
  | "AboutHero"
  | "AboutStatList"
  | "AboutLeadership"
  | "AboutLogoList"

type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string
  blocktype: B
} & P

export type HomepageBlock =
  | WithBlocktype<"HomepageHero", HeroProps>
  | WithBlocktype<"HomepageProductList", ProductListProps>
  | WithBlocktype<"HomepageFeatureList", FeatureListProps>
  | WithBlocktype<"HomepageBenefitList", BenefitListProps>
  | WithBlocktype<"HomepageStatList", StatListProps>
  | WithBlocktype<"HomepageTestimonialList", TestimonialListProps>
  | WithBlocktype<"HomepageCta", CtaProps>
  | WithBlocktype<"HomepageLogoList", LogoListProps>
  | WithBlocktype<"AboutHero", AboutHeroProps>
  | WithBlocktype<"AboutStatList", AboutStatListProps>
  | WithBlocktype<"AboutLeadership", AboutLeadershipProps>
  | WithBlocktype<"AboutLogoList", AboutLogoListProps>
