export interface IExperienceProps {
  role: string;
  company: string;
  description: string;
  date: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface IPortfolio {
  image: string;
  id?: number;
  title: string;
  description: string;
  website?: string;
  technology?: string[];
}

export interface ISkillCard {
  image: string | null;
  title: string;
}

export interface TestimonialAvatarProps {
  image: string;
}

export interface ITestimonialCard {
  image: string;
  text: string;
  name: string;
  role: string;
}
