export type LeadUtm = {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
};

export type LeadRequest = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  sourcePage: string;
  consent: true;
  utm?: LeadUtm;
  companyWebsite?: string;
};

export type LeadResponse = {
  id: string;
  status: "accepted" | "ignored_honeypot";
  createdAt: string;
};
