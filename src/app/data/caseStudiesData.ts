// Case studies data for Paula Robles Portfolio
import intecsaBrand from "../../assets/case_studies/intecsa-brand.png";
import intecsaResults from "../../assets/case_studies/intecsa-results.png";
import intecsaThumb1 from "../../assets/case_studies/intecsa-thumb-1.jpg";
import intecsaThumb2 from "../../assets/case_studies/intecsa-thumb-2.jpg";
import intecsaThumb3 from "../../assets/case_studies/intecsa-thumb-3.jpg";
import intecsaSampleProduct from "../../assets/case_studies/intecsa-sample-product.png";
import intecsaSampleValue from "../../assets/case_studies/intecsa-sample-value.png";
import intecsaSampleAI from "../../assets/case_studies/intecsa-sample-ai.png";

import intercambiosBrand from "../../assets/case_studies/intercambios-brand.png";
import intercambiosResults from "../../assets/case_studies/intercambios-results.png";
import intercambiosThumb1 from "../../assets/case_studies/intercambios-thumb-1.jpg";
import intercambiosThumb2 from "../../assets/case_studies/intercambios-thumb-2.jpg";
import intercambiosThumb3 from "../../assets/case_studies/intercambios-thumb-3.jpg";

import intlcentreBrand from "../../assets/case_studies/intlcentre-brand.png";
import intlcentreResults from "../../assets/case_studies/intlcentre-results.png";
import intlcentreThumb1 from "../../assets/case_studies/intlcentre-thumb-1.jpg";
import intlcentreThumb2 from "../../assets/case_studies/intlcentre-thumb-2.jpg";
import intlcentreThumb3 from "../../assets/case_studies/intlcentre-thumb-3.jpg";

import manitobanBrand from "../../assets/case_studies/manitoban-brand.png";
import manitobanResults from "../../assets/case_studies/manitoban-results.png";
import manitobanThumb1 from "../../assets/case_studies/manitoban-thumb-1.jpg";
import manitobanThumb2 from "../../assets/case_studies/manitoban-thumb-2.jpg";
import manitobanThumb3 from "../../assets/case_studies/manitoban-thumb-3.jpg";

export interface CaseStudyVideo {
  videoId: string;
  account: string;
  title: string;
  stats: string;
  thumbnailUrl: string;
  tiktokUrl: string;
  tag: string;
}

export interface ClientAccount {
  platform: string;
  handle: string;
  url?: string;
}

export interface ClientCaseStudy {
  id: string;
  name: string;
  shortName: string;
  location: string;
  subtitle: string;
  tagline: string;
  challenge: string;
  objective: string;
  accounts: ClientAccount[];
  brandImage: string;
  resultsImage: string;
  metrics: {
    value: string;
    label: string;
    sublabel: string;
  }[];
  resultsList: {
    title: string;
    desc: string;
  }[];
  videos: CaseStudyVideo[];
  photoSamples?: {
    title: string;
    tag: string;
    img: string;
  }[];
}

export const CLIENT_CASE_STUDIES: ClientCaseStudy[] = [
  {
    id: "intecsa",
    name: "INTECSA Srl.",
    shortName: "INTECSA",
    location: "La Paz - Bolivia",
    subtitle: "Technology distributor in Bolivia",
    tagline: "Lead generating short-form videos & B2B segmentation",
    challenge:
      "INTECSA’s social channels were 90% direct-sales posts, leaving their feed dry, transactional, and devoid of any human presence or brand personality.",
    objective:
      "Shift from aggressive selling to value-driven authority by humanizing the brand, sharing educational content, and positioning INTECSA as tech experts rather than just distributors.",
    accounts: [
      { platform: "TikTok", handle: "@intecsaoficial", url: "https://www.tiktok.com/@intecsaoficial" },
      { platform: "Instagram", handle: "@intecsa.srl", url: "https://www.instagram.com/intecsa.srl" },
      { platform: "Facebook", handle: "Intecsa srl - La Paz", url: "https://www.facebook.com" },
      { platform: "LinkedIn", handle: "Intecsa SRL", url: "https://www.linkedin.com" },
      { platform: "YouTube", handle: "@intecsabolivia", url: "https://www.youtube.com/@intecsabolivia" },
    ],
    brandImage: intecsaBrand,
    resultsImage: intecsaResults,
    metrics: [
      { value: "191.6K+", label: "Ecosystem Reach", sublabel: "Across 5 channels (FB, TikTok, LI, YT)" },
      { value: "73.3K", label: "Top Viral Video", sublabel: "Single laptop warranty tip video" },
      { value: "$0.065", label: "Ultra-Low CPA", sublabel: "130 conversions with only $8.50 spend" },
      { value: "2.44%", label: "TikTok Ads CTR", sublabel: "1,673 high-intent clicks generated" },
    ],
    resultsList: [
      {
        title: "Massive Ecosystem Reach",
        desc: "Generated 191.6K+ total impressions and views across 5 cross-platform channels (Facebook, TikTok, LinkedIn, YouTube).",
      },
      {
        title: "Viral Educational TikToks",
        desc: "Produced top-performing technical tip videos reaching 73.3K views on a single video (laptop serial/warranty verification).",
      },
      {
        title: "Hyper-Efficient Paid Experiment",
        desc: "Managed TikTok Ads with just $8.50 USD total spend, delivering 68.5K impressions, 1,673 clicks (2.44% CTR), and 130 conversions at an ultra-low CPA of $0.065.",
      },
    ],
    photoSamples: [
      { title: "Product Showing", tag: "Tech Showcase", img: intecsaSampleProduct },
      { title: "Value Content", tag: "Educational Advice", img: intecsaSampleValue },
      { title: "AI Generated Content", tag: "Visual Production", img: intecsaSampleAI },
    ],
    videos: [
      {
        videoId: "7707406743583673618",
        account: "@intecsaoficial",
        title: "Laptop Serial & Warranty Verification Tip (Top Viral Hit)",
        stats: "73.3K views",
        thumbnailUrl: intecsaThumb2,
        tiktokUrl: "https://vt.tiktok.com/ZSpW8EjRk/",
        tag: "B2B Tech Tip",
      },
      {
        videoId: "7692111712413027605",
        account: "@intecsaoficial",
        title: "B2B Tech Solutions & Hardware Advisory for Companies",
        stats: "Lead Generator",
        thumbnailUrl: intecsaThumb3,
        tiktokUrl: "https://vt.tiktok.com/ZSpW8pSkF/",
        tag: "Product Demo",
      },
      {
        videoId: "7689593479151865108",
        account: "@intecsaoficial",
        title: "Value-Driven Buying Guide: Choosing the Right Workstation",
        stats: "Authority Content",
        thumbnailUrl: intecsaThumb1,
        tiktokUrl: "https://vt.tiktok.com/ZSpWLeYjv/",
        tag: "Tech Advice",
      },
    ],
  },
  {
    id: "intercambios",
    name: "INTERCAMBIOS CANADA",
    shortName: "Intercambios Canada",
    location: "Vancouver - Canada",
    subtitle: "Educational programs agency based in Vancouver",
    tagline: "Latin American students segmentation & lived-journey storytelling",
    challenge:
      "The programs relied on impersonal promotion without human connection, making the move to Canada feel intimidating and hard for prospective students to visualize.",
    objective:
      "Position the agency as the trusted, go-to educational option in Canada by sharing my own lived journey as the face of the brand to build credibility and community.",
    accounts: [
      { platform: "TikTok", handle: "@intercambios_canada", url: "https://www.tiktok.com/@intercambios_canada" },
    ],
    brandImage: intercambiosBrand,
    resultsImage: intercambiosResults,
    metrics: [
      { value: "899K", label: "Top Anchor Video", sublabel: "Single viral video reach" },
      { value: "+3,800%", label: "Audience Growth", sublabel: "200 → 7,800+ followers in 2 months" },
      { value: "87K+", label: "Secondary Hits", sublabel: "46K, 14K, 11K, 10K views series" },
      { value: "100%", label: "Human-Led Trust", sublabel: "Street interviews + authentic vlogs" },
    ],
    resultsList: [
      {
        title: "Explosive Audience Growth",
        desc: "Scaled the community from 200 to 7,800+ followers in just 2 months (+3,800% growth) through an organic, student-first narrative.",
      },
      {
        title: "Viral Reach & Content Performance",
        desc: "Produced top-performing short-form videos capturing 899K views on a single anchor video, with consistent secondary hits generating 46K, 14K, 11K, and 10K views.",
      },
      {
        title: "Trust-Building Field Storytelling",
        desc: "Directed, hosted, and produced street-style interviews with Latin American students in Canada alongside raw, day-in-the-life vlogs transforming abstract immigration pathways into relatable human proof.",
      },
    ],
    videos: [
      {
        videoId: "7544913170607901970",
        account: "@intercambios_canada",
        title: "Mega Anchor Viral: La realidad de estudiar y trabajar en Canadá",
        stats: "🔥 899K views",
        thumbnailUrl: intercambiosThumb2,
        tiktokUrl: "https://vt.tiktok.com/ZSpW8V6xF/",
        tag: "Top Viral Anchor",
      },
      {
        videoId: "7537846417440689464",
        account: "@intercambios_canada",
        title: "Street Interview: ¿Cuánto gastas al mes viviendo en Vancouver?",
        stats: "46K views",
        thumbnailUrl: intercambiosThumb3,
        tiktokUrl: "https://vt.tiktok.com/ZSpW87v2x/",
        tag: "Street Interview",
      },
      {
        videoId: "7544913170607901970",
        account: "@intercambios_canada",
        title: "Guía de Programas & Visas con Paula Robles",
        stats: "14K views",
        thumbnailUrl: intercambiosThumb1,
        tiktokUrl: "https://vt.tiktok.com/ZSpW8EjRk/",
        tag: "Student Vlog",
      },
    ],
  },
  {
    id: "intlcentre",
    name: "INTERNATIONAL CENTRE",
    shortName: "International Centre (UManitoba)",
    location: "Winnipeg - Manitoba",
    subtitle: "University of Manitoba’s International Centre",
    tagline: "Student-led and segmented peer storytelling",
    challenge:
      "Official university communication felt formal and detached, failing to show the real emotional and daily support international students actually receive.",
    objective:
      "Humanize the campus experience by using peer-led storytelling to highlight University of Manitoba’s support systems through my own and my team's personal journeys.",
    accounts: [
      { platform: "TikTok", handle: "@um.international", url: "https://www.tiktok.com/@um.international" },
    ],
    brandImage: intlcentreBrand,
    resultsImage: intlcentreResults,
    metrics: [
      { value: "10K", label: "Peak Video Reach", sublabel: "Outperforming university benchmarks" },
      { value: "3x", label: "Engagement Lift", sublabel: "Humorous reels + honest peer stories" },
      { value: "100%", label: "Lounge Foot Traffic", sublabel: "Turnout boost for International Centre spaces" },
      { value: "Peer-to-Peer", label: "Advocacy Model", sublabel: "Demystified critical campus resources" },
    ],
    resultsList: [
      {
        title: "High-Performing Student Content",
        desc: "Produced and directed relatable short-form videos that drove peak reach of 10K, 7K, and 5K views, outperforming standard institutional benchmarks.",
      },
      {
        title: "Format Diversification",
        desc: "Balanced humorous relatable reels, behind-the-scenes event promos, and honest peer stories to keep international students consistently engaged.",
      },
      {
        title: "Resource Awareness & Foot Traffic",
        desc: "Drove measurable visibility and student turnout for International Centre programs, events, and campus spaces like the student lounge.",
      },
      {
        title: "Peer-to-Peer Advocacy",
        desc: "Successfully demystified campus resources by putting real student faces and genuine lived experiences at the front of university outreach.",
      },
    ],
    videos: [
      {
        videoId: "7555680891800997128",
        account: "@um.international",
        title: "International Student Lounge & Support Systems at U of M",
        stats: "10K views",
        thumbnailUrl: intlcentreThumb1,
        tiktokUrl: "https://vt.tiktok.com/ZSpWLeVpJ/",
        tag: "Campus Tour",
      },
      {
        videoId: "7553746992480931090",
        account: "@um.international",
        title: "Peer Stories: Surviving & Thriving in Winnipeg's Winter",
        stats: "7K views",
        thumbnailUrl: intlcentreThumb2,
        tiktokUrl: "https://vt.tiktok.com/ZSpWLh6cR/",
        tag: "Student Life",
      },
      {
        videoId: "7561465566616194312",
        account: "@um.international",
        title: "Behind The Scenes: International Students Orientation & Events",
        stats: "5K views",
        thumbnailUrl: intlcentreThumb3,
        tiktokUrl: "https://vt.tiktok.com/ZSpWLBVxU/",
        tag: "Event Promo",
      },
    ],
  },
  {
    id: "manitoban",
    name: "THE MANITOBAN",
    shortName: "The Manitoban",
    location: "Winnipeg - Manitoba",
    subtitle: "University of Manitoba’s student newspaper",
    tagline: "Student-led newspaper digital transformation & street interviews",
    challenge:
      "Despite its print reach, The Manitoban had low campus recognition, zero human connection, and a weak digital footprint that failed to drive online readership.",
    objective:
      "Position the publication as a trusted, essential campus staple by humanizing the team, modernizing its digital presence, and driving student traffic online.",
    accounts: [
      { platform: "TikTok", handle: "tobantiktoks", url: "https://www.tiktok.com/@tobantiktoks" },
      { platform: "Instagram", handle: "@thetoban (reels)", url: "https://www.instagram.com/thetoban" },
    ],
    brandImage: manitobanBrand,
    resultsImage: manitobanResults,
    metrics: [
      { value: "35K", label: "TikTok Peak Record", sublabel: "Secondary peaks at 30K, 12K, 9K, 7K" },
      { value: "5K-7K", label: "Instagram Reels", sublabel: "Consistent viral shares across campus" },
      { value: "Digital First", label: "Print Transition", sublabel: "Revitalized 100+ year student newspaper" },
      { value: "100%", label: "Street Coverage", sublabel: "Interactive student voice on campus" },
    ],
    resultsList: [
      {
        title: "Record-Breaking Reach",
        desc: "Scaled TikTok views to peaks of 35K and 30K (with frequent hits of 12K, 9K, and 7K), outperforming all historical benchmarks.",
      },
      {
        title: "Cross-Platform Traction",
        desc: "Built an active Instagram presence with reels consistently generating 5K–7K views and high peer-to-peer shares.",
      },
      {
        title: "On-the-Street Engagement",
        desc: "Produced interactive campus street interviews that engaged students directly, captured real student sentiment, and drove digital readership.",
      },
      {
        title: "Modernized News Format",
        desc: "Shifted coverage toward relatable tips and shareable student life content, successfully bringing the physical newspaper into the digital era.",
      },
    ],
    videos: [
      {
        videoId: "7576431672011394312",
        account: "tobantiktoks",
        title: "Street Interview: What Manitoban Students Really Think",
        stats: "35K views",
        thumbnailUrl: manitobanThumb1,
        tiktokUrl: "https://vt.tiktok.com/ZSpWLMp7e/",
        tag: "Street Interview",
      },
      {
        videoId: "7608727653020880136",
        account: "tobantiktoks",
        title: "Viral Campus Pulse: Stories & Controversies at UManitoba",
        stats: "30K views",
        thumbnailUrl: manitobanThumb2,
        tiktokUrl: "https://vt.tiktok.com/ZSpW8Wsnh/",
        tag: "Campus Pulse",
      },
      {
        videoId: "7620659327677762834",
        account: "tobantiktoks",
        title: "Behind The Frontpage: Meet The Manitoban Student Team",
        stats: "12K views",
        thumbnailUrl: manitobanThumb3,
        tiktokUrl: "https://vt.tiktok.com/ZSpW8vB6C/",
        tag: "Team BTS",
      },
    ],
  },
];

export const PAULA_FAQS = [
  {
    q: "What is your current availability and work preference?",
    a: "I’m open to full-time, contract, and freelance roles — available for remote, hybrid, or on-site work.",
    badge: "Open for Opportunities",
  },
  {
    q: "Are you legally authorized to work in Canada?",
    a: "Yes! I am legally authorized to work full-time in Canada with NO sponsorship required.",
    badge: "Canada Work Authorized (No Sponsorship)",
  },
  {
    q: "Where are you available to work?",
    a: "I’m available for on-site and hybrid roles across Manitoba, British Columbia, and Ontario, as well as fully remote positions worldwide.",
    badge: "MB • BC • ON • Global Remote",
  },
];

export const PAULA_CONTACT = {
  name: "Paula Robles",
  role: "Marketing Specialist & Content Creator",
  phone: "(+591) 78244677",
  phoneFormatted: "+591 78244677",
  address: "786 Allegheny Dr, Winnipeg, MB, Canada",
  email: "roblespaula180@gmail.com",
  socials: [
    { platform: "TikTok", handle: "@boliviana.en.canada", url: "https://www.tiktok.com/@boliviana.en.canada" },
    { platform: "Instagram", handle: "@paularobless_", url: "https://www.instagram.com/paularobless_" },
    { platform: "LinkedIn", handle: "Paula Robles", url: "https://www.linkedin.com/in/paula-robles" },
  ],
};
